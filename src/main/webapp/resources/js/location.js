function loadLocations() {
	$.get('api/list', function(locationList) {
		$('#locationRows').empty();
		$.each(locationList, function() {
			$('#locationRows').append(
				'<tr>' +
				'<td>' + this.id + '</td>' +
				'<td>' + this.name + '</td>' +
				'<td>' + this.latitude + '</td>' +
				'<td>' + this.longitude + '</td>' +
				'<td>' + new Date(this.created) + '</td>' +
				'<td><nobr>' +
				'<button type="button" class="openaddress pure-button pure-button-primary" data-target="#modal_address"data-openaddressurl="http://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.latitude + ',' + this.longitude + '&sensor=false"><i class="fa fa-map-marker"></i> Address</button> ' +
				'<button type="button" class="openmap pure-button pure-button-primary" data-target="#modal_map" data-openmapurl="http://maps.google.com/?q=@' + this.latitude + ',' + this.longitude + '&output=embed"><i class="fa fa-map-marker"></i> Map</button> ' +
				'<button class="pure-button pure-button-primary" onclick="showEditLocationDialog(' + this.id + ');"><i class="fa fa-pencil"></i> Edit</button> ' +
				'<button class="pure-button pure-button-primary" onclick="showExclusionConfirmationDialog(' + this.id + ');"><div id="exclusionDialogConfirm"></div><i class="fa fa-times"></i> Delete</button>' +
				'</nobr></td>' +
				'</tr>'
			);
		});
		$('.openaddress').click(function() {
			$($(this).attr('data-target')).modal('show');
			$('#address_panel').empty();
			$.getJSON($(this).attr('data-openaddressurl'), function(data) {
				$('#address_panel').html(data.results[0].formatted_address);
			});
		});
		$('.openmap').click(function() {
			$($(this).attr('data-target')).modal('show');
			$('#map_panel').attr('src', $(this).attr('data-openmapurl'));
		});
	});
}

function showExclusionConfirmationDialog(id) {
	$("#exclusionDialogConfirm").html("Are you sure you want to delete this location?");
	$("#exclusionDialogConfirm").dialog({
		resizable: false,
		modal: true,
		title: "Modal",
		height: 250,
		width: 400,
		buttons: {
			"Yes": function () {
				$(this).dialog('close');
				$.ajax({
					url: 'api/delete/' + id,
					type: 'DELETE',
					success: function(result) {
						// Instead of only removing the record from the DOM, I decided to reuse the loadLocations function.
			        	loadLocations();
					}
				})
			},
			"No": function () {
			$(this).dialog('close');
			}
		}
	});
}

function showAddLocationDialog() {
	$('#locationDialog').dialog("option", "title", 'Add Location');
	$('#locationDialog').dialog('open');
}

function showEditLocationDialog(id) {
	$.get("api/get/" + id, function(result) {
		$("#locationDialog").html(
			'<form id="locationForm" class="pure-form pure-form-aligned" action="save" method="post">' +
			'<fieldset>' +
			'<legend></legend>' +
			'<div class="pure-control-group">' +
			'<label for="name">Name</label>' +
			'<input id="name" name="name" placeholder="Location Name" name="name" type="text" value="' + result.name + '"/>' +
			'</div>' +
			'<div class="pure-control-group">' +
			'<label for="latitude">Latitude</label>' +
			'<input id="latitude" name="latitude" placeholder="Latitude" type="text" value="' + result.latitude + '"/>' +
			'</div>' +
			'<div class="pure-control-group">' +
			'<label for="longitude">Longitude</label>' +
			'<input id="longitude" name="longitude" placeholder="Longitude" type="text" value="' + result.longitude + '"/>' +
			'</div>' +
			'<input id="id" name="id" type="hidden" value="' + result.id + '"/>' +
			'</fieldset>' +
			'</form>'
		);
		setFormBehavior();
		$('#locationDialog').dialog("option", "title", 'Edit Location');
		$("#locationDialog").dialog('open');
	});
}

function setFormStructure() {
	$('#locationDialog').dialog({
		autoOpen : false,
		position : 'center',
		modal : true,
		resizable : false,
		width : 440,
		buttons : {
			"Save" : function() {
				$('#locationForm').submit();
			},
			"Cancel" : function() {
				$(this).dialog('close');
			}
		},
		close : function() {
			resetDialog($('#locationForm'));
			$(this).dialog('close');
		}
	});
}

function setFormBehavior() {
	$('#locationForm').submit(function (e) {
        $.post('api/save', $(this).serialize(), function(location) {
        	// Instead of only appending the new record to the DOM, I decided to reuse the loadLocations function.
        	loadLocations();
        });
        
        $('#locationDialog').dialog('close');
        e.preventDefault();
    });
}

function resetDialog(form) {
	form.find("input").val("");
}

$(document).ready(function() {
	loadLocations();
	setFormStructure();
	setFormBehavior();
});

<html>
<head>
	<title>restcrud</title>
	
	<link rel="stylesheet" href="${pageContext.request.contextPath}/web-resources/css/pure-0.4.2.css" />
	<link rel="stylesheet" href="${pageContext.request.contextPath}/web-resources/css/font-awesome-4.0.3/css/font-awesome.css" />
	<link rel="stylesheet" href="${pageContext.request.contextPath}/web-resources/css/jquery-ui-1.10.4.custom.css" />
	<link rel="stylesheet" href="${pageContext.request.contextPath}/web-resources/css/bootstrap.min.css" />
	<link rel="stylesheet" href="${pageContext.request.contextPath}/web-resources/css/bootstrap-theme.min.css" />
	<link rel="stylesheet" href="${pageContext.request.contextPath}/web-resources/css/restcrud-common.css" />
	<link rel="stylesheet" href="${pageContext.request.contextPath}/web-resources/css/location.css" />
</head>

<body>
	<div id="locationContent">

		<div id="locationDialog">
			<form id="locationForm" class="pure-form pure-form-aligned" action="save" method="post">
			
				<fieldset>
					<legend></legend>
			
					<div class="pure-control-group">
						<label for="name">Name</label>
						<input id="name" name="name" placeholder="Location Name" name="name" type="text" value=""/>
					</div>
					<div class="pure-control-group">
						<label for="latitude">Latitude</label>
						<input id="latitude" name="latitude" placeholder="Latitude" type="text" value=""/>
					</div>
					<div class="pure-control-group">
						<label for="longitude">Longitude</label>
						<input id="longitude" name="longitude" placeholder="Longitude" type="text" value=""/>
					</div>
			
					<input id="id" name="id" type="hidden" value=""/>
			
				</fieldset>
			</form>
		</div>
		
		<div class="modal" id="modal_address" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		  <div class="modal-dialog">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 class="modal-title" id="myModalLabel">Address</h4>
		      </div>
		      <div class="modal-body" id="address_panel"></div>
		    </div>
		  </div>
		</div>
		
		<div class="modal" id="modal_map" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		  <div class="modal-dialog">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 class="modal-title" id="myModalLabel">Map</h4>
		      </div>
		      <div class="modal-body">
		        <iframe id="map_panel" src="" width="570" height="400"></iframe>
		      </div>
		    </div>
		  </div>
		</div>

		<h1>List of Locations</h1>
		
		<br />

		<button class="pure-button pure-button-primary" onclick="showAddLocationDialog()">
			<i class="fa fa-plus"></i> Add Location
		</button>
		<br>
		<table class="pure-table pure-table-bordered pure-table-striped">
			<thead>
				<tr>
					<th width="4%">Id</th>
					<th width="12%">Name</th>
					<th width="12%">Latitude</th>
					<th width="12%">Longitude</th>
					<th width="12%">Created</th>
					<th width="12%">Actions</th>
				</tr>
			</thead>
			<tbody id="locationRows">
			</tbody>
		</table>

	</div>

	<script type="text/javascript" src="${pageContext.request.contextPath}/web-resources/js/lib/jquery-1.10.2.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web-resources/js/lib/jquery-ui-1.10.4.custom.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web-resources/js/lib/bootstrap.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web-resources/js/location.js"></script>
</body>
</html>
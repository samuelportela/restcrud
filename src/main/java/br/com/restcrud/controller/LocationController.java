package br.com.restcrud.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.restcrud.model.Location;
import br.com.restcrud.service.LocationService;

@Controller
@RequestMapping("location")
public class LocationController {

	@Autowired
	private LocationService locationService;

	@RequestMapping(value = { "/" })
	public String index(Map<String, Object> map) {
		return "/location/index";
	}

	@RequestMapping(value = { "/api/list" }, method = RequestMethod.GET)
	public @ResponseBody List<Location> list() {
		return locationService.list();
	}

	@RequestMapping(value = { "/api/save" }, method = RequestMethod.POST)
	public @ResponseBody Location save(@ModelAttribute("location") Location location,
			BindingResult result) {
		return locationService.save(location);
	}

	@RequestMapping(value = { "/api/get/{locationId}" }, method = RequestMethod.GET)
	public @ResponseBody Location get(@PathVariable Long locationId, Map<String, Object> map) {
		return locationService.get(locationId);
	}

	@RequestMapping(value = { "/api/delete/{locationId}" }, method = RequestMethod.DELETE)
	public @ResponseBody Location delete(@PathVariable("locationId") Long id) {
		return locationService.delete(id);
	}
}

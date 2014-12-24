package br.com.restcrud.service.impl;

import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.restcrud.dao.LocationDao;
import br.com.restcrud.model.Location;
import br.com.restcrud.service.LocationService;

@Service
public class LocationServiceImpl implements LocationService {

	@Autowired
	private LocationDao locationDao;

	@Transactional
	public Location save(Location location) {
		populateCreatedField(location);
		return locationDao.save(location);
	}
	
	private void populateCreatedField(Location location) {
		if (location.getId() != null) {
			location.setCreated(getOldCreatedValue(location.getId()));
		} else {
			location.setCreated(new GregorianCalendar().getTime());
		}
	}
	
	private Date getOldCreatedValue(Long locationId) {
		return get(locationId).getCreated();
	}

	@Transactional(readOnly = true)
	public List<Location> list() {
		return locationDao.list();
	}

	@Transactional(readOnly = true)
	public Location get(Long id) {
		return locationDao.get(id);
	}

	@Transactional
	public Location delete(Long id) {
		return (Location) locationDao.delete(id);

	}

}

package br.com.restcrud.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import br.com.restcrud.dao.LocationDao;
import br.com.restcrud.model.Location;

@Repository
public class LocationDaoImpl implements LocationDao {

	@Autowired
	private SessionFactory sessionFactory;

	public Location save(Location location) {
		return (Location) getSession().merge(location);
	}

	@SuppressWarnings("unchecked")
	public List<Location> list() {
		return getSession().createCriteria(Location.class).list();
	}

	public Location get(Long id) {
		return (Location) getSession().get(Location.class, id);
	}

	public Location delete(Long id) {
		Location location = get(id);

		if (null != location) {
			getSession().delete(location);
		}
		
		return location;
	}

	private Session getSession() {
		Session sess = getSessionFactory().getCurrentSession();
		if (sess == null) {
			sess = getSessionFactory().openSession();
		}
		return sess;
	}

	private SessionFactory getSessionFactory() {
		return sessionFactory;
	}
}

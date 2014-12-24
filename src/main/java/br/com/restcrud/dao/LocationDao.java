package br.com.restcrud.dao;

import java.util.List;

import br.com.restcrud.model.Location;

public interface LocationDao {

	/*
	 * CREATE and UPDATE
	 */
	public Location save(Location location);

	/*
	 * READ
	 */
	public List<Location> list();
	public Location get(Long id);

	/*
	 * DELETE
	 */
	public Location delete(Long id);
}

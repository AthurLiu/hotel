package com.dbs.serviceImpl;

import java.util.List;
import com.dbs.entity.House;
import com.dbs.mapper.HouseMapper;
import com.dbs.service.HouseService;

public class HouseServiceImp implements HouseService {
	private HouseMapper hmapper;
	
	public boolean houseAdd(House house) {
		return hmapper.houseAdd(house);
	}

	public List<House> selectAllHouse() {
		return hmapper.selectAllHouse();
	}

	public boolean houseDelete(int house_id) {
		return hmapper.houseDelete(house_id);
	}

	public boolean houseUpdate(House house) {
		return hmapper.houseUpdate(house);
	}

	public HouseMapper getHmapper() {
		return hmapper;
	}

	public void setHmapper(HouseMapper hmapper) {
		this.hmapper = hmapper;
	}

	public List<House> selectAllHouseA() {
		return hmapper.selectAllHouseA();
	}

	public List<House> selectAllHouseB() {
		return hmapper.selectAllHouseB();
	}

	public List<House> selectAllHouseC() {
		return hmapper.selectAllHouseC();
	}

	public boolean houseUpdateNet(House house) {
		return hmapper.houseUpdateNet(house);
	}
}

package com.dbs.mapper;
import java.util.List;
import com.dbs.entity.House;

public interface HouseMapper {
	
	/**
	 * 删除房屋信息（房管）
	 * @param emp
	 * @return
	 */
	public boolean houseDelete(int house_id);
	
	/**
	 * 修改房屋价格（房管）
	 * @param emp
	 * @return
	 */
	public boolean houseUpdate(House house);
	
	/**
	 * 修改房屋网费（房管）
	 * @param emp
	 * @return
	 */
	public boolean houseUpdateNet(House house);
	
	/**
	 * 添加房屋（房管）
	 * @param emp
	 * @return
	 */
	public boolean houseAdd(House house);
	
	/**
	 * 查询所有房屋信息（房管）
	 * @return
	 */
	public List<House> selectAllHouse();
	
	/**
	 * 查询所有空房信息（房管）
	 * @return
	 */
	public List<House> selectAllHouseA();
	
	/**
	 * 查询所有预定房信息（房管）
	 * @return
	 */
	public List<House> selectAllHouseB();
	
	/**
	 * 查询所有入住房信息（房管）
	 * @return
	 */
	public List<House> selectAllHouseC();
}

package com.dbs.action;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dbs.entity.Emp;
import com.dbs.entity.House;
import com.dbs.service.EmpService;
import com.dbs.service.HouseService;

/**
 * 酒店管理系统
 */
@Controller
public class HouseInfoAction {
	@Autowired
	private HouseService houseService;
	@Autowired
	private EmpService empService;
	
	/**
	 * 酒店房间添加（房管员）
	 * @param house
	 * @param model
	 * @return
	 */
	@RequestMapping(value="houseAdd",method=RequestMethod.POST)
	@ResponseBody
	public String houseAdd(HttpServletRequest request,House house) {
		System.out.println("开始添加房间");
		Emp emp = new Emp();
		emp.setEmpName(request.getSession().getAttribute("user").toString());
		emp = empService.selectByName(emp);
		house.setCreateId(emp.getEmpId());
		house.setUpdateId(emp.getEmpId());
		if(houseService.houseAdd(house)) {
			System.out.println("添加房间成功");
			return "success";
		} else {
			System.out.println("添加房间失败");
			return "fail";
		}
	}
	
	/**
	 * 酒店房间显示（房管员）
	 * @param house
	 * @param model
	 * @return
	 */
	@RequestMapping(value="empGoshowHouse",method=RequestMethod.GET)
	@ResponseBody
	public List<House> selectAllHouse() {
		return houseService.selectAllHouse();
	}
	
	/**
	 * 酒店空房间显示（房管员）
	 * @param house
	 * @param model
	 * @return
	 */
	@RequestMapping(value="houseStateA",method=RequestMethod.GET)
	@ResponseBody
	public List<House> selectHouseStateA() {
		return houseService.selectAllHouseA();
	}
	
	/**
	 * 酒店预定房间显示（房管员）
	 * @param house
	 * @param model
	 * @return
	 */
	@RequestMapping(value="houseStateB",method=RequestMethod.GET)
	@ResponseBody
	public List<House> selectHouseStateB() {
		return houseService.selectAllHouseB();
	}
	
	/**
	 * 酒店入住房间显示（房管员）
	 * @param house
	 * @param model
	 * @return
	 */
	@RequestMapping(value="houseStateC",method=RequestMethod.GET)
	@ResponseBody
	public List<House> selectHouseStateC() {
		return houseService.selectAllHouseC();
	}
	
	/**
	 * 	酒店房间删除（房管员）
	 * @param house
	 * @param model
	 * @return
	 */
	@RequestMapping(value="houseDelete",method=RequestMethod.POST)
	@ResponseBody
	public String houseDelete(House house) {
		System.out.println("准备删除房间");
		if(houseService.houseDelete(house.getHouseId())) {
			System.out.println("删除房间成功");
			return "success";
		} else {
			System.out.println("删除房间失败");
			return "fail";
		}
	}
	
	/**
	 *	 酒店房间价格修改（房管员）
	 * @param house
	 * @return
	 */
	@RequestMapping(value="houseUpdate",method=RequestMethod.POST)
	@ResponseBody
	public String houseUpdate(House house) {
		System.out.println("准备修改房间价格");
		if(EmpInfoAction.employeeID == 0) {
			return "fail1";
		} else {
			house.setUpdateId(EmpInfoAction.employeeID);
			if(houseService.houseUpdate(house)) {
				System.out.println("修改房间价格成功");
				return "success";
			} else {
				System.out.println("修改房间价格失败");
				return "fail";
			}
		}	
	}
	
	/**
	 *	 酒店房间网费修改（房管员）
	 * @param house
	 * @return
	 */
	@RequestMapping(value="houseUpdate1",method=RequestMethod.POST)
	@ResponseBody
	public String houseUpdateNet(House house) {
		System.out.println("准备修改房间网费");
		if(EmpInfoAction.employeeID == 0) {
			return "fail1";
		} else {
			house.setUpdateId(EmpInfoAction.employeeID);
			if(houseService.houseUpdateNet(house)) {
				System.out.println("修改房间网费成功");
				return "success";
			} else {
				System.out.println("修改房间网费失败");
				return "fail";
			}
		}	
	}
}

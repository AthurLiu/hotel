package com.dbs.action;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dbs.entity.House;
import com.dbs.entity.Order;
import com.dbs.entity.Reserve;
import com.dbs.entity.User;
import com.dbs.service.OrderService;

/**
 * 酒店管理系统
 */
@Controller
public class OrderInfoAction {
	@Autowired
	private OrderService orderService;

	/**
	 * 	预定和入住
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="empGoAddOrder",method=RequestMethod.GET)
	@ResponseBody
	public List<House> empGoAddOrder() {
		return orderService.selectAllEmptyHouse();
	}
	
	/**
	 * 显示房间状态
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="empGoshowHouseState",method=RequestMethod.GET)
	@ResponseBody
	public List<House> empGoshowHouseState(Model model) {
		return orderService.selectAllHouse();
	}

	
	
	/**
	 * 添加订单信息
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="addOrder",method=RequestMethod.POST)
	@ResponseBody
	public String addOrder(House house) {
		if(EmpInfoAction.employeeID == 0) {
			return "fail1";
		} else {
			Order order = new Order();
			order.setHouseId(house.getHouseId());
			order.setUserName(house.getHouseLoc());
			order.setCreateId(EmpInfoAction.employeeID);
			house.setUpdateId(EmpInfoAction.employeeID);
			if(orderService.updateHouseStateByOrder(house) && orderService.orderAdd(order)) {
				return "success";
			} else {
				return "fail";
			}
		}	
	}
	
	/**
	 * 	转到修改订单信息
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="empGoChangeOrder",method=RequestMethod.GET)
	@ResponseBody
	public List<House> showOrder(Model model) {
		return orderService.orderShow();
	}
	
	/**
	 * 	转到显示订房信息
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="empGoShowOrder",method=RequestMethod.GET)
	@ResponseBody
	public List<Order> showReserve(Model model) {
		return orderService.ordShow();
	}
	
	/**
	 * 显示指定房间类型的空房
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="houseType",method=RequestMethod.POST)
	@ResponseBody
	public List<House> houseType(@RequestParam String type) {
		System.out.println(type);
		return orderService.selectAllEmptyHouseT(type);
	}
	
	/**
	 * 	取消订房
	 * @param house
	 * @param model
	 */
	@RequestMapping(value="changeOrderA",method=RequestMethod.POST)
	@ResponseBody
	public String changeOrderA(House house) {
		if(EmpInfoAction.employeeID == 0) {
			return "fail1";
		} else {
			house.setUpdateId(EmpInfoAction.employeeID);
			if(orderService.changeOrderA(house) && orderService.deleteOrder(house)) {
				return "success";
			} else {
				return "fail";
			}
		}
	}
	
	/**
	 * 	跳到转接待
	 * @param house
	 * @param model
	 */
	@RequestMapping(value="changeReciver",method=RequestMethod.POST)
	@ResponseBody
	public List<House> changeReciver(House house) {
		return orderService.selectOrderById(house.getHouseId());
	}
	
	/**
	 * 	显示所有的入住信息
	 * @param house
	 * @param model
	 */
	@RequestMapping(value="empGoShowResrve",method=RequestMethod.GET)
	@ResponseBody
	public List<Reserve> empGoShowResrve() {
		return orderService.empGoShowResrve();
	}
	
	/**
	 * 	显示所有的入住信息
	 * @param house
	 * @param model
	 */
	@RequestMapping(value="empGoShowUser",method=RequestMethod.GET)
	@ResponseBody
	public List<User> empGoShowUser() {
		return orderService.empGoShowUser();
	}
	
	/**
	 * 查找指定用户的订房信息
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="selectOrderByName",method=RequestMethod.POST)
	public String selectOrderByName(HttpServletRequest request, Model model) {
		List<Order> orderList = orderService.selectOrderByName(request.getParameter("userName"));
		if(orderList.size() == 0) {
			model.addAttribute("msg", "提示：客人"+ request.getParameter("userName") + "没有预定房间！");
		} else {
			model.addAttribute("msg", "提示：客人"+ request.getParameter("userName") + "已经预定房间！");
		}
		model.addAttribute("orderList", orderList);
		return "orderShow";
	}
	
	/**
	 * 	实现转接待
	 * @param house
	 * @param model
	 */
	@RequestMapping(value="reserveAdd",method=RequestMethod.POST)
	@ResponseBody
	public String reserveAdd(User user1) {
		House house = new House();
		if(EmpInfoAction.employeeID == 0) {
			return "fail1";
		} else {
			house.setHouseId(user1.getUpdateId());
			house.setHouseNet(user1.getCreateTime());
			house.setUpdateId(EmpInfoAction.employeeID);
			house.setHouseDep(user1.getHouseDep());
			user1.setCreateId(EmpInfoAction.employeeID);
			orderService.userAdd(user1);
			house.setCreateId(orderService.selectUserIdByUserName(user1.getUserName()));
			orderService.reserveAdd(house);
			orderService.changeOrderC(house);
			orderService.deleteOrder(house);
			return "success";
		}
	}
}

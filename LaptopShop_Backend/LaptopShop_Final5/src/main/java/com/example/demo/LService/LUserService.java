package com.example.demo.LService;

import com.example.demo.Dto.LUserDTO;
import com.example.demo.LEntity.LUser;

import java.util.List;

public interface LUserService {
    LUser saveUser(LUser user);
    List<LUser> getAllUsers();
    LUser getUserById(Long id);
    LUser updateUser(Long id, LUser user);
    void deleteUser(Long id);
	LUser registerUser(LUser user);
	LUser loginUser(String username, String password);

	 LUser registerUser(LUserDTO userDto);
	 LUser loginUser(LUserDTO credentials);
}

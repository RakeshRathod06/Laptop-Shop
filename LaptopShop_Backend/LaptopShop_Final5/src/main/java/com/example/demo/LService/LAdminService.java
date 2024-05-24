package com.example.demo.LService;

import com.example.demo.Dto.LAdminDto;
import com.example.demo.LEntity.LAdmin;

import java.util.List;

public interface LAdminService {
    LAdmin saveAdmin(LAdmin admin);
    List<LAdmin> getAllAdmins();
    LAdmin getAdminById(Long id);
    LAdmin updateAdmin(Long id, LAdmin admin);
    void deleteAdmin(Long id);
	LAdmin registerAdmin(LAdmin admin);
	LAdmin loginAdmin(String username, String password);
	LAdmin saveDefaultAdmin();
	LAdmin saveDefaultAdmin(LAdmin admin);
}

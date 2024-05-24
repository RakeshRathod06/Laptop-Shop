package com.example.demo.LService;

import com.example.demo.Dto.LUserDTO;
import com.example.demo.LEntity.LUser;
import com.example.demo.LException.ResourceNotFoundException;
import com.example.demo.LRepository.LUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class LUserServiceImpl1 implements LUserService {

    @Autowired
    private LUserRepository userRepo;

    @Autowired
    public LUserServiceImpl1(LUserRepository userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public LUser saveUser(LUser user) {
        return userRepo.save(user);
    }

    @Override
    public List<LUser> getAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public LUser getUserById(Long id) {
        return userRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
    }

    @Override
    public LUser updateUser(Long id, LUser user) {
        LUser existingUser = userRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
        if (existingUser != null) {
            existingUser.setUsername(user.getUsername());
            existingUser.setPassword(user.getPassword());
            return userRepo.save(existingUser);
        }
        return null;
    }

    @Override
    public void deleteUser(Long id) {
        userRepo.deleteById(id);
    }

    public LUser registerUser(LUserDTO userDto) {
        LUser user = new LUser();
        user.setUsername(userDto.getUsername());
        user.setPassword(userDto.getPassword());
        user.setAge(userDto.getAge());
        user.setEmail(userDto.getEmail());
        user.setAddress(userDto.getAddress());

        // Save the user to the database
        return userRepo.save(user);
    }

    @Override
    public LUser loginUser(String username, String password) {
        LUser user = userRepo.findByUsername(username);
        
        if (user != null && user.getPassword().equals(password)) {
            return user; // Successful login
        }
        
        return null; // Authentication failed
    }

    @Override
    public LUser loginUser(LUserDTO credentials) {
        return loginUser(credentials.getUsername(), credentials.getPassword());
    }

    @Override
    public LUser registerUser(LUser user) {
        // You might want to validate and handle the logic for registering a user object directly
        // Return the saved user from the repository after validation and handling logic
        return userRepo.save(user);
    }
}

package com.evildice.mappers;

import com.evildice.kiov.User;

import java.util.List;

public interface UserMapper
{
    void insertUser(User user);

    public User getUserById(Integer userId);

    public List<User> getAllUsers();

    public void updateUser(User user);

    public void deleteUser(Integer userId);
}
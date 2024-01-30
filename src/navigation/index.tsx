import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as screen from '@/screens';
import {StackParamList} from '@/types/navigation';

const Stack = createStackNavigator<StackParamList>();

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Posts"
            options={{title: 'Post List'}}
            component={screen.Posts}
          />
          <Stack.Screen
            name="AddPost"
            options={{title: 'Add Post'}}
            component={screen.AddPost}
          />
          <Stack.Screen
            name="EditPost"
            options={{title: 'Edit Post'}}
            component={screen.EditPost}
          />
          <Stack.Screen
            name="Post"
            options={{title: 'Post'}}
            component={screen.Post}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;

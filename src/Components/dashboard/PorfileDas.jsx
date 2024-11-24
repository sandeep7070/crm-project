import React from 'react';
import { Card, CardHeader, CardContent}  from '@mui/material'

import { User, Mail, Phone, MapPin, Briefcase, Calendar, Settings, ChevronRight } from 'lucide-react';

const DashboardProfile = () => {
  const userProfile = {
    name: "Sandeep Kumar",
    email: "sandeepchaudhrykumar@gmail.com",
    phone: "7070245900",
    location: "Mohali balongu",
    position: "Web Developer",
    joinDate: "March 2023",
    avatar: "/HLOW.jpg"
  };

  const ProfileItem = ({ icon: Icon, label, value }) => (
    <div className="group hover:bg-slate-600 rounded-lg p-4 transition-colors cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100">
            <Icon className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">{label}</p>
            <p className="text-sm font-semibold text-white mt-1">{value}</p>
          </div>
        </div>
        <ChevronRight className="h-5 w-5 text-white group-hover:text-gray-600" />
      </div>
    </div>
  );

  const StatsItem = ({ label, value }) => (
    <div className="text-center">
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-sm text-white mt-1">{label}</p>
    </div>
  );

  return (
    <div className="w-full space-y-6">
      <Card className="w-full bg-[#2c4366] shadow-lg">
        <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-500">
          <div className="absolute top-4 right-4 ">
            <button className="p-2 bg-white/20 rounded-lg hover:bg-[#2c4366] transition-colors">
              <Settings className="h-5 w-5 text-white" />
            </button>
          </div>
          <div className="absolute -bottom-16 left-8">
            <div className="relative">
              <img
                src={userProfile.avatar}
                alt={userProfile.name}
                className="h-32 w-32 rounded-xl object-cover border-4 border-slate-300 shadow-lg"
              />
              <div className="absolute -right-2 -bottom-2 h-6 w-6 rounded-full bg-green-400 border-2 border-slate-400"></div>
            </div>
          </div>
        </div>

        <CardHeader className="pt-20 pb-4 px-8 bg-[#2c4366]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white">{userProfile.name}</h2>
              <div className="inline-flex items-center space-x-2 mt-2">
                <Briefcase className="h-4 w-4 text-blue-600" />
                <p className="text-sm font-medium text-blue-600">{userProfile.position}</p>
              </div>
            </div>
            <div className="mt-4 sm:mt-0">
              <button className="px-4 py-2 bg-blue-600  rounded-lg hover:bg-slate-600 transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        </CardHeader>

        <div className="px-8 py-4  border-b  bg-[#2c4366] text-white">
          <div className="grid grid-cols-3 gap-4 text-white">
            <StatsItem label="Projects " value="12 " />
            <StatsItem label="Team Members" value="36" />
            <StatsItem label="Contributions" value="259" />
          </div>
        </div>

        <CardContent className="p-8 bg-[#2c4366]">
          <div className="grid gap-4 bg-[#2c4366]">
            <ProfileItem 
              icon={Mail} 
              label="Email Address" 
              value={userProfile.email} 
            />
            <ProfileItem 
              icon={Phone} 
              label="Phone Number" 
              value={userProfile.phone} 
            />
            <ProfileItem 
              icon={MapPin} 
              label="Location" 
              value={userProfile.location} 
            />
            <ProfileItem 
              icon={Calendar} 
              label="Joined" 
              value={userProfile.joinDate} 
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardProfile;
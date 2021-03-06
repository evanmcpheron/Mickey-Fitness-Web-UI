import FusePageSimple from '@fuse/core/FusePageSimple';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/store/userSlice';
import { useParams, Navigate } from 'react-router-dom';
import AboutTab from './tabs/AboutTab';
import ReviewTab from './tabs/ReviewTab';
import StoreTab from './tabs/StoreTab';
import useThemeMediaQuery from '../../../@fuse/hooks/useThemeMediaQuery';
import ProfileHeader from './ProfileHeader';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    background:
      theme.palette.mode === 'light'
        ? `${theme.palette.background.paper}`
        : `${theme.palette.background.default}`,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
}));

function ProfilePage() {
  const { userId } = useParams();
  const [isMe] = useState(userId === 'me' ?? true);
  console.log('🚀 ~ file: ProfilePage.js ~ line 28 ~ isMe: ', isMe);
  const [selectedTab, setSelectedTab] = useState(0);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  const me = useSelector(selectUser);
  const user = {
    data: {
      displayName: 'admin@admin.com',
      photoURL: 'default-profile.jpg',
      email: 'admin@admin.com',
    },
    role: 'admin',
    uuid: '62d34d624d4642c767bfee0a',
  };

  return (
    <Root
      header={
        <ProfileHeader
          user={isMe ? { isMe: true, ...me } : user}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      }
      content={
        <div className="flex flex-auto justify-center w-full max-w-5xl mx-auto p-24 sm:p-32">
          {selectedTab === 0 && <StoreTab user={isMe ? { isMe: true, ...me } : user} />}
          {selectedTab === 1 && <AboutTab user={isMe ? { isMe: true, ...me } : user} />}
          {selectedTab === 2 && <ReviewTab user={isMe ? { isMe: true, ...me } : user} />}
          {selectedTab === 3 && <Navigate to="/settings" />}
        </div>
      }
      scroll={isMobile ? 'normal' : 'page'}
    />
  );
}

export default ProfilePage;

export type Routes = {
  PermissionsScreen: undefined;
  CameraScreen: undefined;
  MediaScreen: {
    path: string;
    type: 'video' | 'photo';
  };
};
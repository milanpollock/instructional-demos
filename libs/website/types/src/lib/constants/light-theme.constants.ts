import Theme from '../interfaces/theme.interface';
import { ApplicationLayout } from './application-layout.constants';
import { Application } from './application.constants';

export const lightTheme: Theme = {
  fontFamily: Application.FONT_FAMILY,
  accentColor: Application.ACCENT_COLOR,
  bottomButtonFontSize: 12,
  kabobMenuFontSize: 14,
  smallFontSize: 16,
  mediumFontSize: 18,
  largeFontSize: 20,
  textColor: 'rgb(44, 64, 76)',
  textBackgroundColor: 'rgb(255, 255, 255)',
  iconColor: 'rgba(0, 0, 0, 0.9)',
  buttonAccentColor: Application.ACCENT_COLOR,
  hyperlinkColor: 'rgba(0, 0, 0, 0.9)',
  hyperlinkUnderlineColor: 'rgba(0, 0, 0, 0.9)',
  mainBackgroundColor: Application.ACCENT_COLOR,
  masterBackgroundColor: Application.ACCENT_COLOR,
  detailBackgroundColor: 'rgb(6, 28, 59)',
  topHeaderBackgroundColor: 'rgb(6, 28, 59)',
  headerBackgroundColor: 'rgb(255, 255, 255)',
  headerIconColor: Application.ACCENT_COLOR,
  topHeaderAccentColor: 'rgb(255, 255, 255)',
  headerAccentColor: 'rgb(0, 0, 0)',
  titleBarBackButtonIconColor: Application.ACCENT_COLOR,
  topNavigationBarBackButtonIconColor: Application.ACCENT_COLOR,
  bottomDividerBorder: `${ApplicationLayout.BOTTOM_DIVIDER_HEIGHT}px solid rgb(182, 195, 204)`,
  footerBackgroundColor: 'rgb(255, 255, 255)',
  bottomButtonColor: 'rgba(0, 0, 0, 0.9)',
  bottomButtonIconColor: 'rgba(0, 0, 0, 0.9)',
  imageGalleryButtonColor: 'rgb(255, 255, 255)',
  optionsBarButtonColor: Application.ACCENT_COLOR,
  imageGalleryDisabledButtonColor: 'rgb(116, 136, 153)',
  masterImageGalleryBackgroundColor: 'rgb(6, 28, 59)',
  imageGalleryContainerBackgroundColor: 'rgb(6, 28, 59)',
};

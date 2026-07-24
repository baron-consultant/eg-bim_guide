# EG-BIM(이지빔) 영문 UI/용어집

EG-BIM(이지빔) 소프트웨어 설치 폴더의 언어 리소스(en-US / ko-KR .resources.dll)에서
실제 프로그램에 내장된 한글-영문 문자열 쌍을 추출하여 정리한 용어집입니다.

- 출처: `C:\Program Files\Baron\EG-BIM\en-US`, `C:\Program Files\Baron\EG-BIM\ko-KR` 내 리소스 어셈블리
- 목적: 이용가이드 영문화 시, 실제 프로그램 UI/메시지/명령어 표기와 번역 용어가 어긋나지 않도록 참고
- 표기: 영문 값이 비어있거나(미번역) 한글과 완전히 동일한 항목은 제외했습니다.

## 목차

1. [EGBIM_STARTER — 시작 화면](#1-egbim_starter--시작-화면)
2. [HmPlot.Preview — 인쇄 미리보기](#2-hmplotpreview--인쇄-미리보기)
3. [Nyng.PlotWindow — 인쇄/플롯 설정](#3-nyngplotwindow--인쇄플롯-설정)
4. [Nyng.Wpf — 메인 UI / 명령어 카테고리 / 공통 컨트롤](#4-nyngwpf--메인-ui--명령어-카테고리--공통-컨트롤)
5. [Nyng.ThirdParty — CAD 명령어 / 구조·배근 관련 용어](#5-nyngthirdparty--cad-명령어--구조배근-관련-용어)


## 1. EGBIM_STARTER — 시작 화면

| Key | Korean | English |
|---|---|---|
| ExistProcess | {0}프로세스가 실행중 상태입니다.{1}종료 후 실행하세요. | {0} process is currently running. Please close the existing {1} before launching a new one. |
| Kkureomi | 꾸러미 | Kkureomi |
| RecentFiles_Folders | 최근 작업도면 / 폴더 바로가기 | Recent Files/Folders |
| Title_EG-BIM_Starter | EG-BIM 시작하기 | Start EG-BIM |
| Tooltip_Close | 닫기 | Close |
| UserFolder | 사용자 지정폴더 | User Folder |


## 2. HmPlot.Preview — 인쇄 미리보기

| Key | Korean | English |
|---|---|---|
| AllSelect | 전체 선택 | Select All |
| AllSelectCancel | 전체 취소 | Deselect All |
| PreviewException_DC_1 | 프린터 드라이버 오류. 프린터 정식 드라이버 설치를 권장드립니다. | Printer driver error. It is recommended to install the official printer driver. |
| PreviewException_DC_2 | 해당 오류가 반복 될 시, 관리자에게 문의해 주시기 바랍니다. | If the error persists, please contact the administrator. |
| Tooltip_PreviewHeight | 용지의 세로 길이를 지정합니다. | Specifies the height of the paper. |
| Tooltip_PreviewOffsetCenter | 여백(마진) 값을 중앙으로 초기화 합니다. | Resets the margin value to the center. |
| Tooltip_PreviewOffsetHori | 좌측 여백(마진) 값을 변경합니다. | Changes the left margin value. |
| Tooltip_PreviewOffsetVerti | 하단 여백(마진) 값을 변경합니다. | Changes the bottom margin value. |
| Tooltip_PreviewWidth | 용지의 가로 길이를 지정합니다. | Specifies the width of the paper. |


## 3. Nyng.PlotWindow — 인쇄/플롯 설정

| Key | Korean | English |
|---|---|---|
| AsGraphics | 글꼴 형상화 | Graphics |
| AsText | 글꼴 형식화 | Text |
| Button_AllEntities | 모든 객체영역 | All Entities |
| Button_ImageFiles | 파일 출력 | Image Files |
| Button_PaperDevices | 종이 출력 | Paper Devices |
| Button_Plot | 인쇄하기 | Plot |
| Button_Save | 인쇄 정보 저장 | Apply to Layout |
| Button_SelectFrame | 도곽맞춤 | Select Frame |
| Button_UserArea | 영역지정 | User Area |
| Button_UserFrame | 도곽지정 | User Frame |
| CheckBox_AllFrame | 전체출력 | All |
| CheckBox_Fit | 용지 맞춤 | Fit |
| Data | 데이터 | Data |
| DeviceType_BlackPrinter | 흑백 프린터 | Black Printer |
| DeviceType_ColorPrinter | 컬러 프린터 | Color Printer |
| DeviceType_None | 없음 | None |
| DeviceType_Plotter | 플로터 | Plotter |
| DeviceType_Unclassified | 미분류 | Unclassified |
| DownUp_LeftRight_String_1 | 아래 -> 위 정렬 우선 | Bottom to top order first |
| DownUp_LeftRight_String_2 | 좌 -> 우 방향으로 출력 | Print from left to right |
| Edit | 수정 | Edit |
| ExportOption | 출력옵션 | Plot Option |
| ExtensionType_CTB | 색상 의존도 그림 스타일 테이블 파일 | Color-dependent plot style table file |
| FileAbsorption | 병합 | Merge |
| FontHandling | 글꼴처리 | Font Handling |
| Grimi | 그리미 | Grimi |
| Label_Copies | 출력 매수 | Copies |
| Label_File | 파일출력 | File |
| Label_FileType | 파일 | File |
| Label_IpAddress | IP 주소 : | IP Address :  |
| Label_LoadPageSetup | 가져오기 | Import |
| Label_None | 없음 | None |
| Label_OpenCtbFile | CTB 불러오기 |  Open CTB |
| Label_PageSetup | 페이지 설정 | Page Setup |
| Label_PaperSize | 용지 | Paper Size |
| Label_PlotDetail | 장치속성 | Details |
| Label_PlotDevice | 프린터/플로터 | Plot Device |
| Label_PlotFileDetail | 파일 속성 | Options |
| Label_PlotPreview | 미리보기 | Plot Preview |
| Label_PlotRange | 출력 영역 | Plot Range |
| Label_PlotStyle | 플롯 스타일 | Plot Style |
| Label_Plotter | 플로터 | Plotter |
| Label_PreviousPlot | 이전플롯 | PreviousPlot |
| Label_Printer | 프린터 | Printer |
| Label_RealTimePlotPreview | 실시간 미리보기 | Real Time Plot Preview |
| Label_RegisterPrint | 인쇄물을 등록하려면 왼쪽 장치 그룹에서 프린터 아이콘을 끌어다 놓으십시오. | Printer icon drag &amp; drop in the left device group to register the print. |
| Label_Roll | 롤지 | Roll |
| Label_Scale | S= 1 :  | S= 1: |
| Label_Sheet | 규격 용지 | Sheet |
| Label_StbPlotStyle | 레이어 플롯 스타일 | Layer Plot Style |
| Label_SystemPrinterType | 시스템 프린터 | System Printer |
| Label_User | 사용자 용지 | Custom |
| Label_UserCustom | 사용자 지정 | User Custom |
| LeftRight_DownUp_String_1 | 좌 -> 우 정렬 우선 | Left to right order first |
| LeftRight_DownUp_String_2 | 아래 -> 위 방향으로 출력 | Print from bottom to top |
| LeftRight_UpDown_String_1 | 좌 -> 우 정렬 우선 | Left to right order first |
| LeftRight_UpDown_String_2 | 위 -> 아래 방향으로 출력 | Print from top to bottom |
| LineMerge | 선 병합 | Line Merge |
| LineOverwrite | 선 덮어쓰기 | Overwrite |
| MergeControl | 병합 제어 | Merge Control |
| NotFileAbsorption | 병합안함 | No merge |
| OK | 확인 | OK |
| Plot_Msg_PrintWithDrawingFileName | 도면 파일 이름을 인쇄할 파일 이름으로 사용하여 지정된 경로로 인쇄하시겠습니까? | Do you want to print the drawing file name to the specified path using it as the file name to print?  |
| Plot_Msg_SavePlotStyle | 인쇄 설정을 저장했습니다. | Print settings have been saved. |
| Print_Options | 플롯옵션 | Options |
| Print_Options_DrawingDirection | 도면 방향 | Drawing Direction |
| Print_Options_LineWeight_Plot | 객체 선가중치 플롯 | Plot Lineweights |
| Print_Options_LineWeightDisplay | 객체의 선가중치 적용 | Apply Line Weight of Objects |
| Print_Options_PlotOption | 플롯 옵션 | Plot Options |
| Print_Options_PlotStyle_Plot | 플롯 스타일로 플롯 | Plot with Plot Styles |
| Print_Options_PlotStyles | 플롯 스타일 적용 | Apply Plot Styles |
| Print_Options_PlotTransparency | 투명도 적용 | Apply Transparency |
| Print_Options_Reversal | 출력 방향 반전 | Reverse Output Direction |
| Print_Options_Reversal_Plot | 대칭 | mirror |
| Print_Options_ShadePlotType | 음영 플롯 | Shade Plot |
| Print_Options_ShadePlotType_AsDisplayed | 표시되는 대로 | As Displayed |
| Print_Options_ShadePlotType_Hidden | 기존 숨김 | Hidden |
| Print_Options_ShadePlotType_Rendered | 렌더 | Render |
| Print_Options_ShadePlotType_Wireframe | 기존 와이어프레임 | Wireframe |
| Print_Options_ShadeViewportOption | 음영 플롯 옵션 | Shaded Plot Options |
| Print_Options_Transparency_Plot | 플롯 투명도 | Apply Transparency |
| PrintOrder | 인쇄순서 | Order |
| PrintOrderExplicate_String_1 | 여러 도면의 다중출력의 경우에는 | For multiple prints of multiple drawings, |
| PrintOrderExplicate_String_2 | 꾸러미의 인쇄기능 | use the bundle print function |
| PrintOrderExplicate_String_3 | 을 사용하세요 | . |
| Quality | 품질 | Quality |
| Quit | 취소 | Quit |
| RasterImagedQuality_1 | 레스터 | Raster |
| Reset | 초기화 | Reset |
| Tooltip_AllFrame | 도곽의 전체를 각각 미리보기합니다. 출력하고자 하는 도곽을 부분적으로 선택하여 출력할 수 있습니다. | Preview the entire title block. You can select and print the title block you want to print partially. |
| Tooltip_Close | 닫기 | Close |
| Tooltip_CtbStyleTable_Directory | CTB 스타일 테이블을 설정합니다. | Set the CTB style table. |
| Tooltip_Fit | 플롯을 선택한 용지 크기에 맞게 축척합니다. | Scale the plot to fit the selected paper size. |
| ToolTip_Landscape | 가로 | Landscape |
| ToolTip_Maximize | 최대화 | Maximize |
| Tooltip_Minimize | 최소화 | Minimize |
| ToolTip_Normal | 이전 크기로 복원 | Restore to previous size |
| Tooltip_Options_LineWeightDisplay | 객체와 도면층에 지정된 선가중치가 플롯될지 여부를 지정합니다. | Specify whether the line weights assigned to objects and layers are plotted. |
| Tooltip_Options_PlotStyles | 객체 및 도면층에 적용된 플롯 스타일의 플롯 여부를 지정합니다. | Specify whether to plot the plot styles applied to objects and layers. |
| Tooltip_Options_PlotTransparency | 객체 투명도를 플롯하는지 여부를 지정합니다. 이 옵션은 투명 객체로 도면을 플로팅할 때만 사용해야 합니다. | Specify whether to plot object transparency. This option should only be used when plotting drawings with transparent objects. |
| Tooltip_PageSetup | 도면에서 명명되어 저장된 페이지 설정 리스트를 표시합니다. | Display the list of named and saved page setups in the drawing. |
| Tooltip_PaperSize | 선택된 플로팅 장치에 사용할 수 있는 표준 용지 크기를 표시합니다. | Displays the standard paper sizes available for the selected plotting device. |
| Tooltip_PDF_FileAbsorption | 여러 장의 출력물을 하나의 pdf파일로 병합 또는 여러 개의 파일로 분리할지 선택합니다. | Choose whether to merge multiple outputs into one PDF file or separate them into multiple files. |
| Tooltip_PDF_FontHandling | 형상화를 선택하면 PDF 파일의 문자가 도면의 문자와 같아집니다. 하지만 PDF 파일 크기가 증가하고 높은 줌 레벨로 PDF 파일을 볼 때 문자의 픽셀화가 발생할 수 있습니다. 래스터 이미지 품질을 높여 픽셀화를 줄일 수 있습니다. PDF를 DWG를 불러온다던지 PDF에서 글자를 인식하여 수정하려고 하면, 문자인식이 안될 수 있습니다. | If you choose to render, the characters in the PDF file will be the same as the characters in the drawing. However, the PDF file size increases and pixelation of characters may occur when viewing the PDF file at high zoom levels. You can reduce pixelation by increasing the raster image quality. If you import the PDF into DWG or try to recognize and edit text from the PDF, text recognition may not work. |
| Tooltip_PDF_MergeControl | 겹치는 선을 덮어쓸지(위쪽 선이 아래쪽 선을 가림) 아니면 병합할지(선의 색상이 혼합됨) 지정합니다. | Specify whether to overwrite overlapping lines (the top line covers the bottom line) or merge them (the colors of the lines are mixed). |
| Tooltip_PDF_RasterImageQuality | 래스터 이미지의 해상도를 조정합니다. PDF 파일을 뷰어에서 인쇄할 계획이면 플로터 또는 프린터의 출력에 맞도록 해상도를 선택합니다. PDF 파일을 화면상으로 볼 계획이면 고해상도(2400dpi보다 높음)를 선택합니다. 래스터 이미지 품질은 벡터 이미지 품질보다 높을 수 없습니다. | Adjust the resolution of raster images. If you plan to print the PDF file from a viewer, select a resolution that matches the output of the plotter or printer. If you plan to view the PDF file on the screen, select a high resolution (higher than 2400dpi). Raster image quality cannot be higher than vector image quality. |
| Tooltip_PDF_VectorQuality | 벡터 그래픽과 그라데이션의 해상도를 조정합니다. PDF 파일을 뷰어에서 인쇄할 계획이면 플로터 또는 프린터의 출력에 맞도록 해상도를 선택합니다. PDF 파일을 화면상으로 볼 계획이면 고해상도(2400dpi보다 높음)를 선택합니다. | Adjust the resolution of vector graphics and gradients. If you plan to print the PDF file from a viewer, select a resolution that matches the output of the plotter or printer. If you plan to view the PDF file on the screen, select a high resolution (higher than 2400dpi). |
| Tooltip_PLOT | 현재 설정으로 인쇄를 시작합니다. | Start printing with the current settings. |
| Tooltip_PlotArea_AllEntities | 도면 중 객체를 포함하고 있는 현재 공간 부분을 플롯합니다. 현재 공간에 있는 모든 형상이 플롯됩니다. | Plot the current space part containing objects in the drawing. All shapes in the current space are plotted. |
| Tooltip_PlotArea_SelectFrame | 도면 내에 속성블록으로 지정된 도곽을 기준으로 플롯합니다. 도곽의 개수에 따라 리스트로 생성됩니다. | Plot based on the title block specified as an attribute block in the drawing. The list is generated according to the number of title blocks. |
| Tooltip_PlotArea_UserArea | 사용자가 지정하는 모든 도면 부분을 플롯합니다. 윈도우를 선택하면 윈도우 버튼을 사용할 수 있게 됩니다. 윈도우 버튼을 클릭하여 좌표 입력 장치로 플롯할 영역의 두 개 구석을 지정하거나 좌표값을 입력합니다. | Plot any part of the drawing specified by the user. When you select a window, the window button becomes available. Click the window button to specify two corners of the area to be plotted with the coordinate input device or enter the coordinates. |
| Tooltip_PlotFrameListButton | 도곽 목록을 관리할수 있는 팝업으로 이동합니다. | Move to a popup where you can manage the list of title blocks. |
| Tooltip_PlotStyleTable_Edit | 현재 지정된 플롯 스타일 테이블의 플롯 스타일을 보거나 수정할 수 있는 플롯 스타일 테이블 편집기가 표시됩니다. | Displays the plot style table editor where you can view or modify the plot styles of the currently specified plot style table. |
| Tooltip_PlotStyleTable_Initial | 플롯 스타일 테이블을 초기화하여 STB 형식으로 지정합니다. | Initialize the plot style table to specify it in STB format. |
| ToolTip_Portrait | 세로 | Port |
| Tooltip_PrintDevice | 배치를 플롯할 때 사용하도록 구성된 플로팅 장치를 지정합니다. | Specify the plotting device configured to be used when plotting the layout. |
| Tooltip_RealTimePreview | 실시간 미리보기를 활성화 또는 비활성화 합니다. | Enable or disable real-time preview. |
| Tooltip_SavePlotData | 현재 지정한 인쇄 설정을 저장합니다. | Save the current print settings. |
| Tooltip_Scale | 도면 단위의 크기를 플롯 단위와 상대적으로 조정합니다. Model 탭을 플롯할 때 기본 설정은 용지에 맞춤입니다. | Adjust the size of the drawing units relative to the plot units. The default setting for plotting the Model tab is to fit to paper. |
| ToolTip_UpsideDown | 도면의 위아래를 뒤집어 플롯합니다. | Plot the drawing upside down. |
| Tooltip_Viewport_AsDisplayed | 화면에 표시되는 방식대로 객체를 플롯합니다. | Plot objects as they are displayed on the screen. |
| Tooltip_Viewport_Hidden | 기존 SHADEMODE 명령을 사용하는 은선이 제거된 객체(화면에서 표시되는 방식과는 관계없음)입니다. | Objects with hidden lines removed using the existing SHADEMODE command (regardless of how they are displayed on the screen). |
| Tooltip_Viewport_Rendered | 화면에 표시되는 방식에 관계없이 객체를 렌더링된 상태로 플롯합니다. | Plot objects rendered regardless of how they are displayed on the screen. |
| Tooltip_Viewport_Wireframe | 기존 SHADEMODE 명령을 사용하는 와이어프레임의 객체(화면에서 표시되는 방식과는 관계없음)입니다. | Objects in wireframe using the existing SHADEMODE command (regardless of how they are displayed on the screen). |
| UpDown_LeftRight_String_1 | 위 -> 아래 정렬 우선 | Top to bottom order first |
| UpDown_LeftRight_String_2 | 좌 -> 우 방향으로 출력 | Print from left to right |
| VectorQuality | 백터 품질 | Vector |


## 4. Nyng.Wpf — 메인 UI / 명령어 카테고리 / 공통 컨트롤

| Key | Korean | English |
|---|---|---|
| IcadCommandType_Block | 블록 | Block |
| IcadCommandType_Button_AllCommands | 명령어 | Commands |
| IcadCommandType_Button_ViewAll | 전체보기 | View All |
| IcadCommandType_Button_WorkState | 보조기능 | Support Features |
| IcadCommandType_Civil | 선형/횡단 | Civil / Road |
| IcadCommandType_Dim | 치수/연산 | Dimension |
| IcadCommandType_Draw | 도형 | Geometry |
| IcadCommandType_Edit | 편집 | Edit |
| IcadCommandType_Layer | 레이어 | Layer |
| IcadCommandType_Measure | 선택/조회 | Query / Selection |
| IcadCommandType_Modeling | 모델링 | Modeling |
| IcadCommandType_Modify | 수정 | Modify |
| IcadCommandType_Options | 디스플레이/마우스 | Display |
| IcadCommandType_Rebar | 구조/배근 | Structure |
| IcadCommandType_Text | 문자 | Text |
| IcadCommandType_View | 뷰 | View |
| ID_ABE_Button_Apply | 확인 | Apply |
| ID_ABE_Button_Cancel | 취소 | Quit |
| ID_ABE_COLUMN_Prompt | 프롬프트 | Prompt |
| ID_ABE_COLUMN_Tag | 태그 | Tag |
| ID_ABE_COLUMN_TextString | 문자 값 | Text string |
| ID_ABE_Title | 속성블록 | Attribute block |
| ID_ABMBUL_Content_Undefined | 단위 없음 | Undefined |
| ID_ABMBUL_WindowTitle | 단위 선택창 | More Unit |
| ID_About_CloseDocumentForLogout | 작업중인 문서가 있습니다. 해당 문서를 모두 종료 후, 로그아웃을 시도해주세요. | You are currently working on a document. Please close all documents and then try logging out. |
| ID_About_License | 라이센스 유효일 :  | License Date : |
| ID_About_ProgramExit | 로그아웃 시, 프로그램이 종료됩니다. 로그아웃 하시겠습니까? | When you log out, the program will close. Would you like to log out? |
| ID_About_User | 사용자 정보 : | Current User : |
| ID_ADS_Attribute_TextBlock_Default | 기본값 | Default |
| ID_ADS_Attribute_TextBlock_Prompt | 프롬프트 | Prompt |
| ID_ADS_Attribute_TextBlock_Tag | 태그 | Tag |
| ID_ADS_ERR_BoundaryWidth | 여러 줄 속성 폭은 양수 값이어야 합니다. | Multiline attribute wdith must to be a positive value |
| ID_ADS_ERR_NoTag | 태그를 비울 수 없습니다. | The Attribute must have name. |
| ID_ADS_ERR_TagWhiteSpace | 태그에 공백을 포함할 수 없습니다. | The attribute name may not contain spaces |
| ID_ADS_ERR_TextHeight | 문자 높이는 양의 값으로 설정되어야 합니다. | Text height must be set to a positive value. |
| ID_ADS_Insert_CheckBox_OnScreen | 화면상에 지정 | Specify on-screen |
| ID_ADS_Justification_Aligned | 정렬 | Aligned |
| ID_ADS_Justification_Center | 중심 | Center |
| ID_ADS_Justification_CenterBottom | 맨아래 중심 | Center-Bottom |
| ID_ADS_Justification_CenterMiddle | 중간 중심 | Center-Middle |
| ID_ADS_Justification_CenterTop | 맨위 중심 | Center-Top |
| ID_ADS_Justification_Fit | 맞춤 | Fit |
| ID_ADS_Justification_Left | 왼쪽 | Left |
| ID_ADS_Justification_LeftBottom | 맨아래 왼쪽 | Left-Bottom |
| ID_ADS_Justification_LeftMiddle | 중간 왼쪽 | Left-Middle |
| ID_ADS_Justification_LeftTop | 맨위 왼쪽 | Left-Top |
| ID_ADS_Justification_Middle | 중간 | Middle |
| ID_ADS_Justification_Right | 오른쪽 | Right |
| ID_ADS_Justification_RightBottom | 맨아래 오른쪽 | Right-Bottom |
| ID_ADS_Justification_RightMiddle | 중간 오른쪽 | Right-Middle |
| ID_ADS_Justification_RightTop | 맨위 오른쪽 | Right-Top |
| ID_ADS_Mode_CheckBox_Constant | 상수 | Constant |
| ID_ADS_Mode_CheckBox_Invisible | 숨김 | Invisible |
| ID_ADS_Mode_CheckBox_LockPosition | 잠금 위치 | Lock Position |
| ID_ADS_Mode_CheckBox_MultiLines | 여러 줄 | Mtext |
| ID_ADS_Mode_CheckBox_Preset | 사전 설정 | Preset |
| ID_ADS_Mode_CheckBox_Verify | 검증 | Verify |
| ID_ADS_Prompt_PickFirstPoint | 텍스트 기준선의 첫 번째 끝점 지정 | Specify first end point of text baseline: |
| ID_ADS_Prompt_PickHeight | 높이 | Select text height: |
| ID_ADS_Prompt_PickInsertPoint | 삽입점 지정 | Insertion point: |
| ID_ADS_Prompt_PickPointMultiLine | 여러 줄 속성의 위치 지정 | Specify location of multiline attribute: |
| ID_ADS_Prompt_PickRotation | 회전 각도 | Select text angle: |
| ID_ADS_Prompt_PickSecondPoint | 텍스트 기준선의 두 번째 끝점 지정 | Specify second end point of text baseline: |
| ID_ADS_Prompt_PickWidth | 여러 줄 속성 폭 | Multiline attribute width: |
| ID_ADS_Setting_CheckBox_AlignBelow | 이전 속성 정의 아래 정렬 | Align under previous attribute |
| ID_ADS_Setting_CheckBox_Annotate | 주석 | Annot. |
| ID_ADS_Setting_TextBlock_Height | 문자 높이 | Text Height |
| ID_ADS_Setting_TextBlock_Jusify | 자리맞춤 | Justification |
| ID_ADS_Setting_TextBlock_Rotation | 회전 | Rotation |
| ID_ADS_Setting_TextBlock_TextStyle | 문자 스타일 | Text Style |
| ID_ADS_Setting_TextBlock_Width | 경계 폭 | Boundary Width |
| ID_ADS_TextBlock_Attribute | 속성 | Attribute |
| ID_ADS_TextBlock_InsertPoint | 삽입점 | Insertion Point |
| ID_ADS_TextBlock_Mode | 모드 | Mode |
| ID_ADS_TextBlock_TextSetting | 문자 설정 | Text Settings |
| ID_ADS_Title | 속성 정의 | Attribute Definition |
| ID_ADS_TOOLTIP_ATTRIBUTE_DEFAULT | 기본 속성 값을 지정합니다. | Specifies the default attribute value. |
| ID_ADS_TOOLTIP_ATTRIBUTE_PROMPT | 이 속성 정의가 포함된 블록을 삽입할 때 표시되는 프롬프트를 지정합니다. 프롬프트를 입력하지 않으면 속성 태그가 프롬프트로 사용됩니다. 모드 영역에서 상수를 선택하면 프롬프트 옵션을 사용할 수 없습니다. | Specifies the prompt that will be displayed when you insert a block containing this attribute definition. If you do not enter a prompt, the attribute tag is used as a prompt. If you select Constant in the Mode area, the Prompt option is not available. |
| ID_ADS_TOOLTIP_ATTRIBUTE_TAG | 도면에서 발견되는 각 속성을 식별합니다. 공백을 제외한 임의의 문자를 조합하여 속성 태그를 입력합니다. 소문자는 대문자로 자동 변경됩니다. | Specifies the name with which to Identify the attribute. Enter the attribute tag using any combination of characters except spaces. Lowercase letters are automatically changed to uppercase. |
| ID_ADS_TOOLTIP_INSERT_ONSCREEN | 대화상자를 닫을 때 시작점 프롬프트를 표시합니다. 좌표 입력 장치를 사용하여 입력될 객체와 관련된 속성의 위치를 지정합니다. | Displays a Start Point prompt when the dialog box closes. Use the pointing device to specify the location of the attribute relative to other objects. |
| ID_ADS_TOOLTIP_INSERT_X | 속성 삽입점의 X좌표를 지정합니다. | Specifies the X coordinate of the attribute insertion point. |
| ID_ADS_TOOLTIP_INSERT_Y | 속성 삽입점의 Y좌표를 지정합니다. | Specifies the Y coordinate of the attribute insertion point. |
| ID_ADS_TOOLTIP_INSERT_Z | 속성 삽입점의 Z좌표를 지정합니다. | Specifies the Z coordinate of the attribute insertion point. |
| ID_ADS_TOOLTIP_MODE_CONSTANT | 블록 삽입을 위해 속성에 고정된 값을 부여합니다. | Assigns attributes a fixed value for the attribute when you insert the block. |
| ID_ADS_TOOLTIP_MODE_INVISIBLE | 블록을 삽입할  속성값이 표시되거나 인쇄되지 않도록 지정합니다. ATTDISP는 숨김모드를 재지정합니다. | Specifies that attribute values are not displayed or printed when you insert the block. The ATTDISP command overrides the Invisible mode. |
| ID_ADS_TOOLTIP_MODE_LOCKPOSITION | 블록 참조 내 속성의 위치를 잠급니다. 잠금 해제되었을 경우, 속성은 그립 편집을 사용하는 나머지 블록에 대해 이동될 수 있으며, 여러줄 속성은 크기를 조정할 수 있습니다. | Locks the location of the attribute within the block reference. When unlocked, the attribute can be moved relative to the rest of the block using grip editing, and multiline attributes can be resized. |
| ID_ADS_TOOLTIP_MODE_MULTILINES | 속성 값이 여러줄 문자를 포함할 수 있음을 지정합니다. 이 옵션이 선택된 경우, 속성에 대한 경계 폭을 지정할 수 있습니다. | Specifies that the attribute value can contain multiple lines of text, and lets you specify a boundary width for the attribute. |
| ID_ADS_TOOLTIP_MODE_PRESET | 사전 설정 속성이 포함된 블록을 삽입할 때 속성을 기본값으로 설정합니다. | Sets the attribute to its default value without displaying a prompt when you insert the block. |
| ID_ADS_TOOLTIP_MODE_VERIFY | 블록을 삽입할 때 속성값이 정확한지 검증할 수 있도록 프롬프트를 표시합니다. | Prompts you to verify that the attribute value is correct when you insert the block. |
| ID_ADS_TOOLTIP_SETTING_ALIGNBELOW | 속성 태그를 이전에 정의된 속성 바로 아래에 배치합니다. 이전에 속성 정의를 작성하지 않았다면 이 옵션을 사용할 수 없습니다. | Places the attribute tag directly below the previously defined attribute. If you have not previously created an attribute definition, this option is not available. |
| ID_ADS_TOOLTIP_SETTING_ANNOTATE | 속성이 주석임을 지정합니다. 블록이 주석형이면 속성은 블록의 방향과 일치하게 됩니다. | Specifies that the attribute is annotative. If the block is annotative, the attribute will match the orientation of the block. |
| ID_ADS_TOOLTIP_SETTING_HEIGHT | 속성 문자의 높이를 지정합니다. 값을 입력하거나 높이를 선택하여 좌표 입력 장치로 높이를 지정합니다. 높이는 원점에서 지정한 위치까지 측정한 것입니다. 고정된 높이(0.0을 제외한 모든 값)를 가진 문자 스타일을 선택하거나 자리맞추기 리스트에서 정렬을 선택하면 높이 옵션을 사용할 수 없습니다. | Specifies the height of the attribute text. Enter a value, or choose Height to specify a height with your pointing device. The height is measured from the origin to the location you specify. If you select a text style that has fixed height(any value other than 0.0) or if you select Align in the Justification list, the Height option is not available. |
| ID_ADS_TOOLTIP_SETTING_JUSTIFY | 속성 문자의 자리맞추기를 지정합니다. | Specifies the justification of the attribute text. |
| ID_ADS_TOOLTIP_SETTING_ROTATION | 속성 문자의 회전 각도를 지정합니다. 값을 입력하거나 회전을 선택하여 좌표 입력 장치로 회전 각도를 지정합니다. 회전 각도는 원점에서 지정한 위치까지 측정한 것입니다. 자리맞추기 리스트에서 정렬이나 맞춤을 선택하면 회전 옵션을 사용할 수 없습니다. | Specifies the rotation angle of the attribute text. Enter a value, or choose Rotation to specify a rotation angle with your pointing device. The rotation angle is measured from the origin to the location you specify. If you select Align or Fit in the Justification list, the Rotation option is not available. |
| ID_ADS_TOOLTIP_SETTING_TEXTSTYLE | 속성 문자에 사용할 사전 정의된 문자 스타일을 지정합니다. 현재 로드된 문자 스타일이 표시됩니다. | Specifies a predefined text style for the attribute text. Currently loaded text styles are displayed. |
| ID_ADS_TOOLTIP_SETTING_WIDTH | 다음 줄로 줄바꿈하기 전에 여러 줄 속성의 문자 줄의 최소 길이를 지정합니다. 값이 0.000인 경우 문자 줄의 길이에 제한이 없습니다. 단일 선 속성에 사용할 수 없습니다. | Specifies the maximum length of the lines of text in a multiple-line attribute before wrapping to the next line. A value of 0.000 means that there is no restriction on the length of a line of text. This option is not available for single-line attributes. |
| ID_ADV_Copy | 복사 하기 | Copy |
| ID_ADV_CreateNew | 새로 만들기 | Create New |
| ID_AFUNCS_Search_Accurate | 가장 정확한 검색결과 | Similar search results |
| ID_AFUNCS_Search_AllSearch | 명령어 전체보기 검색 | Full command search |
| ID_AFUNCS_Search_NoResult | 검색결과가 없다면 띄어쓰기 해보세요 | If there are no search results, try adding a space. |
| ID_AFUNCS_Search_Recent | 최근검색 | Recent searches |
| ID_AFUNCS_Search_Result | 검색결과 | Search results |
| ID_AFUNCS_Search_Style | 스타일 관리 / 특성관리 / 통합블록관리 | Style management / Property management / Unified block management |
| ID_AFUNCS_Search_System | 시스템설정 / 작업환경 | System settings / Work environment |
| ID_AFUNCS_Search_WaterMark | 검색어를 입력하세요 | Enter the search text |
| ID_Auth_SessionExpired | 인증이 만료되었습니다. 다시 로그인해주세요. | Your authentication has expired. Please log in again. |
| ID_Auth_ShutdownWarning | {0}초 후 프로그램이 종료됩니다. 작업을 저장해 주세요. | The program will close in {0} seconds. Please save your work. |
| ID_AV_MoreArrowWindowTitle | 화살 선택창 | Arrow Selection Window |
| ID_AV_TextBlock_ArchTick | 기울인 선(건축) | Arch. Tick |
| ID_AV_TextBlock_BoxBlank | 빈 상자 | Empty Box |
| ID_AV_TextBlock_BoxFilled | 채운 상자 | Filled Box |
| ID_AV_TextBlock_Closed | 닫힌 화살표 | Closed Arrow |
| ID_AV_TextBlock_ClosedBlank | 빈 화살표 | Empty Arrow |
| ID_AV_TextBlock_CloseFill | 채운 화살표 | Filled Arrow |
| ID_AV_TextBlock_DatumFilled | 채운 역삼각형 | Filled Inv. Triangle |
| ID_AV_TextBlock_DatumTriangle | 빈 역삼각형 | Empty Inv. Triangle |
| ID_AV_TextBlock_Dot | 채운 점 | Filled Dot |
| ID_AV_TextBlock_DotBlank | 빈 점 | Empty Dot (No line) |
| ID_AV_TextBlock_DotSmall | 채운 작은 점 | Filled Dot (Small) |
| ID_AV_TextBlock_Integral | 정수 | Integral |
| ID_AV_TextBlock_None | 없음 | None |
| ID_AV_TextBlock_Oblique | 기울인 선 | Oblique Tick |
| ID_AV_TextBlock_Open | 열린 화살표 | Open Arrow |
| ID_AV_TextBlock_Open30 | 열린 화살표2 | Open Arrow (30º) |
| ID_AV_TextBlock_Open90 | 열린 화살표3 | Open Arrow (90º) |
| ID_AV_TextBlock_Origin | 빈 점2 | Empty Dot (Big) |
| ID_AV_TextBlock_Origin2 | 원점 지시자 | Origin Indicator |
| ID_AV_TextBlock_Small | 작은 빈 점 | Empty Dot (Small) |
| ID_AV_TextBlock_User | 사용자 | User Defined |
| ID_BAS_Button_Combine | 결합 | Combine |
| ID_BAS_Button_Insert | 삽입 | Insert |
| ID_BAS_CheckBox_RASTERIMAGE | 화면이동시 Raster Image 처리 | Process Raster Images During Pan |
| ID_BAS_ContextMenu_Delete | 삭제 | Delete |
| ID_BAS_ContextMenu_Detach | 분리 | Separate |
| ID_BAS_ContextMenu_Open | 열기 | Open |
| ID_BAS_ConverterTitle | 속성 블록으로 변환 | Convert to Attribute Block |
| ID_BAS_ERR_CantChangeAttribute | 속성 블록으로 변환이 불가능합니다 | Can't convert to attribute block. |
| ID_BAS_ERR_CantChangeLockLayer | 레이어가 잠겨 있어 수정이 불가능합니다. | Layer is locked. |
| ID_BAS_ERR_CantChangePath | 유효하지 않은 파일입니다. | This file is not valid. |
| ID_BAS_ERR_CantChangePathType | 도면경로와 참조경로의 드라이브가 다른 경우, 상대경로를 사용할 수 없습니다. | If the drive of the drawing path and the reference path are different, the relative path cannot be used. |
| ID_BAS_ERR_CantSelectetEntity | 선택할 수 없는 객체입니다. | The object cannot be selected. |
| ID_BAS_ERR_DELETE_BLOCK_SHOWCASE | 도면에 사용 중인 블록은 삭제할 수 없습니다. | Can't delete a block that is in use in a drawing. |
| ID_BAS_ERR_FailBindXrefBlock | 내부 블록으로 {0}하는데 실패했습니다. | Failed to {0} into inner xref block. |
| ID_BAS_ERR_FailDetachXref | 외부 참조를 분리하는 데 실패했습니다. | Failed to detach external references. |
| ID_BAS_ERR_HasBlockTableRecord | 유효하지 않은 블록 이름입니다. | Invalid block name. |
| ID_BAS_ERR_NoneSelectBlock | 선택된 블록이 없습니다. | No block selected. |
| ID_BAS_ERR_WBLOCKRESULT | 블록을 내보내는데 실패했습니다. | Failed to export block. |
| ID_BAS_MSG_InsertionPoint | 삽입점 지정 | Specify insertion point |
| ID_BAS_MSG_WBLOCKRESULT | 블록을 {0} 경로로 내보냈습니다. | Block was exported to that path {0}. |
| ID_BAS_QMSG_DeleteItem | {0}을 삭제하시겠습니까? | Do you want to delete {0}? |
| ID_BAS_QMSG_DeleteItemWithCount | {0}개 항목을 삭제하시겠습니까? | Do you want to delete {0} items? |
| ID_BAS_QMSG_UpdateXrefPath | 상대 경로를 업데이트하지 않은 경우 다음번에 도면을 열었을 때 참조된 파일을 찾지 못할 수 있습니다. 상대 경로로 설정된 참조를 업데이트하시겠습니까? | If you have not updated the relative paths, you may not be able to find the referenced files the next time you open the drawing. Do you want to update references set to relative paths? |
| ID_BAS_RectButton_Apply | 확인 | Apply |
| ID_BAS_RectButton_Cancel | 취소 | Quit |
| ID_BAS_SubTitle_AttributeBlock | 속성블록 | Attribute Block |
| ID_BAS_SubTitle_Block | 블록 | Block |
| ID_BAS_SubTitle_XrefBlock | 외부참조 | External Reference |
| ID_BAS_TextBlock_Absolute | 절대경로 | Absolute path |
| ID_BAS_TextBlock_AttachPickPoint | 외부참조 추가 시 삽입점 화면에서 직접지정 | Specify Insertion Point on Screen |
| ID_BAS_TextBlock_Attribute | 속성 | Attributes |
| ID_BAS_TextBlock_Border | 테두리 표시 | Show Border |
| ID_BAS_TextBlock_Color | 색상 | Color |
| ID_BAS_TextBlock_Comments | 설명 | Comments |
| ID_BAS_TextBlock_Connection | 연결 방식 | Ref. type |
| ID_BAS_TextBlock_CurrentConnection | 현재 도면에만 연결 (중첩) | Connect to current drawing only (Overlay) |
| ID_BAS_TextBlock_Date | 날짜 | Date |
| ID_BAS_TextBlock_EnterContent | 내용을 입력하세요. | Enter content. |
| ID_BAS_TextBlock_EnterLabel | 라벨을 입력하세요. | Enter label. |
| ID_BAS_TextBlock_Fade | 페이드 | Fade |
| ID_BAS_TextBlock_InsertAllowExploding | 삽입 시 블록분해 허용 | Allow Exploding on Insertion |
| ID_BAS_TextBlock_InsertDesignation | 삽입점 화면에서 직접지정 | Specify insertion point on screen |
| ID_BAS_TextBlock_InternalBlock | 내부 블록으로 Bind | Bind to internal block |
| ID_BAS_TextBlock_Kind | 종류 | Type |
| ID_BAS_TextBlock_Layer | 레이어 | Layer |
| ID_BAS_TextBlock_MultipleConnection | 다중 연결 (부착) | Multiple connection (Attach) |
| ID_BAS_TextBlock_Name | 이름 | Name |
| ID_BAS_TextBlock_NoPath | 경로없음 | No Path |
| ID_BAS_TextBlock_Output | 출력 | Print |
| ID_BAS_TextBlock_Path | 경로 | Path |
| ID_BAS_TextBlock_PathType | 경로 유형 | Path type |
| ID_BAS_TextBlock_Prompt | 프롬프트 | Prompt |
| ID_BAS_TextBlock_Relative | 상대경로 | Relative path |
| ID_BAS_TextBlock_Search | 검색 | Search Text |
| ID_BAS_TextBlock_SelectEditText | 수정될 수 있는 문자 선택 | Select text reference that can be modified |
| ID_BAS_TextBlock_Settings | 설정 | Settings |
| ID_BAS_TextBlock_Size | 크기 | Size |
| ID_BAS_TextBlock_Tag | 태그 | Tag |
| ID_BAS_TextBlock_TextString | 문자 값 | Text string |
| ID_BAS_TextBlock_Unit | 단위 | Unit |
| ID_BAS_TextBlock_ViewportToScaleMatch | 뷰포트 스케일에 맞는 배율 적용 (주석배율 적용) | Apply Annotation Scaling |
| ID_BAS_TextBlock_Visibility | 가시성 | Visibility |
| ID_BAS_Title | 블록 통합 관리창 | Block Manager |
| ID_BAS_ToolTip_Add | 삽입점 지정 | If the selected object contains attribute text, an attribute block is created. |
| ID_BCV_DataGrid_HEADER_01 | 편집잠금 | Edit Lock |
| ID_BCV_DataGrid_HEADER_02 | 위치고정 | Lock Position |
| ID_BCV_DataGrid_HEADER_03 | 숨김 | Hide |
| ID_BCV_TEXTBLOCK_TEXT_01 | 라벨을 입력하세요 | Enter label. |
| ID_BCV_TEXTBLOCK_TEXT_02 | 내용을 입력하세요 | Enter Text |
| ID_BLAS_MSG_CreatingBlockPreviewImage | 블록 라이브러리의 프리뷰 이미지를 생성하고 있습니다. | Creating preview images of block library. |
| ID_BLAS_Title | 블록 라이브러리 | Block Library |
| ID_BLOCK_CheckBox_OLEHIDE_01 | 도면공간 | Paper Space |
| ID_BLOCK_CheckBox_OLEHIDE_02 | 모형공간 | Model Space |
| ID_BLOCK_CheckBox_OLEHIDE_03 | 출력 | Print |
| ID_BLOCK_CommandButton_IMAGEQUALITY | 이미지 품질 조정 | Adjust Image Quality |
| ID_BLOCK_CommandButton_TRANSPARENCY | 이미지 투명도 적용 | Image Transparency |
| ID_BLOCK_GroupName_00_01 | 블록 | Block |
| ID_BLOCK_GroupName_00_02 | 삽입시 기준 단위 | Insertion Unit |
| ID_BLOCK_GroupName_01_01 | 블록 내 | Copy Objects |
| ID_BLOCK_GroupName_01_02 | 객체복사 | in Block |
| ID_BLOCK_GroupName_02_01 | 다른파일 | External Reference |
| ID_BLOCK_GroupName_03_01 | OLE 객체 | Insert/Edit |
| ID_BLOCK_GroupName_03_02 | 삽입/수정 | OLE Object |
| ID_BLOCK_GroupName_04_01 | 외부 | Modify |
| ID_BLOCK_GroupName_04_02 | 블록 | Xref |
| ID_BLOCK_GroupName_05 | 블록 편집 | Edit Block |
| ID_BLOCK_GroupName_05_01 | 블록 | Create |
| ID_BLOCK_GroupName_05_02 | 만들기 | Block |
| ID_BLOCK_GroupName_06_01 | 여러 객체 | Group |
| ID_BLOCK_GroupName_07_01 | 내부 | Modify |
| ID_BLOCK_GroupName_07_02 | 블록 수정 | Block |
| ID_BLOCK_GroupName_08_01 | 이미지 | Adjust |
| ID_BLOCK_GroupName_08_02 | 조정 | Image |
| ID_BLOCK_GroupName_09_01 | 여러가지 방법 | Import |
| ID_BLOCK_GroupName_09_02 | 으로 블록 | Blocks |
| ID_BLOCK_GroupName_10_01 | 블록 | Toggle |
| ID_BLOCK_GroupName_10_02 | 프레임 | Frame |
| ID_BLOCK_GroupName_10_03 | 켜고 끄기 | Visibility |
| ID_BLOCK_GroupName_11_01 | 블록을 | Clipping |
| ID_BLOCK_GroupName_12_01 | 글자가 변경 | Attribute Blocks |
| ID_BLOCK_RadioButton_ATTACH_01_01 | 다중 연결 | Multiple Links |
| ID_BLOCK_RadioButton_ATTACH_01_02 | 현재 파일 | Current File |
| ID_BLOCK_RadioButton_ATTACH_02_01 | 상대경로 | Relative Path |
| ID_BLOCK_RadioButton_ATTACH_02_02 | 절대경로 | Absolute Path |
| ID_BLOCK_RadioButton_ATTACH_02_03 | 경로없음 | No Path |
| ID_BLOCK_RadioButton_ATTDISP_01 | 보이기 | Show |
| ID_BLOCK_RadioButton_ATTDISP_02 | 숨기기 | Hide |
| ID_BLOCK_RadioButton_ATTDISP_03 | 일반 | General |
| ID_BLOCK_RadioButton_FRAME_01 | 프레임 표시 | Show Frame & Plot |
| ID_BLOCK_RadioButton_FRAME_02 | 프레임 표시(플롯 안함) | Show Frame & No Plot |
| ID_BLOCK_RadioButton_FRAME_03 | 프레임 표시 안함 | Hide Frame |
| ID_BLOCK_RadioButton_FRAME_04 | 객체 종류별 적용 | Apply by object type |
| ID_BLOCK_RadioButton_GROUPDISPLAYMODE_01 | 표시함 | Show |
| ID_BLOCK_RadioButton_GROUPDISPLAYMODE_02 | 표시안함 | Hide |
| ID_BLOCK_RadioButton_OLEHIDE_01 | 모든 공간에 표시 , 출력 됨 | Display in All Layouts & Plot |
| ID_BLOCK_RadioButton_OLEHIDE_02 | 도면 공간에만 표시 , 출력 됨 | Display in Paper space only & Plot |
| ID_BLOCK_RadioButton_OLEHIDE_03 | 모형 공간에만 표시 , 출력 됨 | Display in Model space only & Plot |
| ID_BLOCK_RadioButton_OLEHIDE_04 | 모든 공간에 숨김 , 출력 안됨 | Hidden in All Layouts & Non-Plot |
| ID_BLOCK_RadioButton_PICKSTYLE_01 | 그룹 | Group |
| ID_BLOCK_RadioButton_PICKSTYLE_02 | 객체 | Object |
| ID_BLOCK_RadioButton_XEDIT_01 | 허용 | Allow |
| ID_BLOCK_RadioButton_XEDIT_02 | 불가 | Disallow |
| ID_BLOCK_TextBlock_ATTACH | 외부파일 연결 | Attach Files |
| ID_BLOCK_TextBlock_ATTACH_01 | 연결방식 | Link Type |
| ID_BLOCK_TextBlock_ATTACH_02 | 경로유형 | File Path Types |
| ID_BLOCK_TextBlock_COPYNESTED_01 | 설정 | Setting |
| ID_BLOCK_TextBlock_COPYNESTED_02 | 속성 문자 처리 | Process Attribute Text |
| ID_BLOCK_TextBlock_HYPERLINK | 링크정보 표시 여부 | Toggle Hyperlink Display |
| ID_BLOCK_TextBlock_INSUNITS | * 블록 삽입 시 축척비율의 기준 도면 단위 | * Drawing units to be used for the scale factor |
| ID_Button_Apply | 적용 | Apply |
| ID_Button_Cancel | 취소 | Quit |
| ID_Button_Close | 닫기 | Close |
| ID_Button_OK | 확인 | Ok |
| ID_CAS_Apply | 적용 | Apply |
| ID_CAS_BackgroundColor | (배경 색상) | (Background Color) |
| ID_CAS_BLUE | 파란색 | Blue |
| ID_CAS_BYBLOCK | 블록별 | ByBlock |
| ID_CAS_BYLAYER | 도면층별 | ByLayer |
| ID_CAS_Cancel | 취소 | Quit |
| ID_CAS_Cyan | 청록색 | Cyan |
| ID_CAS_DefaultColor | (기본 색상) | (Default Color) |
| ID_CAS_GRAY | 흑백 | Gray |
| ID_CAS_GREEN | 초록색 | Green |
| ID_CAS_HUE | 색조 | Hue |
| ID_CAS_INDEXCOLOR | 색상 색인 | Index Color |
| ID_CAS_INDEXNO | 색상 색인 | Index No |
| ID_CAS_LOGICAL | 속성 | Assign |
| ID_CAS_LUMINANCE | 휘도 | Luminance |
| ID_CAS_Magenta | 자주색 | Magenta |
| ID_CAS_RED | 빨간색 | Red |
| ID_CAS_SATURATION | 채도 | Saturation |
| ID_CAS_SimilarColor | (비슷한 색상) | (Similar Color) |
| ID_CAS_STANDARD | 표준 | Standard |
| ID_CAS_TRUECOLOR | 트루 컬러 | True Color |
| ID_CAS_White | 흰색 | White |
| ID_CAS_WindowTitle | 색상 | Color |
| ID_CAS_Yellow | 노란색 | Yellow |
| ID_CIMB_Color | 색상 | Color |
| ID_CIMB_Color_Current | 현재 색상 : | Current Color : |
| ID_CIMB_Color_Description | 선택된 객체가 없을 때 사용할 색상을 선택하거나, 선택된 객체의 색상을 변경할 수 있습니다. | You can choose a color to use when no objects are selected, or you can change the color of selected objects. |
| ID_CIMB_Color_SelectedEntity | 선택된 객체 색상 : | Selected Entity Color : |
| ID_CIVIL_CommandButton_3D_VERTEX_MODIFY | 정점 EL 수정 | Modify Vertex EL |
| ID_CIVIL_CommandButton_APPLY_EL_to_TEXT | 문자 EL 반영 | Apply Text to EL |
| ID_CIVIL_CommandButton_BENCH_CUT | 횡단면도 층 따기 | Draw Benching |
| ID_CIVIL_CommandButton_B-TYPE_DITCH | 산마루 측구 | Crest Ditch |
| ID_CIVIL_CommandButton_CLOTHOID | 클로소이드 그리기 | Draw Clothoid |
| ID_CIVIL_CommandButton_COLORLANE | 차로유도선 | Color Lane |
| ID_CIVIL_CommandButton_CORNER | 가각 그리기 | Draw Street Chamfer |
| ID_CIVIL_CommandButton_CROSS-SECTION_GRID | 횡단 그리드 그리기 | Draw Cross Section Grid |
| ID_CIVIL_CommandButton_CROSS-SECTION_LEVEL | 지형도에서 횡단 추출 | Extract Cross Section from Topography |
| ID_CIVIL_CommandButton_CROSS-SECTION_SLOPE | 횡단 사면 그리기 | Draw Cross Section Slope |
| ID_CIVIL_CommandButton_CROSSWALK | 횡단보도 | Pedestrian Crossings |
| ID_CIVIL_CommandButton_DESIGN_LEVEL | 계획선 | Draw Profile |
| ID_CIVIL_CommandButton_DISTANCE_MARK | 임의 거리 표시 | Display Arbitrary Distance |
| ID_CIVIL_CommandButton_EL_LINE | EL값이 있는 선 | Line with EL Value |
| ID_CIVIL_CommandButton_EL_LINE_MODIFY | 폴리선 EL 수정 | Modify Polyline EL |
| ID_CIVIL_CommandButton_EL-VALUE_to_TEXT | EL값 문자로 쓰기 | Label EL |
| ID_CIVIL_CommandButton_EQUALLY_MODIFY | 일괄 변경 | Batch Change EL |
| ID_CIVIL_CommandButton_FIND_BETWEEN_ELEVATION | 두점 사이 EL 찾기 | EL Between Two Points |
| ID_CIVIL_CommandButton_FIND_ELEVATION | EL 찾기 | Find EL |
| ID_CIVIL_CommandButton_FIND_LEVEL | 상대 EL 구하기 | Calculate Relative EL |
| ID_CIVIL_CommandButton_FIND_LOW/MAX_POINT | 최저/최고점 찾기 | Find Max/Min EL |
| ID_CIVIL_CommandButton_FRONT_BANKING_SLOPE | 앞성토 그리기 | Approach Fill Ticks |
| ID_CIVIL_CommandButton_GRID | 좌표 그리드 | Draw a Plan Grid |
| ID_CIVIL_CommandButton_GROUND_LEVEL | 종단 지반선 생성 | Draw Ground Line |
| ID_CIVIL_CommandButton_HATCH_CONTOURS | 해치용 현황작업 | Contour Hatch |
| ID_CIVIL_CommandButton_INCREMENT_MODIFY | 연속 변경 | Incremental EL Change |
| ID_CIVIL_CommandButton_INTERPOLATION | 등고선 보간 | Contour Interpolation |
| ID_CIVIL_CommandButton_LEAN_CONCRETE | 버림 콘크리트 | Concrete Bedding |
| ID_CIVIL_CommandButton_MARK_CORNER | 갈매기차선 | Chevron Markings |
| ID_CIVIL_CommandButton_MARK_ELEVATION | EL 표시하기 | Label EL |
| ID_CIVIL_CommandButton_MARK_SLOPE_TEXT | 경사 표기 | Annotate Slope Ratio |
| ID_CIVIL_CommandButton_MARKING_ELEVATION | 등고선 EL 표기 | Label Contour EL |
| ID_CIVIL_CommandButton_PERPENDICULAR_LINE | 수직선 그리기 | Draw Vertical Line |
| ID_CIVIL_CommandButton_PIPE | 횡배수관 | Drainage Culvert |
| ID_CIVIL_CommandButton_POINT_to_TEXT | 표고점으로 문자 생성 | Create Text from EL Point |
| ID_CIVIL_CommandButton_ROUNDING | 횡단 깎기부 라운딩 | Round Cut Slope for Cross Section |
| ID_CIVIL_CommandButton_SLOPE_LINE | 경사선 그리기 | Draw Sloped Line |
| ID_CIVIL_CommandButton_SLOPE_MARK | 비탈면 그리기 | Draw Slope Ticks |
| ID_CIVIL_CommandButton_STATION | 측점 생성 | Stationing |
| ID_CIVIL_CommandButton_STATIONTEXT | 선형 측점 조회 | Label Station |
| ID_CIVIL_CommandButton_TANGENT | 접선 그리기 | Draw Tangent Line |
| ID_CIVIL_CommandButton_TANGENT CIRCLE | 접원 그리기 | Draw Tangent Circle |
| ID_CIVIL_CommandButton_TAPER | 도로 테이퍼 | Road Taper |
| ID_CIVIL_CommandButton_TEXT_and_POINT | 문자 및 표고점 생성 | Create Text & EL Point |
| ID_CIVIL_CommandButton_TEXT_to_POINT | 문자로 표고점 생성 | Points by Text |
| ID_CIVIL_CommandButton_TLC | 원의 접선 그리기 | Draw Line Tangent to Circle |
| ID_CIVIL_CommandButton_VERTEX_EDIT | 문자로 EL 수정 | Change EL by Text |
| ID_CIVIL_CommandButton_VERTICAL_GRID | 종단 그리드 | Profile Horizontal Grid |
| ID_CIVIL_CommandButton_V-TYPE_DITCH | V형 측구 | V-Shaped Ditch |
| ID_CIVIL_GroupName_01_02 | 구하기 | (Elevation Level) |
| ID_CIVIL_GroupName_02 | 현황 보정 및 삼각망 생성 | Existing Condition Adjustment and Create Triangular Mesh |
| ID_CIVIL_GroupName_02_01 | 비탈면 | Draw & Annotate |
| ID_CIVIL_GroupName_02_02 | 그리기 및 | Slopes |
| ID_CIVIL_GroupName_03 | 평면선형 | Plan Alignment |
| ID_CIVIL_GroupName_03_01 | 종단선형 | Profile |
| ID_CIVIL_GroupName_03_02 | 작성 및 | & Elevation |
| ID_CIVIL_GroupName_04 | 비탈면 | Slope |
| ID_CIVIL_GroupName_04_01 | 시설물 | Road Features |
| ID_CIVIL_GroupName_04_02 | 및 | & Lane Markings |
| ID_CIVIL_GroupName_05 | 종단 선형 | Longitudinal Alignment |
| ID_CIVIL_GroupName_05_01 | 횡단면도 | Create |
| ID_CIVIL_GroupName_05_02 | 작성하기 | Cross-Section |
| ID_CIVIL_GroupName_06 | 횡단면도 | Cross Section |
| ID_CIVIL_GroupName_06_01 | 현황 수정 | Revise Existing |
| ID_CIVIL_GroupName_06_02 | 및 | / EL Points |
| ID_CIVIL_GroupName_07 | EL 구하기 | Calculate EL |
| ID_CIVIL_GroupName_07_01 | 평면선형 | Horizontal Alignment |
| ID_CIVIL_GroupName_08 | 측구 설치 | Install Drainage Ditch |
| ID_CIVIL_GroupName_08_01 | 선형 | Draw |
| ID_CIVIL_GroupName_08_02 | 그리기 | Horizontal Curves |
| ID_CIVIL_GroupName_09 | 시설물 그리기 | Draw Structures |
| ID_CIVIL_GroupName_09_01 | 측구 | Draw |
| ID_CIVIL_GroupName_09_02 | 설치하기 | Ditch |
| ID_CIVIL_RadioButton_TLC_01 | 공통 외접선 | Common External Tangent |
| ID_CIVIL_RadioButton_TLC_02 | 공통 내접선 | Common Internal Tangent |
| ID_CIVIL_RadioButton_TLC_03 | 두 원 선택 방향 접선 | Tangent Based on Two Circle Selection Direction |
| ID_CIVIL_RadioButton_TLC_04 | 한 점과 원의 접선 | Tangent from a Point to a Circle |
| ID_CMB_AllClose | 모든 도면 닫기 | Close All drawings |
| ID_CMB_AlwaysCloseAllDocument | 항상 모든 도면 닫기 | Always close all drawings |
| ID_CMB_CurrentClose | 현재 도면 닫기 | Close Current Drawing |
| ID_CMB_Message | 모든 도면을 닫으시겠습니까? 아니면, 현재 도면을 닫으시겠습니까? | Do you want to close all drawings or only the current drawing? |
| ID_CMB_TOOLTIP_AlwaysClose | 항상 모든 도면 닫기를 체크 시 메세지가 표시되지 않습니다. 이 항목은 옵션창에서 변경이 가능합니다. | If ""Always close all drawings"" is checked, this message will not be displayed. You can change this setting in the Options window. |
| ID_COMMAND_CREATEBLOCK_SELECTBASEPOINT | 기준점 선택 | Select base point |
| ID_COMMAND_NO | 아니오 | No |
| ID_COMMAND_YES | 예 | Yes |
| ID_CS_Advanced | 색상 상세 | Color Edit |
| ID_CS_Description_- | 숫자끼리 빼기 | Subtract numbers from each other |
| ID_CS_Description_* | 숫자끼리 곱하기 | Multiply numbers together |
| ID_CS_Description_/ | 숫자끼리 나누기 | Divide by numbers |
| ID_CS_Description_+ | 숫자끼리 더하기 | Add numbers together |
| ID_CS_Description_3DARRAY | 3D 배열 | Create multiple copies of entities in 3D. |
| ID_CS_Description_3DCORBIT | 연속궤도로 3D 뷰 회전 | 3D Continuous Orbit |
| ID_CS_Description_3DEDITBAR | 표면 CV 편집 막대 | Surface CV Edit Bar |
| ID_CS_Description_3DFACE | 3D면 | 3D Face |
| ID_CS_Description_3DFORBIT | 자유궤도로 3D 뷰 회전 | 3D Free Orbit |
| ID_CS_Description_3DORBIT | 수평 · 수직궤도로 3D 뷰 회전 | 3D Constrained Orbit |
| ID_CS_Description_3DOSMODE | 3D 객체 스냅 선택 | Select 3D object snaps |
| ID_CS_Description_3DPOLY | 3D 폴리선 | Create a 3D polyline |
| ID_CS_Description_3DV | 3D Viewer 실행 | Run 3D Viewer |
| ID_CS_Description_3DVERTEXMODIFY | 정점 EL 수정 | Vertex EL correction |
| ID_CS_Description_ADDPVE | 폴리선 정점 추가 | Add polyline vertices |
| ID_CS_Description_ADDTEXTVALUE | 입력값으로 일괄연산 | Batch calculation with input values |
| ID_CS_Description_ADJUST | 이미지/언더레이 조정 | Image/underlay adjustments |
| ID_CS_Description_ALIGN | 정렬 | Align the object with other objects in 2D and 3D |
| ID_CS_Description_ALLZVALUECHANGE | Z값 일괄 변경 | Change all Z values |
| ID_CS_Description_ANGBASE | 기준 각도 | Base Angle |
| ID_CS_Description_ANGDIR | 각도 방향 | Angle Direction |
| ID_CS_Description_ANGSNAPTRACK(Toggle) | 각도 방향 | Not info. |
| ID_CS_Description_ANNOUPDATE | 축척 업데이트 | Scale update |
| ID_CS_Description_APPENDTEXT | 문자 추가 | Add Characters |
| ID_CS_Description_APPLYELTOTEXT | 문자 EL 반영 | Reflection of letters EL |
| ID_CS_Description_APTEXT | 문자 머리말/꼬리말 추가 | Add text header/footer |
| ID_CS_Description_ARC | 호 | Create an Arc |
| ID_CS_Description_ARCREBAR | ARC에 점철근 | Place Rebar Section Symbols Along Arc |
| ID_CS_Description_AREA | 면적/둘레 조회 | Query Area/Perimeter |
| ID_CS_Description_ARET | 면적쓰기 | Write area |
| ID_CS_Description_ARRAY | 배열 | Create multiple copies of objects in patterns |
| ID_CS_Description_ARRAYCLOSE | 배열 닫기 | Saves changes and exits array editing mode |
| ID_CS_Description_ARRAYEDIT | 배열 편집 | Edits associative array objects and their source objects. |
| ID_CS_Description_ARRAYPATH | 경로 배열 | Copies objects along a specified path. |
| ID_CS_Description_ARRAYPOLAR | 원형 배열 | Copies objects in a circular pattern |
| ID_CS_Description_ARRAYRECT | 직사각형 배열 | Copies objects in a rectangular pattern |
| ID_CS_Description_ARTEXT | 기준점 정렬 | Base point alignment |
| ID_CS_Description_ATTACH | 외부 파일 블록으로 연결(외부 블록) | Attaches an external file to the drawing |
| ID_CS_Description_ATTBEX | 속성 블록 깨기 | Explode Att Block |
| ID_CS_Description_ATTBTEDIT | 속성 블록 문자 수정 | Edit Att Text |
| ID_CS_Description_ATTDEF | 속성 문자 만들기 | Create Att Text |
| ID_CS_Description_ATTDISP | 데이터 문자 보기 | Att Text Visibility |
| ID_CS_Description_ATTREDEF | 속성 블록 재정의 | Redefine Att Block |
| ID_CS_Description_ATTSYNC | 속성 문자 변경 동기화 | Att Text Sync |
| ID_CS_Description_AUDIT | 감사(Audit) | Checks the current drawing for errors |
| ID_CS_Description_AUNITS | 각도 단위 | Angle Units |
| ID_CS_Description_AUPREC | 각도 정밀도 | Angle Precision |
| ID_CS_Description_AUTOCOMPLETEMODE(Toggle) | 명령 입력 시 자동 완성 기능 설정 | Command Autocomplete Settings |
| ID_CS_Description_AUTOCOMPLETETO | 지연 시간(ms) | Autocomplete Delay Time (ms) |
| ID_CS_Description_BACKGROUNDCOLOR | 바탕 색상 변경 | Change Background Color |
| ID_CS_Description_BATTMAN | 속성 블록 관리 | Attribute block management |
| ID_CS_Description_BCLOSE | 편집사항 저장 및 닫기 | Save and close edits |
| ID_CS_Description_BEDIT | 내부블록 편집 | Block Editor |
| ID_CS_Description_-BEDIT | 내부 블록 | Internal block |
| ID_CS_Description_BENCHCUT | 횡단면도 층 따기 | Cross section layer picking |
| ID_CS_Description_BINSERTIONPOINT | 삽입기준점 변경 | Change Base Point |
| ID_CS_Description_BKGCOLOR | 작업화면 색상 | Work Screen Color |
| ID_CS_Description_BLEND | 스플라인 넣어 연결하기 | Connect with spline |
| ID_CS_Description_BLIBRARY | 블록 라이브러리 | Block Library |
| ID_CS_Description_BOUNDARY | 경계및 영역 작성하기 | Boundary Creation |
| ID_CS_Description_BOUNDARYALIGNTEXT | 영역 내 문자 정렬 | Aligning characters within a region |
| ID_CS_Description_BOX | 상자 | Solid Box |
| ID_CS_Description_BREAK | 한점 또는 두점 끊기 | Splits an entity into two entities. |
| ID_CS_Description_BREAKALL | 모든 교차점 끊기 | Break all intersections |
| ID_CS_Description_BREINDIST | 입력 거리로 끊기 | Break by Input Distance |
| ID_CS_Description_BREIPOINT | 객체 기준 교차점 끊기 | Break intersection by object |
| ID_CS_Description_BREONEPOINT | 한점에서 끊기 | cut off at one point |
| ID_CS_Description_BREP | 솔리드 사용내역 제거 | Remove solid usage history |
| ID_CS_Description_BRESDIST | 지정 거리마다 끊기 | Stop at specified distance |
| ID_CS_Description_BRESPOINT | 선택점마다 끊기 | Break at each selection point |
| ID_CS_Description_BSAVEAS | 다른 이름으로 저장 | Save As |
| ID_CS_Description_BTYPEDITCH | 산마루 측구 | Ridge gutter |
| ID_CS_Description_C:IMAGECLIP | 이미지 자르기 | Image Clip |
| ID_CS_Description_CADTOEXL | 캐드표를 엑셀로 | CAD table to Excel |
| ID_CS_Description_CALCULATOR | 계산기 | Calculator |
| ID_CS_Description_CALCULATOR2 | 고급계산기 | Advanced calculator |
| ID_CS_Description_CENTERLINE | 지정 거리마다 수직선 그리기 | Not info. |
| ID_CS_Description_CENTERREC | 중심으로 이동 | move to center |
| ID_CS_Description_CFS | 여러 파일 문자 스타일 변경 | Change multiple file character styles |
| ID_CS_Description_CHAMFER | 모서리 따내기 | Create a chamfer |
| ID_CS_Description_CHAMFEREDGE | 모서리 모따기 | Corner Chamfer |
| ID_CS_Description_CHANGE | 객체 특성변경 | Change Properties |
| ID_CS_Description_CHANGEBLOCKNAME | 블록 이름 변경 | Rename Block |
| ID_CS_Description_CHARACTER | 특수문자표 불러오기 | Load special character table |
| ID_CS_Description_CHATTE | 속성문자 일반문자로 변환 | Convert Attributes to Text |
| ID_CS_Description_CHCOLOR | 숫자로 색상 변경 | Change color by number |
| ID_CS_Description_CHDIMSCALE | 치수선 축척 변경 | Batch Adjust Dim Scale |
| ID_CS_Description_CHECKDIRECTION | 선/폴리선 방향 표시 | Show Line/Polyline Direction |
| ID_CS_Description_CHLTYPE | 선택길이만큼 선꼴 변경 | Modify Segment Linetype |
| ID_CS_Description_CHSPACE | 작업공간 객체 이동 | Change Space |
| ID_CS_Description_CHTHOUSAND | 마침표(.)로 천단위 표기 | Thousand Separator with Period "." |
| ID_CS_Description_CHXREFXOLOR | 외부 블록 색상변경 | Change Xref Color |
| ID_CS_Description_CIRCLE | 원 | Draws a circle |
| ID_CS_Description_CLASSICGROUP | 그룹 관리자 | Group Manager |
| ID_CS_Description_CLAYER | 레이어 불러오기 | Load Layer |
| ID_CS_Description_CLOSE | 닫기 | Closes the active drawing window without closesing the program. |
| ID_CS_Description_CLOTHOID | 클로소이드 그리기 | Draw clothoid |
| ID_CS_Description_CMDLINEBKGCOLOR | 배경색상 | Background Color |
| ID_CS_Description_CMDLINETEXTCOLOR | 문자색상 | Text Color |
| ID_CS_Description_COLORLANE | 차로유도선 | ColorLane |
| ID_CS_Description_COLORX | 십자선 색상(X) | Crosshair Color (X) |
| ID_CS_Description_COLORY | 십자선 색상(Y) | Crosshair Color (Y) |
| ID_CS_Description_COLORZ | 십자선 색상(Z) | Crosshair Color (Z) |
| ID_CS_Description_CONE | 원추 | Solid Cone |
| ID_CS_Description_CONVERTTC | 대소문자 변경 | Change Case |
| ID_CS_Description_CONVTOMESH | 폴리곤 메쉬 , 표면 , 솔리드를 메쉬로 변환 | Convert polygon meshes, surfaces, and solids to meshes |
| ID_CS_Description_CONVTONURBS | NURBS로 변환 | Convert to NURBS |
| ID_CS_Description_CONVTOSOLID | 메쉬를 솔리드로 변환 | Convert mesh to solid |
| ID_CS_Description_CONVTOSURFACE | 메쉬를 표면으로 변환 | Convert mesh to surface |
| ID_CS_Description_COORDINATESEXPORT | 객체 좌표 엑셀로 내보내기 | Export Coordinates to Excel |
| ID_CS_Description_COPY | 복사 | COPY |
| ID_CS_Description_COPYBASE | 기준점 지정하여 복사 | Copy with Base Point |
| ID_CS_Description_COPYCAPTUREDIMAGE | 선택객체 이미지변환 | Capture Screen Image |
| ID_CS_Description_COPYCLIP | 복사 하기 | Paste |
| ID_CS_Description_COPYNESTED | 외부 블록 내 객체복사 | NCOPY with Options |
| ID_CS_Description_COPYTOCURL | 현재 레이어로 변경하여 객체복사 | Copy to Current Layer |
| ID_CS_Description_COPYTOLAYER | 다른 레이어로 변경하여 객체복사 | Copy to New Layer |
| ID_CS_Description_CORNER | 가각 그리기 | Draw Corner Cut/Fillet |
| ID_CS_Description_CPLINE | 폴리선 상호 변환 | Convert Polyline Types |
| ID_CS_Description_CREATETEXTSHADOW | 문자 그림자 생성 | Create Text Shadow |
| ID_CS_Description_CROSSINGAREACOLOR | 여러 문자 동시에 크기 변경 | Controls the color of the selection during cross selection. |
| ID_CS_Description_CROSSSECTIONGRID | 횡단 그리드 그리기 | Draw Cross-Section Grid |
| ID_CS_Description_CROSSSECTIONLEVEL | 지형도에서 횡단 추출 | Extract Cross-Section from Topo |
| ID_CS_Description_CROSSSECTIONSLOPE | 횡단 사면 그리기 | Draw Cross-Section Slope |
| ID_CS_Description_CROSSWALK | 횡단보도 | Crosswalk2 |
| ID_CS_Description_CTCMARK | 철근 C.T.C 표시 | Mark Rebar C.T.C |
| ID_CS_Description_CTEUP | 캐드표를 엑셀에 업데이트 | Update EXCEL from Table |
| ID_CS_Description_CURSORSIZE | 십자선 길이 | Crosshair Size |
| ID_CS_Description_CUTCLIP | 잘라내기 | TRIM |
| ID_CS_Description_CUTCSE | 단면 절단선 그리기 | Draw Section Line |
| ID_CS_Description_CUTCYL | 원통 절단선 그리기 | Insert Pipe Break Line |
| ID_CS_Description_CVADD | 표면 CV 추가 | Add surface CV |
| ID_CS_Description_CVHIDE | 표면 CV 숨기기 | Hide Surface CV |
| ID_CS_Description_CVREBUILD | 표면 CV 재생성 | Surface CV Regeneration |
| ID_CS_Description_CVREMOVE | 표면 CV 제거 | Surface CV removal |
| ID_CS_Description_CVSHOW | 표면 CV 표시 | Surface CV display |
| ID_CS_Description_CYLINDER | 원통 | Solid Cylinder |
| ID_CS_Description_DCALIGNED | 정렬값 고정 | Fix alignment value |
| ID_CS_Description_DCANGULAR | 각도 고정 | angle fixation |
| ID_CS_Description_DCCONVERT | 연동치수 → 고정치수 | Interlocking dimensions → fixed dimensions |
| ID_CS_Description_DCDIAMETER | 지름값 고정 | Fixed diameter value |
| ID_CS_Description_DCLINEAR | 수평/수직값 고정 | Fixed horizontal/vertical values |
| ID_CS_Description_DCRADIUS | 반지름값 고정 | Fixed radius value |
| ID_CS_Description_DDPTYPE | 점 객체 스타일 변경 | Point Style |
| ID_CS_Description_DDPTYPE_ABSOLUTE | 절대 단위로 크기 설정 | Set Size in Absolute Units |
| ID_CS_Description_DDPTYPE_RELATIVE | 화면에 상대적인 크기 설정 | Set Size Relative to Screen |
| ID_CS_Description_DEFSAVEASTYPEINDEX | 다른 이름으로 저장 대화 상자에서 .dwg 파일의 기본 버전 결정 | Default Save Format |
| ID_CS_Description_DELETEDUPLICATEENTITIES | 중복 객체 제거 | OVERKILL |
| ID_CS_Description_DELFO | 상태별 레이어 삭제 | Purge Layers |
| ID_CS_Description_DELOBJ | 변환 후 원본유지 여부 | Delete Source Objects |
| ID_CS_Description_DELPVE | 폴리선 정점 삭제 | Remove Polyline Vertex |
| ID_CS_Description_DESIGNLEVEL | 계획선 | Construction Line |
| ID_CS_Description_DETACHURL | 하이퍼링크 끊기 | Remove Hyperlink |
| ID_CS_Description_DETAILMARK | 철근 상세 표시 | Show Rebar Detail |
| ID_CS_Description_DETGAP | 철근제원 간격수정 | Modify Rebar Spacing |
| ID_CS_Description_DGNFRAME | DGN 일괄적용 | DGN Frame |
| ID_CS_Description_DGNOSNAP | 객체 스냅 유형 추가(DGN) | Add DGN Object Snap |
| ID_CS_Description_DIDEQUALPART | 치수 등분하기 | Divide Dimension into Equal Segments |
| ID_CS_Description_DIMALIGNED | 정렬 치수 | Aligned Dimension |
| ID_CS_Description_DIMANGULAR | 각도 치수 | Angular Dimension |
| ID_CS_Description_DIMARC | 호길이 치수 | Arc Length Dimension |
| ID_CS_Description_DIMASSOC | 치수 연동 및 분해 선택 | Set Dim Associativity |
| ID_CS_Description_DIMBASELINE | 기준점에서 연속 넣기 | Baseline Dimensioning |
| ID_CS_Description_DIMBREAK | 교차부 치수선 끊기 | Break Dim Line |
| ID_CS_Description_DIMCENTER | 중심표식 넣기 | Center Mark |
| ID_CS_Description_DIMCONTINUE | 선택 치수에 이어 연속 넣기 | Continuous Dimensioning |
| ID_CS_Description_DIMDIAMETER | 지름 치수 | Diameter Dimension |
| ID_CS_Description_DIMDISASSOCIATE | 연동 해제 | Disassociate Dim |
| ID_CS_Description_DIMDIVIDE | 치수 나누기 | Split Dimension |
| ID_CS_Description_DIMDIVMARK | 등분 치수로 변경 | Split Notation |
| ID_CS_Description_DIMEDIT | 보조선 기울기, 문자 변경 | Dimension Edit |
| ID_CS_Description_DIMJOGGED | 꺾은선 모양 반지름 치수 | Jogged Radius Dimension |
| ID_CS_Description_DIMJOGLINE | 꺾기선으로 변경 | Add Jog to Dim |
| ID_CS_Description_DIMJOIN | 치수 합치기 | Join Dimensions |
| ID_CS_Description_DIMLINEAR | 수평/수직 치수 | Linear Dimension |
| ID_CS_Description_DIMLINEPOSITION | 치수 선 위치 정렬 | Align Dim Lines |
| ID_CS_Description_DIMORDINATE | X,Y 좌표 쓰기 | Write Coordinates |
| ID_CS_Description_DIMOVERRIDE | 치수 스타일 설정값으로 복원 | Dim Override |
| ID_CS_Description_DIMRADIUS | 반지름 치수 | Radius Dimension |
| ID_CS_Description_DIMREASSOCIATE | 연동 치수로 변경/재연동 | Reassociate Dim |
| ID_CS_Description_DIMSPACE | 치수간 간격 조정 | Adjust Dim Spacing |
| ID_CS_Description_DIMSTYLE | 치수 스타일 작성/편집 | Dim Style Manager |
| ID_CS_Description_-DIMSTYLE | 현재 스타일로 변경 | Dim Style |
| ID_CS_Description_DIMTEDIT | 문자 위치/각도 변경 | Dim Text Edit |
| ID_CS_Description_DIMXLINE | 치수 보조선 시작점 정렬 | Align Extension Line |
| ID_CS_Description_DIMXLINELENGTH | 치수 보조선 길이 변경 | Adjusting Extension Line Length |
| ID_CS_Description_DIRECTIONREVERSE | 폴리선 방향 전환 | Reverse Polyline Direction |
| ID_CS_Description_DIST | 두 점 사이 거리/각도 조회 | Distance/Angle Inquiry |
| ID_CS_Description_DISTANCEMARK | 임의 거리 표시 | Indicate Arbitrary Distance |
| ID_CS_Description_DISTANCETEXT | 거리 쓰기 | Write Distance |
| ID_CS_Description_DISTANCETOPOINT | 지정점마다 거리쓰기 | Write Distance at Points |
| ID_CS_Description_DIVIDE | 지정개수로 객체 등분하기 | Divide Object |
| ID_CS_Description_DONUT | 도넛 | DONUT |
| ID_CS_Description_DRAWARROW | 선끝에 화살표 그리기 | Draw Arrowhead at Line End |
| ID_CS_Description_DRAWCURVEUSINGTANGENT | 두 접선으로 곡선 그리기 | Draw Curve Tangent to Two Lines |
| ID_CS_Description_DRAWGRID | 좌표 그리드 | Coordinate Grid |
| ID_CS_Description_DRAWINGFORMSCALE | 도곽 축척 조회 | Query Title Block Scale |
| ID_CS_Description_DRAWORDER | 그리기 순서 변경 | Draw Order |
| ID_CS_Description_DTEXT | 한줄 문자쓰기 | Single Line Text |
| ID_CS_Description_DTTMTEXT | 단일 문자를 여러줄 문자로 | Convert Text to MText |
| ID_CS_Description_DWFFRAME | DWF 프레임 | DWF Frame |
| ID_CS_Description_DWFOSNAP | 객체 스냅 유형 추가(DWF) | Add DWF Object Snap |
| ID_CS_Description_DYNMODE | 명령, 좌표 표시, 치수 표시 및 입력기능 | Command, coordinate display, dimension display and input function |
| ID_CS_Description_Dynprompt | 명령 입력 기능 | Command input function |
| ID_CS_Description_EATTDIT | 속성 문자 내용 변경 | Edit Attribute Value |
| ID_CS_Description_EBBOUNDARY | 경계로부터 한번에 잘라내기 | Trim/Extend with Boundary |
| ID_CS_Description_EDGESURF | 모서리 표면 | Edge Surface |
| ID_CS_Description_EDITENTITYSCALE | 객체 축척 일괄 변경 | Change object scale in bulk |
| ID_CS_Description_EDVIEWHOR | 두 점을 지정하여 수평뷰로 회전 | Rotate View Horizontally by Points |
| ID_CS_Description_EDVIEWVER | 두 점을 지정하여 수직뷰로 회전 | Rotate View Vertically by Points |
| ID_CS_Description_ELLINE | EL값이 있는 선 | Line with Elevation |
| ID_CS_Description_ELLINEMODIFY | 폴리선 EL 수정 | Modify Polyline Elevation |
| ID_CS_Description_ELLIPSE | 타원 | ELLIPSE |
| ID_CS_Description_ELVALUETOTEXT | EL값 문자로 쓰기 | Write Elevation as Text |
| ID_CS_Description_EQUALLYMODIFY | 일괄 변경 | Batch Change |
| ID_CS_Description_ERASE | 지우기 | ERASE |
| ID_CS_Description_ETCUP | 엑셀표를 캐드에 업데이트 | Update Table from EXCEL |
| ID_CS_Description_ETRANSMIT | 도면묶음(eTransmit) | eTransmit |
| ID_CS_Description_EXLEADERS | 지시선 연장/끊기 | Extend/Break Leader |
| ID_CS_Description_EXLTOCAD | 엑셀표를 캐드로 | Insert Excel Table |
| ID_CS_Description_EXPLODE | 분해 | EXPLODE |
| ID_CS_Description_EXPLODEBEAMMARK | 마킹블록 분해하기 | Explode Mark Block |
| ID_CS_Description_EXPORT | 내보내기 | EXPORT |
| ID_CS_Description_EXPORTCTE | 선택 순서대로 좌표 엑셀로 내보내기 | Export Coordinates in Order |
| ID_CS_Description_EXTEND | 연장하기 | EXTEND |
| ID_CS_Description_EXTENDTRIM | 경계 외부 자르기 | Trim Outside Boundary |
| ID_CS_Description_EXTRUDE | 돌출하여 솔리드로 작성 | Extrude Object |
| ID_CS_Description_FCLOSEALL | 열린 도면들을 저장하지 않고 모두 닫습니다. | Close all open drawings without saving. |
| ID_CS_Description_FIELD | 필드값 쓰기 | Insert Field |
| ID_CS_Description_FIELDDISPLAY | 필드값 회색배경표시 | Field Background |
| ID_CS_Description_FIELDEVAL | 필드 업데이트 방식 | Field Update Settings |
| ID_CS_Description_FILEINSERT | 외부 파일 삽입하기 | Attach External File |
| ID_CS_Description_FILENAMEFROMTITLENAME | 도면 제목으로 파일 이름 수정 | Rename File to Drawing Title |
| ID_CS_Description_FILLET | 모서리 둥글게 깎기 | FILLET |
| ID_CS_Description_FILLETEDGE | 모서리 모깎기 | Edge Fillet |
| ID_CS_Description_FILLMODE | 채우기 여부(해치, 솔리드, 굵은 폴리선) | Fill Mode |
| ID_CS_Description_FILTER | 특성/유형별 객체 조회 | Quick Select |
| ID_CS_Description_FILTERSELECT | 필터 객체 선택 | Select filter object |
| ID_CS_Description_FIND | 찾아 바꾸기 | Find and Replace |
| ID_CS_Description_FINDANDREPLACETEXT | 문자 찾기/바꾸기 | Find/Replace Text |
| ID_CS_Description_FINDBETWEENELEVATION | 두점 사이 EL 찾기 | Find Elevation Between Points |
| ID_CS_Description_FINDBLOCK | 블록 찾기 | Find Block |
| ID_CS_Description_FINDDL | 계획고 찾기 | Find Design Elevation |
| ID_CS_Description_FINDELEVATION | EL 찾기 | Find Elevation |
| ID_CS_Description_FINDLEVEL | 상대 EL 구하기 | Calculate Relative Elevation |
| ID_CS_Description_FINDLOWMAXLEVEL | 최저/최고점 찾기 | Find Max/Min Point |
| ID_CS_Description_FINDRADIUS | 반지름 찾기 | Find Radius |
| ID_CS_Description_FLATSHOT | 3D객체를 2D로 작성 | Create 3D objects in 2D |
| ID_CS_Description_FONTALT | 대체 글꼴 변경 | Substitute Font |
| ID_CS_Description_FRAME | 프레임 일괄적용 | Batch Apply Frame |
| ID_CS_Description_FREEZELAYON | 동결되어있는 레이어만 켜기 | Isolate Frozen Layers |
| ID_CS_Description_FREEZEOFFLAYON | 동결꺼져있는 레이어만 켜기 | Isolate Frozen or Off Layers |
| ID_CS_Description_FRONTBANKINGSLOPEMARK | 앞성토 그리기 | Draw Front Embankment/Fill |
| ID_CS_Description_FUNC_OBJSNAPTRACK | 객체 추적 | Seguimiento de referencia a objetos |
| ID_CS_Description_GEOMETRYAREA | 지적도 용도/면적 조회 | Query Parcel Use/Area |
| ID_CS_Description_GOTOURL | 하이퍼링크 열기 | Open Hyperlink |
| ID_CS_Description_GRID(Toggle) | GRID(Toggle) | Grid Toggle |
| ID_CS_Description_GRIDCOLORMAJOR | 그리드 색상(주 그리드) | Grid Major Line Color |
| ID_CS_Description_GRIDCOLORMINOR | 그리드 색상(보조 그리드) | Grid Minor Line Color |
| ID_CS_Description_GRIDDISPLAY | 그리드 범위(공간 전체, 한계 영역만 표시) | Grid Display Limit |
| ID_CS_Description_GRIDMAJOR | 그리드 간격(주 그리드) | Grid Major Line Spacing |
| ID_CS_Description_GRIDSTYLE | 그리드 형식 | Grid Style |
| ID_CS_Description_GRIDUNIT | 그리드 간격(보조 그리드) | Grid Spacing |
| ID_CS_Description_GRIPCOLOR | 그립 색상(정점 그립) | Grip Color |
| ID_CS_Description_GRIPHOT | 그립 색상(선택된 그립) | Grip Color |
| ID_CS_Description_GRIPOBJLIMIT | 그립표시 최대 개수 | Grip Object Limit |
| ID_CS_Description_GRIPS | 그립 표시 | Grip indication |
| ID_CS_Description_GRIPS(Toggle) | GRIPS(Toggle) | Grips Toggle |
| ID_CS_Description_GRIPSIZE | 그립 크기 | Grip Size |
| ID_CS_Description_GROUNDLEVEL | 종단 지반선 생성 | Create Profile Ground Line |
| ID_CS_Description_GROUP | 그룹 만들기 | Create Group |
| ID_CS_Description_GROUPDISPLAYMODE | 경계 상자 표시 | Group Boundary |
| ID_CS_Description_GROUPEDIT | 그룹 편집 | Edit Group |
| ID_CS_Description_HATCH | 해치넣기(패턴, 솔리드, 그라데이션) | Hatch |
| ID_CS_Description_HATCHAREA | 해치패턴별 면적 조회 | Query Hatch Area by Pattern |
| ID_CS_Description_HATCHCONTOURS | 해치용 현황작업 | Prepare Boundary for Hatch |
| ID_CS_Description_HATCHEDIT | 해치특성 편집 | Edit Hatch |
| ID_CS_Description_HATCHGENERATEBOUNDARY | 해치 경계 재작성 | Redefine Hatch Boundary |
| ID_CS_Description_HATCHSETBOUNDARY | 해치 경계 재지정 | Recreate Hatch Boundary |
| ID_CS_Description_HATCHSETORIGIN | 해치패턴의 원점 변경 | Set Hatch Origin |
| ID_CS_Description_HATCHTOBACK | 해치를 맨뒤로 | Send Hatch to Back |
| ID_CS_Description_HELIX | 나선 스프링 | Helix |
| ID_CS_Description_HIDEOBJECTS | 선택객체 숨기기 | Hide Objects |
| ID_CS_Description_HPINHERIT | 원점 상속 여부 | Whether to inherit origin or not |
| ID_CS_Description_HYPERLINK | 하이퍼링크 걸기 | Insert Hyperlink |
| ID_CS_Description_HYPERLINKOPTIONS | 링크정보 표시여부 | Show Hyperlink Info |
| ID_CS_Description_ICOCOPY | 다중 간격으로 여러번 객체 복사 | Multiple Offset Copy |
| ID_CS_Description_ID | 선택점 좌표 조회 | Query Point Coordinates |
| ID_CS_Description_IMAGECLIP | 이미지 투명도 적용 | Not info. |
| ID_CS_Description_IMAGEFRAME | 이미지 프레임 | Image Frame |
| ID_CS_Description_IMAGEQUALITY | 이미지 품질 조정 | Image Quality |
| ID_CS_Description_IMPORTCOORDINATES | 엑셀 좌표 가져오기 | Import Coordinates from Excel |
| ID_CS_Description_IMPRINT | 솔리드 면에 2D 형상 각인 | Imprint 2D shapes on solid surfaces |
| ID_CS_Description_INCREMENTMODIFY | 연속 변경 | Continuous Change / Modify |
| ID_CS_Description_INOFFSET | 다중 간격으로 여러번 간격 띄우기 | Multiple Offsets |
| ID_CS_Description_INQUIRECOLOR | 색상 조회 | Query Color |
| ID_CS_Description_INSBASE | 파일 삽입기준점 지정 | Set Insertion Base Point |
| ID_CS_Description_INSERT | 이전에 그린 블록 엔터티의 사본을 삽입하거나 다른 도면을 블록으로 현재 도면에 삽입합니다. | INSERT |
| ID_CS_Description_INSERTBLOCKATPOINT | 정점/교차점에 입력 | Insert a Block at a Vertex/Intersection |
| ID_CS_Description_INSERTOBJ | OLE 객체 삽입 | Insert OLE Object |
| ID_CS_Description_INSUNITS | 기준단위 | INSERT UNITS |
| ID_CS_Description_INTERPOLATION | 등고선 보간 | Contour interpolation |
| ID_CS_Description_INTERSECT | 교집합 | Retain Shared Volume/Area |
| ID_CS_Description_INTREBAR | 교차점에 점철근 | Place Rebar Section Symbols at Intersection |
| ID_CS_Description_ISAVEBAK | 백업파일(GBK 파일) 생성 | Create Backup File |
| ID_CS_Description_ISOLATEOBJECTS | 선택객체 제외하고 숨기기 | Isolate Objects |
| ID_CS_Description_ISOPLANE | 스냅 유형(좌측면, 우측면, 평면) | Snap Type (Left/Right/Plan) |
| ID_CS_Description_JMP | 점프선 그리기 | Draw Jump/Break Line |
| ID_CS_Description_JOIN | 연결하기 | Join |
| ID_CS_Description_JUSTIFYTEXT | 기준점 변경 | Change Base Point |
| ID_CS_Description_LAYCUR | 선택객체레이어를 현재 레이어로 변경 | Change to Current Layer |
| ID_CS_Description_LAYDEL | 선택객체의 레이어 삭제 | Delete Layer |
| ID_CS_Description_LAYER | 레이어 관리자 | Layer Manager |
| ID_CS_Description_LAYERLISTMERGE | 레이어 리스트에서 선택하여 병합 | Merge Layers by List |
| ID_CS_Description_LAYERP | 직전 레이어 상태로 돌아가기 | Restore Previous Layer State |
| ID_CS_Description_LAYERSTATE | 레이어층 세트 관리 | Layer States Manager |
| ID_CS_Description_LAYFRZ | 선택 레이어 동결 | Freeze Layer |
| ID_CS_Description_LAYISO | 선택 객체 레이어만 분리하여 켜기 | Isolate Layer |
| ID_CS_Description_LAYLCK | 선택객체 레이어 잠금 | Lock Layer |
| ID_CS_Description_LAYLOCKFADECTL | 잠금레이어 페이드 | Locked Layer Fade |
| ID_CS_Description_LAYMCH | 선택객체의 레이어로 변경 | Match Layer |
| ID_CS_Description_LAYMCUR | 선택객체 레이어를 현재 레이어로 저장 | Make Object's Layer Current |
| ID_CS_Description_LAYMRG | 다른 레이어로 병합 | Merge Layers |
| ID_CS_Description_LAYOFF | 선택 레이어 끄기 | Turn Off Selected Layers |
| ID_CS_Description_LAYON | 모든 레이어 켜기 | Turn On All Layers |
| ID_CS_Description_LAYOUT | 새 도면공간 만들기 | New Layout |
| ID_CS_Description_LAYOUTCREATEVIEWPORT | 뷰포트 자동생성 | Create Viewports |
| ID_CS_Description_LAYTHW | 모든 레이어 동결해제 | Thaw All Layers |
| ID_CS_Description_LAYULK | 레이어 잠금 해제 | Unlock Layer |
| ID_CS_Description_LAYUNISO | 분리 직전 상태로 복원 | Unisolate Layer |
| ID_CS_Description_LAYVPI | 선택객체의 레이어 다른 뷰포트에서 동결 | VP Freeze Layer |
| ID_CS_Description_LBTLINE | 두선 사이 등분선 그리기 | Draw Bisecting Line |
| ID_CS_Description_LEANCONCRETE | 버림 콘크리트 | Blinding Concrete |
| ID_CS_Description_LENGTHEN | 선,호 길이변경 | Lengthen |
| ID_CS_Description_LINE | 선 | Line |
| ID_CS_Description_LINEARREBAR | 단철근에 점철근 | Place Rebar Section Symbols Along Bar |
| ID_CS_Description_LINETYPE | 선 스타일 작성 | Linetype Creation/Management |
| ID_CS_Description_LIST | 객체 특성 조회 | List / Properties |
| ID_CS_Description_LIVESECTION | 단면 보기 활성화 | Activate section view |
| ID_CS_Description_LOFT | 연결하여 솔리드로 작성 | Connect to create a solid |
| ID_CS_Description_LTSCALE | 선스케일 축척비율(선패턴의 조밀함) | Linetype Scale |
| ID_CS_Description_LUNITS | 길이 단위 | Linear Units |
| ID_CS_Description_LUPREC | 길이 정밀도 | Linear Precision |
| ID_CS_Description_LWDISPLAY(Toggle) | 선가중치의 표시 여부 | Display Lineweight |
| ID_CS_Description_MAKEBEAMMARK | 분해된 철근마킹 객체를 마킹 블록으로 만들기 | Recreate Mark Block from Elements |
| ID_CS_Description_MAKEVP | 모형 경계로 뷰포트 만들기 | Create Viewport by Dialog Box |
| ID_CS_Description_MAPIMPORT | SHP파일 삽입하기 | Import SHP File |
| ID_CS_Description_MARK | 철근 마킹 넣기 | Rebar Marking |
| ID_CS_Description_MARKCORNER | 갈매기차선 | Chevron Marking |
| ID_CS_Description_MARKELEVATION | EL 표시하기 | Display Elevation |
| ID_CS_Description_MARKINGCHECK | 철근번호 및 직경 체크 | Check Rebar Number/Diameter |
| ID_CS_Description_MARKINGELEVATION | 등고선 EL 표기 | Label Contour Elevation |
| ID_CS_Description_MARKSK | 철근번호로 마킹블록 찾기 | Find Rebar Mark By Number |
| ID_CS_Description_MARKSL | 철근인출선 선택 이동 | Move Rebar Leader |
| ID_CS_Description_MARKSLOPETEXT | 경사 표기 | Indicate Slope / Slope Annotation |
| ID_CS_Description_MASSPROP | 물성치 조회 | Mass Properties |
| ID_CS_Description_MATCHPROP | 특성 일치 | Match Properties |
| ID_CS_Description_MAX | 최대/최소값 | Max/Min Value |
| ID_CS_Description_MBUTTONPAN | 휠 클릭 (화면 초점 이동, 객체스냅) | Wheel Click Action (Pan/OSNAP) |
| ID_CS_Description_MDLA | 지정레이어 일괄 삭제 | Batch Delete Layers |
| ID_CS_Description_MDTHORIZONTALLY | 문자 좌,우 이동 | Relocate Horizontally |
| ID_CS_Description_MDTOUTSIDE | 문자 외각 이동 | Relocate Text Outside |
| ID_CS_Description_MDTVERTICALLY | 문자 위,아래 이동 | Relocate Text Above/Below Dim Line |
| ID_CS_Description_MEASURE | 지정간격으로 객체 분할하기 | Measure |
| ID_CS_Description_MEASUREGEOM | 거리/반지름/각도/면적/체적 조회 | Measure Geometry |
| ID_CS_Description_MESH | 폴리곤 메쉬 | Polygon Mesh |
| ID_CS_Description_MESHBOX | 상자 메쉬 | Box Mesh |
| ID_CS_Description_MESHCAP | 구멍 닫기 | close the hole |
| ID_CS_Description_MESHCOLLAPSE | 면 또는 모서리 축소 | Shrink a face or edge |
| ID_CS_Description_MESHCONE | 콘 메쉬 | Mesh Cone |
| ID_CS_Description_MESHCREASE | 각진 부분 추가 | Add angled parts |
| ID_CS_Description_MESHCYLINDER | 원통 메쉬 | Mesh Cylinder |
| ID_CS_Description_MESHDISH | 접시 메쉬 | Mesh Dish |
| ID_CS_Description_MESHDOME | 돔메쉬 | Mesh Dome |
| ID_CS_Description_MESHEXTRUDE | 메쉬 면 돌출 | Mesh Face Extrusion |
| ID_CS_Description_MESHMERGE | 메쉬 면 병합 | Merge Mesh Faces |
| ID_CS_Description_MESHOPTIONS | 메쉬 다듬기 옵션 | Mesh Refinement Options |
| ID_CS_Description_MESHPRIMITIVEOPTIONS | 메쉬 기본체 옵션 | Mesh primitive options |
| ID_CS_Description_MESHPYRAMID | 피라미드 메쉬 | pyramid mesh |
| ID_CS_Description_MESHREFINE | 메쉬 정령 | mesh spirit |
| ID_CS_Description_MESHSMOOTHLESS | 덜 부드럽게 하기 | make it less smooth |
| ID_CS_Description_MESHSMOOTHMORE | 더 부드럽게 하기 | make it softer |
| ID_CS_Description_MESHSPHERE | 구 메쉬 | Mesh Sphere |
| ID_CS_Description_MESHSPIN | 삼각면 회전 | triangle plane rotation |
| ID_CS_Description_MESHSPLIT | 메쉬 면 분할 | Split mesh faces |
| ID_CS_Description_MESHTORUS | 도넛 메쉬 | Mesh Donut |
| ID_CS_Description_MESHUNCREASE | 각진 부분 제거 | Remove angled parts |
| ID_CS_Description_MESHWEDGE | 쐐기 메쉬 | Mesh Wedge |
| ID_CS_Description_MINSERT | 배열로 불러오기 | Import as Group Array |
| ID_CS_Description_MIRROR | 대칭 | Moves or copies the reflected image of selected entities about a line. |
| ID_CS_Description_MIRROR3D | 3D 대칭 | Draws a reflected image of selected entities about a plane. |
| ID_CS_Description_MJOIN | 선 추가해 연결하기 | Add lines to connect |
| ID_CS_Description_MLAY | 선택 객체를 선택된 TEXT 내용으로 레이어 변경 | Make Layer from Text Content |
| ID_CS_Description_MLEADER | 지시선 넣기 | Create Multileader |
| ID_CS_Description_MLEADERALIGN | 지시선 정렬 | Align Multileaders |
| ID_CS_Description_MLEADERCOLLECT | 지시선 합치기 | Collect Multileaders |
| ID_CS_Description_MLEADEREDIT | 지시선 추가/삭제 | Edit Leader Line |
| ID_CS_Description_-MLEADEREDIT | 지시선 추가/삭제 | Adds or removes leader lines to or from existing multileaders. |
| ID_CS_Description_MLEADERSTYLE | 지시선 스타일 작성/편집 | Leader Style Admin |
| ID_CS_Description_MLEDIT | 여러줄 형상 편집 | Edit multiline geometry |
| ID_CS_Description_MLINE | 여러줄 | Draws multiple parallel lines consisting of linear segments connected together. The end of the current segment is the start of the next segment. Ends of segments are the vertices of the multiline. |
| ID_CS_Description_MMARK | 다발철근 표기 | Bundle Rebar Tag |
| ID_CS_Description_MODEL | 도면공간에서 모형공간으로 전환 | Go to Model Space |
| ID_CS_Description_MOLAYPROP | 선택객체 레이어 특성 변경 | Batch Change Layer Properties |
| ID_CS_Description_MOVE | 이동 | Moves selected entities to another location in the same drawing. |
| ID_CS_Description_MOVEENTNEWLAY | 선택객체를 다른 레이어로 변경 | Move Objects to New Layer |
| ID_CS_Description_MPERPENDICULAR | 지정 거리마다 수직선 그리기 | Draw a vertical line at a specified distance |
| ID_CS_Description_MREDO | 다중 명령 복구 | Multi-command recovery |
| ID_CS_Description_MSOLESCALE | 삽입시 축척 | Resize OLE objects |
| ID_CS_Description_MSPACE | 도면공간에서 뷰포트창의 모형공간으로 들어가기 | Switch to Model Space |
| ID_CS_Description_MTEDIT | 여러줄 문자 변경 | Create multiline text entities. |
| ID_CS_Description_MTEXT | 여러줄 문자쓰기 | Create multiline text entities. |
| ID_CS_Description_MTS | 문자 스타일 병합 | Merge character styles |
| ID_CS_Description_MULTIINSERTDWG | 다중 도면 삽입 | Insert Multiple Drawings |
| ID_CS_Description_MULTIPLEDIM | 다중 치수 입력 | Aligned Dims at Multiple Points |
| ID_CS_Description_MVIEW | 단일 뷰포트 작성 | Create Layout Viewport |
| ID_CS_Description_MYOSNAP | 객체 스냅 즐겨찾기 | Object snap favorite. |
| ID_CS_Description_NCOPY | 블록 내 객체 복사 | Copy Objects in Block |
| ID_CS_Description_NEW | 새로 만들기 | Starts the New Drawing Wizard, which leads you through the process of either creating a new drawing or using a template with predefined settings. Using a template is a good way to establish and standardize drawings with the settings you use most often, such as units of measure, layer names, dimension styles, special aliases, and so on. |
| ID_CS_Description_NonAlias | Alias 없음 | NonAlias. |
| ID_CS_Description_NonShortcut | Shortcut 없음 | NonShortcut. |
| ID_CS_Description_OBJECTISOLATIONMODE | 숨기기 저장여부 | Keep Isolation Mode |
| ID_CS_Description_OBJECTSCALE | 축척 추가 및 삭제 | Assigns or removes annotation scales to one or more entities. Annotation scaling allows you to control certain entities so their size will consistently display when a drawing is displayed or printed. |
| ID_CS_Description_OFFLAYON | 꺼져있는 레이어만 켜기 | Isolate Off Layers |
| ID_CS_Description_OFFSET | 간격 띄우기 | Create a parallel, offset copy of curves and lines. |
| ID_CS_Description_OFFSETEDGE | 모서리 간격 띄워 단면 만들기 | Create a cross section with edges spaced apart |
| ID_CS_Description_OFFSETGAPTYPE | 간격 띄우기 시 모서리 채움방식 | Corner Handling Method |
| ID_CS_Description_OFFSETTOLAYER | 레이어로 Offset | Offset by layer |
| ID_CS_Description_OLEFRAME | OLE 프레임 | OLE Frame |
| ID_CS_Description_OLEHIDE | 표시 및 출력 | OLE Display Options |
| ID_CS_Description_OLELINKS | OLE 링크 변경 | Edit OLE Link Path |
| ID_CS_Description_OLESCALE | OLE 객체 크기 조정 | Set OLE Scale |
| ID_CS_Description_OOPS | 지우기 복원 | Restores entities removed by the last erase or delete command. In addition, OOPS redraws entities that are erased when you create blocks. |
| ID_CS_Description_OPEN | 도면 열기 | Displays the Open Drawing dialog box so you can open an existing drawing. |
| ID_CS_Description_OPTIONS | 시스템 설정 | Displays the Options dialog box so you can specify the default settings (such as experience level, display colors, and search paths) that you want the program to use. |
| ID_CS_Description_ORTHO(Toggle) | 명령어 실행 중에 커서 이동을 수평 및 수직으로 제한 | Restrict Cursor Movement to Horizontal and Vertical While Command is Running |
| ID_CS_Description_OSMODE | 객체 스냅 선택 | Sets the running object snap mode. |
| ID_CS_Description_OSMODE(Toggle) | OSMODE(Toggle) | Sets the running object snap mode. |
| ID_CS_Description_OSNAPHATCH | 객체 스냅 유형 추가(해치) | Determines whether you can snap to hatch entities when entity snaps are turned on. When this system variable is set to zero |
| ID_CS_Description_OTPLINE | 폴리선으로 변환 | Change to Polyline |
| ID_CS_Description_OVERKILL | 중복객체 삭제 | Deletes or combines duplicate or overlapping entities in the drawing, reducing the drawing's file size and complclosesy. |
| ID_CS_Description_PAGESETUP | 도면공간 페이지 설정 | Page Setup Manager |
| ID_CS_Description_PAN | 화면 초점 이동 | Pan Mode |
| ID_CS_Description_PASTEASHYPERLINK | 복사된 파일 링크 걸기 | Create a Hyperlink to a Copied File |
| ID_CS_Description_PASTEBLOCK | 블록으로 붙여넣기 | Paste as Block |
| ID_CS_Description_PASTECLIP | 붙여넣기 | Paste Objects from Clipboard |
| ID_CS_Description_PASTEORIG | 원좌표로 붙여넣기 | Paste to Original Coordinates |
| ID_CS_Description_PASTESPEC | 선택한 형식으로 붙여넣기 | Paste Clipboard Content with Specific Format |
| ID_CS_Description_PDFFRAME | PDF 일괄적용 | PDF frame |
| ID_CS_Description_PDFOSNAP | 객체 스냅 유형 추가(PDF) | Determines whether entity snapping is turned on or off for .pdf files that are attached to drawings. |
| ID_CS_Description_PDMODE | 점 객체 스타일 변경 | Controls the appearance of the point that displays when you activate the POINT command. |
| ID_CS_Description_PDSIZE | 점 객체 스타일 크기 | Controls the point display size. The default value (0) specifies a point size 5% of the screen size. A value greater than 0 specifies the absolute size, and a value less than 0 specifies a percentage size. |
| ID_CS_Description_PEDIT | 폴리선 변환/편집 | Edits a two-dimensional polyline, a three-dimensional polyline, or a polygon mesh. |
| ID_CS_Description_PELLIPSE | 타원/폴리선 | Controls whether the entity drawn with the ELLIPSE command is a true ellipse or a polyline representation of that ellipse. The default value of 0 draws a true ellipse. Changing the value to 1 creates an ellipse made up of polylines. |
| ID_CS_Description_PERPENDICULARLINE | 수직선 그리기 | Drawing a vertical line |
| ID_CS_Description_PFACE | 폴리면 메쉬 | Polyface Mesh |
| ID_CS_Description_PICKBOX | PICK박스 크기 | Specifies the target height for entity selection in pixels. |
| ID_CS_Description_PICKSTYLE | 그룹 선택 방식 | Group Select Option |
| ID_CS_Description_PIERREBAR | 원기둥 단면 점철근 | Place Rebar Section Symbols In Pier Section |
| ID_CS_Description_PIPE | 횡배수관 | horizontal drain pipe |
| ID_CS_Description_PLAN | UCS 좌표 변경후 직교뷰로 전환 | Plan View |
| ID_CS_Description_PLANESURF | 평면 표면 작성 | Create a Planar Surface |
| ID_CS_Description_PLINE | 폴리선 작성 | Draws two-dimensional polylines (connected line and arc segments) with optional width and taper. |
| ID_CS_Description_PLINECONVERTMODE | 폴리선으로 변경시 선 유형 | Object Type to Convert to a Polyline |
| ID_CS_Description_PLINEGEN | 폴리선 선꼴 적용 방법 | Determines whether the linetype used around the vertices of a polyline are continuous or dashed. The default value (0) sets the linetype around the vertex to a dash. Setting the value to 1 changes the linetype to a continuous pattern around the vertex of the polyline. |
| ID_CS_Description_PLOT | 인쇄 | Displays the Print dialog box so you can print the current drawing. You can print your drawing on any Windows-compatible printer or plotter. |
| ID_CS_Description_PLOTLAYOFF | 선택 레이어 인쇄끄기 | Disable Selected Layer Plotting |
| ID_CS_Description_PLOTLAYON | 선택 레이어 인쇄켜기 | Enable Selected Layer Plotting |
| ID_CS_Description_PMARK | 점철근 표기 | Rebar Tag |
| ID_CS_Description_PMTHIST | 문자 윈도우 | Character Window |
| ID_CS_Description_POINT | 점 그리기 | Draws single point entities. |
| ID_CS_Description_POINTCLOUDCLIPFRAME | 점 구름 자르기된 블록 프레임 | Point Cloud Clip Frame |
| ID_CS_Description_POINTTOTEXT | 표고점으로 문자 생성 | Create text from elevation points |
| ID_CS_Description_POLARADDANG | 각도 추가(입력 각도만 찾아 표시) | Sets custom polar tracking angles. You can define up to 10 custom polar tracking angles, with 25 characters each. Separate multiple polar tracking angles with a semicolon. When using fractions of a degree, make sure AUPREC is set high enough so the fraction can be recognized. |
| ID_CS_Description_POLARANG | 증분 각도(입력값만큼 증분하여 표시) | Specifies the angle used for polar tracking. |
| ID_CS_Description_POLYDIM | 폴리선 치수선 넣기 | Insert Dim on Polyline |
| ID_CS_Description_POLYGON | 다각형 | Draws polygons with a specified number of sides. A polygon is created from a polyline entity. The default width of the polygon is specified with the PLINEWID system variable, but you can change the width when you draw a polygon. |
| ID_CS_Description_POLYIMAGECLIP | 폴리선으로 자르기 | Clip Image to a Polyline |
| ID_CS_Description_POLYSOLID | 폴리 솔리드 | Poly Solid |
| ID_CS_Description_PREFABRICATEDBAR | 조립철근 | Assembled Rebar |
| ID_CS_Description_PRESSPULL | 눌러 당기기 | push pull |
| ID_CS_Description_PROJECTGEOMETRY | 형상 투영 | shape projection |
| ID_CS_Description_PROPERTIES | 객체 특성 조회/수정 | Displays the Properties pane, in which you can modify many of the properties of one or more entities. |
| ID_CS_Description_PROXYGRAPHICS | 저장 | Not implemented. Required for .dwg file compatibility only. |
| ID_CS_Description_PROXYNOTICE | 프록시 객체 생성 알림 및 정보 표시 | Display a notification message when you create a proxy. Proxies are created when you open a drawing that contains custom objects created in an application that is not provided. The proxy is also created when you invoke a command that unloads the parent application of a user object. |
| ID_CS_Description_PROXYSHOW | 화면 표시 | Controls the display of proxy entities. |
| ID_CS_Description_PSLTSCALE | 뷰포트 배율에 맞게 선스케일 조정 | Scale Linetypes By Viewport Scale |
| ID_CS_Description_PSPACE | 뷰포트창의 모형공간에서 도면공간으로 나오기 | Switch to Paper Space |
| ID_CS_Description_PSPACEPCOLOR | 경계 용지 색상 | Determines the bounded paper color for paper space. |
| ID_CS_Description_PURGE | 미사용 항목 제거 | Cleans the drawing file of unused drawing elements. Use Purge to remove blocks, groups, layers, linetypes, print styles, shapes, text styles, multiline styles, dimension styles, or annotation scales that you have defined but are not using in the drawing. Purging can significantly reduce the drawing file size. |
| ID_CS_Description_PWCHANGE | 선 두께 일괄 변경 | Change line thickness in bulk |
| ID_CS_Description_PYRAMID | 피라미드 | Solid Pyramid |
| ID_CS_Description_QDIM | 연속 치수 한번에 넣기 | Linear Dims At Vertices |
| ID_CS_Description_QDIM2 | 교차 지점 치수 한번에 넣기 | Dims at Intersections |
| ID_CS_Description_QLIST | 선택된 객체의 길이/면적 조회 | Search length/area of ​​selected object |
| ID_CS_Description_QNEW | 새로 만들기(Quick) | Create a new drawing without prompting for a template. The new drawing is based on the default template, which is defined in the Tools > Options dialog box. |
| ID_CS_Description_QSAVE | 저장하기 | Displays the Save Drawing As dialog box so you can save the current drawing. You can save the drawing with the existing name, or you can rename it and save it with a different name. |
| ID_CS_Description_QSELECT | 특성/유형별 객체 선택 | Selects entities by type according to a specified value or range of values. |
| ID_CS_Description_QSELECT2 | 다각형 모양으로 객체 선택 | Select Object by Polygon Shape |
| ID_CS_Description_QTEXT | 화면상의 문자보기 방식 | Turns Quick Text on or off. When Quick Text is on, text is displayed as placeholder boxes, rather than characters or words. Use this command to speed processing when working with drawings that contain a lot of text. |
| ID_CS_Description_RAVG | 철근 평균길이 구하기 | Average Rebar Length |
| ID_CS_Description_RAY | 단방향 무한 선 | Draws an infinite line in one direction from or through a specified point. |
| ID_CS_Description_REBARDETAIL | 철근상세도 넣기 | Add Rebar Details |
| ID_CS_Description_REBAROFFSET | 철근 두께 표현 | Draw Rebar With Specified Thickness |
| ID_CS_Description_REBARTABLE | 철근재료표 만들기 | Create a Rebar Material Table |
| ID_CS_Description_REBLOCK | 블록 교체 | Block Replacement |
| ID_CS_Description_RECOVER | 복구(Recover) | Displays the Open Drawing dialog box so you can open a drawing that you suspect is damaged, for example, a drawing damaged during a power outage or system crash. The drawing file is restored as much as possible with its original contents. |
| ID_CS_Description_RECREBAR | 사각철근에 점철근 | Place Rebar Section Symbols In Rectangular Section |
| ID_CS_Description_RECTANGLE | 사각형 | Draws a rectangle. A rectangle is a polyline entity. |
| ID_CS_Description_REDO | 직전 작업 취소 복원 | Reverses an UNDO command. You must use the UNDO command before you can use the REDO command. |
| ID_CS_Description_REFCLOSE | 편집사항 닫기 | Close Ref Edit Mode |
| ID_CS_Description_REFEDIT | 외부블록 편집 | Edit Xref dwgs/Blocks |
| ID_CS_Description_REFPATHTYPE | 경로 유형 | Controls whether reference files are attached using full |
| ID_CS_Description_REFROTATE | 객체 참조 회전 | Rotate object reference |
| ID_CS_Description_REFSET | 객체 추가/제거 | Add/Remove Objects on Xref |
| ID_CS_Description_REGEN | 전체도면 재생성 | Regenerate View |
| ID_CS_Description_REGION | 영역으로 작성 | Write with area |
| ID_CS_Description_REINFORCINGBAR | 철근이음 | Rebar Joint |
| ID_CS_Description_RENAMELAY | 레이어명 일괄변경 | Rename Layers |
| ID_CS_Description_REOFFSET | 동일 간격으로 여러번 간격 띄우기 | Spacing multiple times at equal intervals |
| ID_CS_Description_RESCALE | 블록축척 재지정 | Override Block Scale |
| ID_CS_Description_RESCALEWITHDIM | 치수선과 함께 구조물 | Re-scale with Dimmension |
| ID_CS_Description_RESETDIMTEXT | 문자 제자리 이동 | Reset Dim Text |
| ID_CS_Description_RESFONT | 미설치 폰트 변경 및 AutoCAD R14 이전 버전에서 사용되던 조합형 한글을 현재 사용되는 완성형 한글로 변경 | Convert Fonts / Hangul Conversion |
| ID_CS_Description_RESTOREDIMVALUE | 측정값으로 변경 | Restore Dim Value |
| ID_CS_Description_REVCLOUD | 리비전 구름마크 표시 | Draws cloud shapes that mark areas of a drawing that require further attention. They are especially helpful when revising a drawing; add a revision cloud to each modified area so reviewers can find changes easily. Revision clouds are drawn as polylines. |
| ID_CS_Description_REVOLVE | 회전시켜 솔리드로 작성 | Revolve Object |
| ID_CS_Description_REVSURF | 축 회전 메쉬 | Revolved Surface |
| ID_CS_Description_REZELEV | 고도값 변경 | Change altitude value |
| ID_CS_Description_RHB | 해치영역 경계작성 | Creating hatch area boundaries |
| ID_CS_Description_ROTATE | 객체 회전 | Rotates existing entities around a specified point. |
| ID_CS_Description_ROTATE3D | 3D 객체 회전 | Rotates entities around a three-dimensional axis. The rotation angle is the difference between the starting and ending angles. |
| ID_CS_Description_ROUNDING | 횡단 깎기부 라운딩 | Cross cut rounding |
| ID_CS_Description_RTOTALLENGTH | 철근상세 합산길이 산출 | Calculate Total Rebar Length |
| ID_CS_Description_RULESURF | 직선보간표면 | Ruled Surface |
| ID_CS_Description_SAVEAS | 다른 이름으로 저장하기 | Displays the Save Drawing As dialog box so you can save the current drawing. You can save it with the existing name, or you can rename it and save it with a different name. |
| ID_CS_Description_SAVEFILE | 자동저장 파일 확장자 | Stores the extension for the auto-save file name. |
| ID_CS_Description_SAVEFILEPATH | 자동저장 파일 경로 | Stores the path used to locate auto-save files. |
| ID_CS_Description_SAVETIME | 자동저장 간격 | Allows you to set the time interval at which the program automatically saves your drawing. Any value greater than 0 specifies the time in minutes for automatic save to occur. A value of 0 turns off the automatic save feature. |
| ID_CS_Description_SCALE | 축척 조정하기 | Changes the scale of existing entities, either enlarging them or reducing them proportionately in x, y, and z directions. A scale factor greater than 1 enlarges the entities; a scale factor between 0 and 1 reduces them. |
| ID_CS_Description_SCALEDISTANCE | 축척이 적용된 거리 조회 | Distance query with scale applied |
| ID_CS_Description_SCALETEXT | 여러 문자 동시에 크기 변경 | Changes the scale of existing text entities, either enlarging them or reducing them. |
| ID_CS_Description_SECTION | 단면 작성 | Create Section |
| ID_CS_Description_SECTIONPLANE | 단면 객체 작성 | Create a section object |
| ID_CS_Description_SECTIONPLANEJOG | 단면 꺽기 및 각도 작성 | Create Section Breaks & Angles |
| ID_CS_Description_SECTIONPLANETOBLOCK | 단면을 블록으로 저장 | Save section as block |
| ID_CS_Description_SELECTIONAREA(Toggle) | SELECTIONAREA(Toggle) | Controls the display of effects for the selection. |
| ID_CS_Description_SELECTIONCYCLING(Toggle) | 여러 객체가 겹쳐있을 경우 원하는 객체만 구별하여 선택 | Controls the display of visual aids during selection cycling. |
| ID_CS_Description_SELECTIONPREVIEW | 선택 객체 미리보기(미리보기 없음, 명령 진행시, 항상) | Determines whether a preview displays when selecting entities. When turned on (set to 1 or greater), entities that would be selected if the user clicked the mouse are highlighted. |
| ID_CS_Description_SELECTSIMILAR | 선택한 객체의 특성과 동일한 객체 선택 | Searches for entities that match properties of other entities. The entities with properties that match are then added to the selection set. The selection set can be reused in other commands either through the pick-first selection or by selecting the previous selection. |
| ID_CS_Description_SELGRIPS | 선택된 도면 요소 | Displays the grips of selected entities. |
| ID_CS_Description_SEPARATIONLEADER | 지시선 문자 객체 분리 | Separate Text |
| ID_CS_Description_SEQTEDIT | 여러 문자내용 연속수정 | Continuously modifying multiple text contents |
| ID_CS_Description_SETBYLAYER | 임의 조정된 레이어 특성을 ByLayer로 변경 | Override Selected Objects to ByLayer |
| ID_CS_Description_SETBYLAYERMODE | 변경될 레이어 특성선택 | Properties to Change |
| ID_CS_Description_SETWIDTHBEAMMARK | 마킹 문자 폭 맞추기 | Adjust Mark Text Width |
| ID_CS_Description_SHEARINGBAR | 전단철근 | Draw Shear Rebar |
| ID_CS_Description_SHORTCUTMENU | 오른쪽 클릭 (작업 및 바로가기 메뉴 제어) | Controls right-click mouse actions and shortcut menus. |
| ID_CS_Description_SHOWGRIPMENUS | 그립 수행가능 명령 표시 | Show grip commands that can be performed |
| ID_CS_Description_SHOWHIST | 복합객체 작성 전 솔리드 원본객체 표시 | Display Original Objects |
| ID_CS_Description_SKETCH | 자유롭게 그리기 | Daw Feely |
| ID_CS_Description_SLICE | 솔리드 자르기 | solid cutting |
| ID_CS_Description_SLOPELINE | 경사선 그리기 | Draw Slanted Lines |
| ID_CS_Description_SLOPEMARK | 비탈면 그리기 | Drawing slope marks |
| ID_CS_Description_SMARK | 단일철근 표기 | Single Rebar Notation |
| ID_CS_Description_SNAP(Toggle) | SNAP(Toggle) | Restricts cursor movement to specified increments. |
| ID_CS_Description_SNAPCOLOR | 스냅 표식기 색상 | Determines the color of snap markers used for fly-over snapping and the rubber band used for extended grips. |
| ID_CS_Description_SNAPSIZE | 스냅 표식기 크기 | Controls the entity snap marker size in pixels. An entity snap marker is a temporary glyph that appears when using entity snapping and indicates the current snap location. |
| ID_CS_Description_SNAPSTYL | 스냅 스타일(표준(1), 등축(0)) | Sets the snap style for the active viewport to either standard (0) or isometric (1). |
| ID_CS_Description_SNAPSTYL(Toggle) | SNAPSTYL(Toggle) | Sets the snap style for the active viewport to either standard (0) or isometric (1). |
| ID_CS_Description_SNAPUNIT | 스냅 간격 | Sets the snap spacing in the x and y direction. |
| ID_CS_Description_SOLID | 솔리드 넣기 | Draws solid polygons. The FILLMODE system variable determines whether the solid is filled; if you do not want to draw filled solid entities, turn FILLMODE off. |
| ID_CS_Description_SOLIDCHECK | 솔리드확인 | Solid Check |
| ID_CS_Description_SOLIDEDIT | 면과 모서리 편집 | Edit faces and edges |
| ID_CS_Description_SOLIDHIST | 복합객체 작성 전 솔리드 원본객체 기록 | Record Original Object History |
| ID_CS_Description_SPELL | 철자 검사 | Checks the spelling of single-line text, multiline text, paragraph text, attributes, attribute definitions, and dimension text. |
| ID_CS_Description_SPHERE | 구 | Solid Sphere |
| ID_CS_Description_SPLINE | 스플라인 | Draws a free-form curve. To convert a polyline to a spline, use Polyline Edit. |
| ID_CS_Description_SPLINEDIT | 스플라인 변환/편집 | Edits a spline. |
| ID_CS_Description_SRBCOUNT | 전단철근 개수 구하기 | Calculate Shear Bar Qty |
| ID_CS_Description_STATION | 측점 생성 | Create Station |
| ID_CS_Description_STATIONTEXT | 선형 측점 조회 | Linear station lookup |
| ID_CS_Description_STRETCH | 객체 신축하기 | Moves a portion of a drawing while retaining connections to other parts of the drawing. You can stretch lines, polyline segments, rays, splines, arcs, and elliptical arcs. |
| ID_CS_Description_STYLE | 문자 스타일 작성 | Create or changes current text fonts (styles). You can also create named text styles by selecting combinations of font, mirroring, obliquing, and horizontal scaling. |
| ID_CS_Description_SUBTRACT | 차집합 | Subtract Overlapping Solids/Regions |
| ID_CS_Description_SUPERHATCH | 해치넣기(블록, 이미지) | Hatching (block, image) |
| ID_CS_Description_SURFACEASSOCIATIVITY | 표면 연관성 | Surface Associativity |
| ID_CS_Description_SURFACEMODELINGMODE | 표면유형 | Surface Types |
| ID_CS_Description_SURFBLEND | 표면 혼합 | surface mixing |
| ID_CS_Description_SURFEXTEND | 표면 연장 | surface extension |
| ID_CS_Description_SURFEXTRACTCURVE | 표면 등각선 추출 | Surface isoline extraction |
| ID_CS_Description_SURFFILLET | 표면 모깎기 | Surface fillet |
| ID_CS_Description_SURFNETWORK | 표면 네트워크 | surface network |
| ID_CS_Description_SURFOFFSET | 표면 간격 띄우기 | Surface Offset |
| ID_CS_Description_SURFPATCH | 표면 패치 | surface patch |
| ID_CS_Description_SURFSCULPT | 표면 조각 | surface sculpture |
| ID_CS_Description_SURFTAB1 | M방향 메쉬밀도 | M-Direction Mesh Density |
| ID_CS_Description_SURFTAB2 | N방향 메쉬밀도 | N-Direction Mesh Density |
| ID_CS_Description_SURFTRIM | 표면 자르기 | Cut Surface |
| ID_CS_Description_SURFTYPE | 표면 맞춤 | Surface Blending |
| ID_CS_Description_SURFU | M방향 표면/U등각선 밀도 | SurfU Parameter |
| ID_CS_Description_SURFUNTRIM | 표면 자르기 복구 | Surface Crop Recovery |
| ID_CS_Description_SURFV | N방향 표면/V등각선 밀도 | SurfV Parameter |
| ID_CS_Description_SWEEP | 경로따라 솔리드로 작성 | Create a solid along a path |
| ID_CS_Description_TABLE | 테이블 넣기 | Create an empty table object. |
| ID_CS_Description_TABLEDIT | 테이블 편집 | Modifies a table object. |
| ID_CS_Description_TABLEINDICATOR | 행과 열 셀번호 | Controls the display of row numbers and column letters when the In-Place Text Editor is open for editing a table cell. |
| ID_CS_Description_TABLESTYLE | 테이블 스타일 | Create, Modifies or Specifies Table Styles |
| ID_CS_Description_TABLETOOLBAR | 테이블 편집도구 | Controls the display of the Table toolbar. |
| ID_CS_Description_TABSURF | 경로곡선 메쉬 | Tabulated Surface |
| ID_CS_Description_TANGENTCIRCLE | 접원 그리기 | Drawing a tangent circle |
| ID_CS_Description_TANGENTLINE | 접선 그리기 | Drawing tangent lines |
| ID_CS_Description_TANGENTLINECIRCLE | 원의 접선 그리기 | Drawing tangents to circles |
| ID_CS_Description_TAPER | 도로 테이퍼 | Road taper |
| ID_CS_Description_TEXTANDPOINT | 문자 및 표고점 생성 | Create Text & EL Point |
| ID_CS_Description_TEXTBOX | 문자 테두리 생성 | Create a character border |
| ID_CS_Description_TEXTBTPOINT | 두점 사이에 문자 쓰기 | Write letters between two dots |
| ID_CS_Description_TEXTCOPY | 문자내용 복사 | Copy text content |
| ID_CS_Description_TEXTEDIT | 문자내용 변경 | Modifies selected text entities. |
| ID_CS_Description_TEXTFILL | 출력시 트루타입 글꼴 표시 | NOt implemented. Required for .dwg file compatibility only. |
| ID_CS_Description_TEXTINPOL | 도형 안에 문자 쓰기 | Write text inside a shape |
| ID_CS_Description_TEXTJOIN | 문자내용 합치기 | Combining text contents |
| ID_CS_Description_TEXTMATCHCOPY | 문자 대응 복사 | Copy the text content according to the text position. |
| ID_CS_Description_TEXTORDER | 오름,내림차순 정렬 | Sort in ascending, descending order |
| ID_CS_Description_TEXTREPLACE | 지정한 문자내용 수정 | Replace specified text content. |
| ID_CS_Description_TEXTROTATE | 기울기에 맞게 회전 | Rotate to match tilt |
| ID_CS_Description_TEXTSWAP | 문자내용 서로 바꾸기 | Swap text content |
| ID_CS_Description_TEXTTOCLIPBOARD | 문자를 클립보드로 복사 | Copy text to clipboard |
| ID_CS_Description_TEXTTOEXL | 선택문자 엑셀로 내보내기 | Export Selected Text to Excel |
| ID_CS_Description_TEXTTOPOINT | 문자로 표고점 생성 | Create elevation points with text |
| ID_CS_Description_THICKEN | 굵게 하기 | make it bold |
| ID_CS_Description_THPOINT | 천단위 표기 | Thousands notation |
| ID_CS_Description_TINCREMENT | 연속 숫자 증가 | sequential number increase |
| ID_CS_Description_TORUS | 도넛 | Solid Torus |
| ID_CS_Description_TRANSPARENCY | 이미지 자르기 | Turns transparency on or off for the selected image. When transparency is on for an image, entities located under the image are visible for images that support alpha transparency, that is, images that have at least one color that can be viewed as a transparent color. |
| ID_CS_Description_TRANSPARENCYDISPLAY(Toggle) | TRANSPARENCYDISPLAY(Toggle) | Controls the display of object transparency. |
| ID_CS_Description_TRIANGLENET | 삼각망 | Triangle |
| ID_CS_Description_TRIM | 경계로부터 잘라내기 | Erases the portions of selected entities that cross a specified boundary. You can trim lines and open two- and three-dimensional polylines, rays, arcs, and circles. Entities that you can use as the cutting entities are arcs, circles, lines, polylines, rays, infinite lines, and viewports in paper space. |
| ID_CS_Description_TRIMMODE | 모깎기/모따기 전 모서리 유지 | Set Trim Mode |
| ID_CS_Description_TSPACEFAC | 행 간격 | Controls the default multiline text line spacing factor. |
| ID_CS_Description_TSPACETYPE | 행간 유형 | Controls the default type of multiline text line spacing. |
| ID_CS_Description_TWOPOINTUCS | 두 점을 수평으로 하는 UCS 설정 | Set UCS by 2 Points |
| ID_CS_Description_TXTEXP | 문자 외곽선 추출 | Breaks multiline text and single-line text into polylines. |
| ID_CS_Description_U | 작업 취소 | Performs the same function as entering Undo 1. |
| ID_CS_Description_UCS | UCS 좌표 설정 | Set User Coordinate System |
| ID_CS_Description_UCS3P | 3점 선택하여 XY평면 설정 | Set UCS by 3 Points |
| ID_CS_Description_UCSAXISANG | X, Y 또는 Z 옵션에 사용되는 기본 회전 각도 | Rotation Angle |
| ID_CS_Description_UCSICON | UCS 아이콘 표시 | Turns the display of the UCS icon on or off, and controls where in the viewport the icon displays. |
| ID_CS_Description_UCSICON(Toggle) | UCS 아이콘 표시(Toggle) | Turns the display of the UCS icon on or off, and controls where in the viewport the icon displays. |
| ID_CS_Description_UCSW | 표준좌표계로 설정 | Set UCS to World |
| ID_CS_Description_UCSXYZ | X,Y,Z축을 기준으로 좌표 회전 | Set UCS by Axis |
| ID_CS_Description_ULAYERS | 언더레이 도면층 상태조정 | Turn On/Off Underlay Layers (pdf, dwf, dgn) |
| ID_CS_Description_UNDO | 작업 취소 | Reverses the effect of the most recent command. |
| ID_CS_Description_UNGROUP | 그룹 해제 | Ungroup |
| ID_CS_Description_UNION | 합집합 | Combine Overlapping Solids/Regions |
| ID_CS_Description_UNISOLATEOBJECTS | 숨긴객체 다시 표시 | Show hidden objects again |
| ID_CS_Description_UPDATEFIELD | 선택한 객체의 필드 업데이트 | Update Fields in Selected Objects |
| ID_CS_Description_VERTEXEDIT | 문자로 EL 수정 | Edit EL with letters |
| ID_CS_Description_VERTICALGRID | 종단 그리드 | longitudinal grid |
| ID_CS_Description_VIEW | 뷰 설정 저장 및 편집 | View Manager |
| ID_CS_Description_-VIEW | 뷰 설정 저장 및 편집 | Save and edit view settings |
| ID_CS_Description_VIEWALLENTITIES | 모든 객체 보이기 | View all entities. |
| ID_CS_Description_VIEWBASE | 기준뷰 작성 | Create Base View |
| ID_CS_Description_VIEWCOMPONENT | 뷰 구성요소 추가/삭제 | Add/delete view components |
| ID_CS_Description_VIEWCURRENT | 현재 뷰방향 선택 | Select View |
| ID_CS_Description_VIEWDETAIL | 상세뷰 작성 | Create detailed view |
| ID_CS_Description_VIEWDETAILSTYLE | 상세 스타일 관리 | Detailed style management |
| ID_CS_Description_VIEWEDIT | 도면뷰 작성 | Create a Drawing View |
| ID_CS_Description_VIEWPOINT | 관측점 사전 설정 | Preset Viewpoint |
| ID_CS_Description_VIEWPOINT2 | 관측점 사전 설정 | Viewpoint presets |
| ID_CS_Description_VIEWPROJ | 투영뷰 작성 | Create a Projection View |
| ID_CS_Description_VIEWSECTION | 단면뷰 작성 | Create a section view |
| ID_CS_Description_VIEWSECTIONSTYLE | 단면뷰 스타일 관리 | Section view style management |
| ID_CS_Description_VIEWSELECTIONCOLOR | 선택 색상 객체만 보이기 | View the selected entities. |
| ID_CS_Description_VIEWUPDATE | 뷰 업데이트 | View update |
| ID_CS_Description_VIEWUPDATEAUTO | 원본 모형 변경 시 자동업데이트 | Automatic Update on Source Change |
| ID_CS_Description_VISUALSTYLES | 비주얼스타일 작성/상세설정 | Create/Detailed Visual Style Settings |
| ID_CS_Description_VPCLIP | 뷰포트 경계 수정 | Viewport Clip |
| ID_CS_Description_VPCONTROL | 뷰방향 / 뷰스타일 컨트롤 표시 | Display View Control |
| ID_CS_Description_VPMAX | 뷰포트 화면 최대화 | Maximize Viewport |
| ID_CS_Description_VPMIN | 뷰포트 원래크기로 복원 | Restore Viewport |
| ID_CS_Description_VPORTS | 뷰포트 구성 및 뷰스타일 설정 | Create Viewport |
| ID_CS_Description_VPORTSJOIN | 뷰포트 합치기 | Merge Viewports |
| ID_CS_Description_VPS3D | 3D 레이아웃 뷰포트 생성 | Create a 3D layout viewport |
| ID_CS_Description_VSBACKGROUNDS | 비주얼스타일 배경 표시 | Display Visual Style Background |
| ID_CS_Description_VSCURRENT | 현재 뷰의 비주얼스타일 선택 | Set Visual Style |
| ID_CS_Description_VSSAVE | 현재뷰의 비주얼스타일 저장 | Save the visual style of the current view |
| ID_CS_Description_VTYPEDITCH | V형 측구 | V-shaped side port |
| ID_CS_Description_WBLOCK | 외부 파일로 만들기 | Save Block or Objects to DWG |
| ID_CS_Description_WCLOSEALL | 모두 닫기 | Closes all drawing windows. A prompt is displayed asking whether you want to save changes to the drawing. |
| ID_CS_Description_WEDGE | 쐐기 | wedge |
| ID_CS_Description_WINDOWAREACOLOR | 선택된 도면 요소 | Controls the color of transparent selections during window selection. |
| ID_CS_Description_WIPEOUT | 객체가리기 넣기 | Create wipeout entities and turns their frames on or off. |
| ID_CS_Description_WIPEOUTFRAME | 객체 가리기 프레임 | Wipeout Frame |
| ID_CS_Description_WRITELENGTH | 객체 길이 쓰기 | Write Object Length |
| ID_CS_Description_XCLIP | 블록 자르기 | Xref Clipping |
| ID_CS_Description_XCLIPFRAME | 자르기 된 블록 프레임 | Xref Clip Frame |
| ID_CS_Description_XDWGFADECTL | 외부블록 페이드 | Xref Fade Value |
| ID_CS_Description_XEDGES | 모서리 추출 | edge extraction |
| ID_CS_Description_XEDIT | 편집 허용 | In-Place Block Editing |
| ID_CS_Description_XFADECTL | 편집 중인 블록외 다른 객체의 페이드 값 | Fade Value For Non-Editing Objects |
| ID_CS_Description_XLINE | 양방향 무한 선 | Draws an infinite line in both directions from a specified starting point. |
| ID_CS_Description_XREF | 내용을 변경하지 않고 현재 도면에 외부 도면을 임시로 추가합니다. | Temporarily adds external drawings to a current drawing, without changing their content. |
| ID_CS_Description_XREFTYPE | 연결 방식 | Adjust the default reference type when attaching or nesting xrefs. |
| ID_CS_Description_XYBSCALE | X,Y 개별 축척 적용 | Apply individual X,Y scale |
| ID_CS_Description_XYPOINT | 선택점 좌표 쓰기 | Write selection point coordinates |
| ID_CS_Description_ZOOM | 화면 확대 · 축소 | Zoom In/Out |
| ID_CS_Description_ZOOMC | 중심점 | Zoom to Center |
| ID_CS_Description_ZOOME | 범위 확대 | Zoom Extents |
| ID_CS_Description_ZOOMFACTOR | 화면 확대축소량 | Controls the zoom factor when you roll the mouse wheel up or down. Higher numbers indicate more movement when you roll the mouse wheel. |
| ID_CS_Description_ZOOMO | 선택객체대 | Zoom Object |
| ID_CS_Description_ZOOMP | 이전 화면 상태 | Zoom Previous |
| ID_CS_Description_ZOOMS | 화면 배율 조정 | Zoom by Scale |
| ID_CS_Description_ZOOMWHEEL | 휠 스크롤 (위 확대 아래 축소, 위 축소 아래 확대) | Sets the zoom direction relative to the mouse wheel direction. |
| ID_CS_Tooltip_Advanced | 상세 설정화면을 엽니다. | Open the advanced setting window. |
| ID_CS_Tooltip_Spoid | 색상을 선택합니다. | Selects the color. |
| ID_CS_WindowTitle | 색상 | Color |
| ID_CSK_Alias | 별칭 | Alias |
| ID_CSK_Command | 명령어 | Command |
| ID_CSK_GROUP_All | 전체보기 | All |
| ID_CSK_GROUP_Block | 블록 | Block |
| ID_CSK_GROUP_Civil | 선형/횡단 | Civil |
| ID_CSK_GROUP_Dim | 치수/연산 | Dimension |
| ID_CSK_GROUP_Draw | 도형 | Geometry |
| ID_CSK_GROUP_Edit | 편집 | Edit |
| ID_CSK_GROUP_HomeMenu | 홈 메뉴 | Home Menu |
| ID_CSK_GROUP_Layer | 레이어 | Layer |
| ID_CSK_GROUP_Measure | 선택/조회 | Query / Selection |
| ID_CSK_GROUP_Modeling | 모델링 | Modeling |
| ID_CSK_GROUP_Modify | 수정 | Modify |
| ID_CSK_GROUP_Options | 디스플레이/마우스 | Display |
| ID_CSK_GROUP_Rebar | 구조/배근 | Structure |
| ID_CSK_GROUP_Text | 문자 | Text |
| ID_CSK_GROUP_View | 뷰 | View |
| ID_CSK_GROUP_Workspace | 보조기능 | All Supp |
| ID_CSK_Question_Reset | 명령어 별칭과 단축키를 초기 설정으로 복원하시겠습니까? | Do you want to restore command aliases and shortcuts to their initial settings? |
| ID_CSK_ResetButton | 초기화 | Reset |
| ID_CSK_Shortcut | 단축키 | Shortcut |
| ID_CSK_ShortcutSearch | 단축키 검색 | Shortcut Search |
| ID_CSK_Title | 단축키 및 별칭 설정창 | Shortcut & Alias Settings Window |
| ID_CSK_ToolTip_Reset | 명령어 별칭과 단축키를 초기 설정으로 복원합니다. | Restore command aliases and shortcuts to their initial settings. |
| ID_CT_AlreadyDragIconMessage | 다시 추가하고 싶은 경우 사용자 그룹을 추가하세요. | If want to add it again, add a custom group. |
| ID_CT_DragIconMessage | 하단 명령어탭에 드롭하시면 명령어가 추가됩니다. | Drop to the bottom command tab and the command is added. |
| ID_CV_TITLE | 클로소이드 그리기 | Draw Clothoid |
| ID_DIM_GroupName_01_01 | 치수 스타일 | Create |
| ID_DIM_GroupName_01_02 | 작성하기 | Dimension Style |
| ID_DIM_GroupName_02_01 | 반지름,지름 | Circle / Arc |
| ID_DIM_GroupName_02_02 | 치수 넣기 | Dimension |
| ID_DIM_GroupName_03_01 | 치수 | Continuation |
| ID_DIM_GroupName_03_02 | 연속으로 이어서 | Dimension |
| ID_DIM_GroupName_04_01 | 수평,수직,호,각도 | Insert |
| ID_DIM_GroupName_04_02 | 치수넣기 | Dimension |
| ID_DIM_GroupName_05_01 | 치수표식 | Insert |
| ID_DIM_GroupName_05_02 | 넣기 | Dim Marker |
| ID_DIM_GroupName_06_01 | 치수선 | Modify |
| ID_DIM_GroupName_06_02 | 변경하기 | Dim Line |
| ID_DIM_GroupName_07_01 | 치수문자위치 | Relocate |
| ID_DIM_GroupName_07_02 | 이동하기 | Dim Text |
| ID_DIM_GroupName_08_01 | 치수문자 | Modify |
| ID_DIM_GroupName_08_02 | 추가하거나 변경하기 | Dim Text |
| ID_DIM_GroupName_09_01 | 크기변화에 따라 | Dim |
| ID_DIM_GroupName_09_02 | 치수연동 하기 | Associativity |
| ID_DIM_GroupName_10_01 | 치수보조선 | Adjust |
| ID_DIM_GroupName_10_02 | 조정하기 | Extension Lines |
| ID_DIM_GroupName_11_01 | 치수 | Merge / Split |
| ID_DIM_GroupName_11_02 | 합치거나 분할하기 | Dimensions |
| ID_DIM_GroupName_12_01 | 지시선 | Multileaders |
| ID_DIM_RadioButton_CHDIMSCALE_01 | 새 스타일로 적용 | Apply New Style |
| ID_DIM_RadioButton_CHDIMSCALE_02 | 속성값에서 변경 | Change From Attribute Values |
| ID_DIM_RadioButton_DIMASSOC_01 | 연동치수 | Link |
| ID_DIM_RadioButton_DIMASSOC_02 | 비연동치수 | Unlink |
| ID_DIM_RadioButton_DIMASSOC_03 | 분해치수 | Exploded |
| ID_DIM_TextBlock_CHDIMSCALE | 변경유형 | Changes and Style Applications: |
| ID_DIM_TextBlock_CHTHOUSAND_01 | * 1000m 이상일 경우 1.000 미만일 경우에는 mm단위로 표기 | * Display as "1.000" for 1000m |
| ID_DIM_TextBlock_CHTHOUSAND_02 | * 실 측정값에 따라 측정 스케일 및 소수 자리수 조정으로 변경 | * Adjust scale and precision based on measurement |
| ID_DIM_TextBlock_CHTHOUSAND_03 | * 치수스타일의 단위가 십진, 윈도우 설정일 경우 변경 가능 | * Editable when dim unit is decimal or window settings |
| ID_DIM_TextBlock_DIM | * 대상의 크기를 치수 값 만큼 고정시킴 | Lock Object Size to Dimension Value |
| ID_DIM_TextBlock_DIMASSOC_01 | 연동치수: 대상의 크기변화에 치수 자동 변경 | * Associative : The dimension updates with geometry changes |
| ID_DIM_TextBlock_DIMASSOC_02 | 비연동치수: 대상의 크기변화에 치수 변경 안됨 | * Non-Associative : The dimension doesn't update |
| ID_DRAW_CommandButton_3DPOLY | 3D폴리선 | Create a 3D Polyline |
| ID_DRAW_CommandButton_Arc | 호 | Create an Arc |
| ID_DRAW_CommandButton_BOUNDARY | 경계 및 영역 작성 | Create a Boundary |
| ID_DRAW_CommandButton_CHLTYPE | 선택길이 만큼 선꼴 변경 | Change Linetype of Line by Length |
| ID_DRAW_CommandButton_CIRCLE | 원 | Create a Circle |
| ID_DRAW_CommandButton_CUTCSE | 단면 절단선 | Zig-Zag Break Line |
| ID_DRAW_CommandButton_CUTCYL | 원통 절단선 그리기 | Cylindrical Break Line |
| ID_DRAW_CommandButton_DELOBJ | 변환 후 원본 유지 여부 | Preserve Source Object Setting |
| ID_DRAW_CommandButton_DONUT | 도넛 | Create a Filled Circle or a Wide Ring |
| ID_DRAW_CommandButton_DRAWARROW | 선끝에 화살표 | Add Arrowhead |
| ID_DRAW_CommandButton_DRAWCURVEUSINGTANGENT | 두 접선으로 곡선 그리기 | Create a Curve with Two Tangents |
| ID_DRAW_CommandButton_ELLIPSE | 타원 | Create an Ellipse or an Elliptical Arc |
| ID_DRAW_CommandButton_HATCH | 해치 넣기 | Insert Hatch |
| ID_DRAW_CommandButton_Helix | 나선 스프링 | Create a 2D Spiral Or a 3D Spring |
| ID_DRAW_CommandButton_IMPORTCOORDINATES | 엑셀좌표 가져오기 | Import Excel Coordinates |
| ID_DRAW_CommandButton_JMP | 점프선 | Jump Line |
| ID_DRAW_CommandButton_LBTLINE | 두 선 사이 등분선 | Divide Space Between Lines |
| ID_DRAW_CommandButton_LINE | 선 그리기 | Create Straight Line Segment |
| ID_DRAW_CommandButton_LINETYPE | 선 스타일 작성 | Create and Modifies Linetypes |
| ID_DRAW_CommandButton_MLINE | 여러줄 그리기 | Create Multiple Parallel Lines |
| ID_DRAW_CommandButton_MPERPENDICULAR | 지정거리마다 수직선 | Vertical Line at Specified Distance |
| ID_DRAW_CommandButton_PLINE | 폴리선 | Create a 2D Polyline |
| ID_DRAW_CommandButton_Point | 점 그리기 | Draw Point |
| ID_DRAW_CommandButton_POLYGON | 다각형 | Create a Polygon |
| ID_DRAW_CommandButton_RAY | 단방향 무한 선 | Unidirectional Infinite Line |
| ID_DRAW_CommandButton_RECTANGLE | 사각형 | Create a Rectangle |
| ID_DRAW_CommandButton_REVCLOUD | 구름마크 그리기 | Draw Cloud Mark |
| ID_DRAW_CommandButton_RHB | 해치영역 경계 작성 | Create a Hatch Boundary |
| ID_DRAW_CommandButton_SKETCH | 자유롭게 그리기 | Freehand Drawing |
| ID_DRAW_CommandButton_Spline | 스플라인 | Create a Spline |
| ID_DRAW_CommandButton_SUPERHATCH | 해치 넣기 (블록, 이미지) | Custom Hatch from Block or Image |
| ID_DRAW_CommandButton_WIPEOUT | 객체 가리기 넣기 | Insert Object Masking |
| ID_DRAW_CommandButton_XLINE | 양방향 무한 선 | Bidirectional Infinite Line |
| ID_DRAW_GroupName_01_01 | 선스타일 | Line Style |
| ID_DRAW_GroupName_02_01 | 곡선 | Draw |
| ID_DRAW_GroupName_02_02 | 그리기 | Curve |
| ID_DRAW_GroupName_03_02 | 또는 | Break Lines |
| ID_DRAW_GroupName_03_03 | 화살표 | & |
| ID_DRAW_GroupName_03_04 | 넣기 | Arrows |
| ID_DRAW_GroupName_04_01 | 해치경계 | Create |
| ID_DRAW_GroupName_04_02 | 또는 | A Hatch Boundary/Area |
| ID_DRAW_GroupName_05_01 | 직선 | Draw |
| ID_DRAW_GroupName_05_02 | 그리기 | Line |
| ID_DRAW_GroupName_06_01 | 무한선 | Draw |
| ID_DRAW_GroupName_06_02 | 그리기 | Infinite Line |
| ID_DRAW_GroupName_07_01 | 도형 | Draw |
| ID_DRAW_GroupName_07_02 | 그리기 | Shapes |
| ID_DRAW_GroupName_08_01 | 폴리선 | Draw |
| ID_DRAW_GroupName_08_02 | 그리기 | Polyline |
| ID_DRAW_GroupName_09_01 | 해치(솔리드 및 패턴) | Hatch |
| ID_DRAW_GroupName_09_02 | 넣기 | (Solid / Pattern) |
| ID_DRAW_GroupName_10_01 | 점(Point) | Draw |
| ID_DRAW_GroupName_10_02 | 그리기 | Point |
| ID_DRAW_GroupName_11_01 | 등분선 | Insert |
| ID_DRAW_GroupName_11_02 | 넣기 | Division Line |
| ID_DRAW_GroupName_12_01 | 자유곡선 | Draw |
| ID_DRAW_GroupName_12_02 | 그리기 | Freeform Curve |
| ID_DRAW_GroupName_13_01 | 엑셀에서 가져와 | Draw |
| ID_DRAW_GroupName_13_02 | 그리기 | From EXCEL |
| ID_DRAW_RadioButton_DELOBJ_01 | 삭제 | Delete |
| ID_DRAW_RadioButton_DELOBJ_02 | 유지 | Keep |
| ID_DRAW_RadioButton_DELOBJ_03 | 경고메세지 | Warning Message |
| ID_DRAW_RadioButton_FILLMODE_01 | 채우기 | Fill |
| ID_DRAW_RadioButton_FILLMODE_02 | 채우지 않기 | Do Not Fill |
| ID_DRAW_RadioButton_HPINHERIT_01 | 현재원점 | Current Origin |
| ID_DRAW_RadioButton_HPINHERIT_02 | 원본해치원점 | Original Hatch Origin |
| ID_DRAW_RadioButton_PELLIPSE_01 | 타원 | Ellipse |
| ID_DRAW_RadioButton_PELLIPSE_02 | 폴리선 | Polyline |
| ID_DRAW_RadioButton_PLINEGEN_01 | 정점마다 적용 | Apply to Each Vertex |
| ID_DRAW_RadioButton_PLINEGEN_02 | 연속 적용 | Apply Continuously |
| ID_DRAW_TextBlock_DDPTYPE | 점 스타일 변경 | Change Point Style |
| ID_DRAW_TextBlock_FILLMODE | 채우기여부 (해치,솔리드, 굵은 폴리선) | Fill Option |
| ID_DRAW_TextBlock_HPINHERIT | 원점 상속 여부 | Inherit Origin |
| ID_DRAW_TextBlock_LTSCALE | 선스케일 축척비율 (선 패턴의 조밀함) | Set Linetype Scale |
| ID_DRAW_TextBlock_PELLIPSE | 타원/폴리선 | Ellipse Creation Type |
| ID_DRAW_TextBlock_PLINEGEN | 폴리선 선꼴 적용 방법 | Polyline Linetype Mode |
| ID_DRAW_TextBox_DDPTYPE | 크기 | Size |
| ID_DSAS_Advanced | 내 스타일 생성 및 수정하기 | Dimemsion Style Details |
| ID_DSAS_Apply | 적용 | Apply |
| ID_DSAS_Cancel | 취소 | Quit |
| ID_DSAS_Category_2ndDimUnitNotation | 2차치수단위 표기 | Alternate units |
| ID_DSAS_Category_2ndDimUnitNotation_After1stDimension | 1차치수 뒤 | After primary unit |
| ID_DSAS_Category_2ndDimUnitNotation_AlterUnits | 2차치수 | Alternate unit |
| ID_DSAS_Category_2ndDimUnitNotation_Below1stDimension | 1차치수 아래 | Below primary unit |
| ID_DSAS_Category_2ndDimUnitNotation_Explanation | 1차치수단위와 함께 추가 표기할 단위 설정 | * Display alternate units with primary units |
| ID_DSAS_Category_2ndDimUnitNotation_Footer | 꼬리말 | Suffix |
| ID_DSAS_Category_2ndDimUnitNotation_NotationPosition | 표기위치 | Text position |
| ID_DSAS_Category_2ndDimUnitNotation_Precision | 정밀도 | Alternate unit |
| ID_DSAS_Category_2ndDimUnitNotation_Preface | 머리말 | Prefix |
| ID_DSAS_Category_2ndDimUnitNotation_PrimUnits | 1차치수 | Primary unit |
| ID_DSAS_Category_ArcLengthSymbolDisplay | 호 길이 기호 표시 | Arc Length Symbol |
| ID_DSAS_Category_ArcLengthSymbolDisplay_DimFront | 치수 앞 | Precede |
| ID_DSAS_Category_ArcLengthSymbolDisplay_DimTop | 치수 위 | Above Text |
| ID_DSAS_Category_ArcLengthSymbolDisplay_None | 없음 | None |
| ID_DSAS_Category_ArrowHead | 화살촉 | Arrowheads |
| ID_DSAS_Category_ArrowHead_ArrowSize | 크 기 | Size |
| ID_DSAS_Category_ArrowHead_FirstArrow | 첫번째 | First |
| ID_DSAS_Category_ArrowHead_SecondArrow | 두번째 | Second |
| ID_DSAS_Category_AuxiliaryLineNarrow | 보조선 간격이 좁을때 형상 | Narrow Space Options |
| ID_DSAS_Category_AuxiliaryLineNarrow_Arrow | 화살표 | Arrow |
| ID_DSAS_Category_AuxiliaryLineNarrow_ExtensionLine_1 | 치수 | Dimension |
| ID_DSAS_Category_AuxiliaryLineNarrow_ExtensionLine_2 | 확장선 | Extension Line |
| ID_DSAS_Category_AuxiliaryLineNarrow_ExtensionLineDraw | 그리기 | Draw |
| ID_DSAS_Category_AuxiliaryLineNarrow_ExtensionLineNone | 없음 | None |
| ID_DSAS_Category_AuxiliaryLineNarrow_GoOutside | 외부로 이동 | Outside |
| ID_DSAS_Category_AuxiliaryLineNarrow_InsideDimLine | 치수선 내부 | Within Dimline |
| ID_DSAS_Category_AuxiliaryLineNarrow_None | 없음 | None |
| ID_DSAS_Category_AuxiliaryLineNarrow_Text | 문자 | Text |
| ID_DSAS_Category_CircleCenterMark | 원 중심 표시 | Center Marks |
| ID_DSAS_Category_CircleCenterMark_Length | 길이 A = | Length A = |
| ID_DSAS_Category_CircleCenterMark_Line | 선 | Line |
| ID_DSAS_Category_CircleCenterMark_Marker | 표식 | Mark |
| ID_DSAS_Category_CircleCenterMark_None | 없음 | None |
| ID_DSAS_Category_DimLineBreakHeight | 치수선 꺾기의 높이 | Jog Height |
| ID_DSAS_Category_DimLineBreakHeight_BreakRatio | 꺾기 비율 = | Jog Height Factor(F) = |
| ID_DSAS_Category_DimLineBreakHeight_Explanation1 | 치수 꺾기 높이(H) = | * Jog Height(H) = |
| ID_DSAS_Category_DimLineBreakHeight_Explanation2 | 문자높이(Th) X 비율(F) | Text Height(Th) x (F) |
| ID_DSAS_Category_DimUnitFraction | 치수단위 분수 형식 | Fraction Stacking Options |
| ID_DSAS_Category_DimUnitFraction_AsIn | 입력 그대로 | As in |
| ID_DSAS_Category_DimUnitFraction_Diagonal | 대각선 | Diagonal |
| ID_DSAS_Category_DimUnitFraction_Horizon | 수평 | Horizontal |
| ID_DSAS_Category_HideDimLine | 치수선·치수보조선 숨기기 | Suppress Lines |
| ID_DSAS_Category_HideDimLine_FirstDimExtensionLine | 첫번째 치수보조선 | Ext line 1 |
| ID_DSAS_Category_HideDimLine_FirstDimLine | 첫번째 치수선 | Dim line 1 |
| ID_DSAS_Category_HideDimLine_SecondDimExtensionLine | 두번째 치수보조선 | Ext line 2 |
| ID_DSAS_Category_HideDimLine_SecondDimLine | 두번째 치수선 | Dim line 2 |
| ID_DSAS_Category_Line | 선 | Line |
| ID_DSAS_Category_Line_LineColor | 색상 | Line Color |
| ID_DSAS_Category_Line_LineStyle | 선 스타일 | Line Style |
| ID_DSAS_Category_Line_LineWeight | 선가중치 | Line Weight |
| ID_DSAS_Category_Line_Shape | 형상 | Shape |
| ID_DSAS_Category_LineBreak | 선 끊기 | Line Break |
| ID_DSAS_Category_LineBreak_Explanation1 | 다른 객체와 교차하는 | * Set gap size for |
| ID_DSAS_Category_LineBreak_Explanation2 | 치수선의 끊기 크기 | crossing dimension. |
| ID_DSAS_Category_LineBreak_Size | 크기 C = | Gap size = |
| ID_DSAS_Category_PrimaryDimUnit | 1차치수단위 | Primary Units |
| ID_DSAS_Category_PrimaryDimUnit_AngleFormat | 각도 형식 | Angular unit format |
| ID_DSAS_Category_PrimaryDimUnit_AnglePrecision | 각도 정밀도 | Angle Precision |
| ID_DSAS_Category_PrimaryDimUnit_Comma | 쉼표 | Comma |
| ID_DSAS_Category_PrimaryDimUnit_DecimalSeparator | 소수 구분 | Decimal Separator |
| ID_DSAS_Category_PrimaryDimUnit_LengthFormat | 길이 형식 | Unit Format |
| ID_DSAS_Category_PrimaryDimUnit_LengthPrecision | 길이 정밀도 | Length Precision |
| ID_DSAS_Category_PrimaryDimUnit_Period | 마침표 | Period |
| ID_DSAS_Category_PrimaryDimUnit_RoundOff | 반올림 | Round Off |
| ID_DSAS_Category_PrimaryDimUnit_Space | 공백 | Space |
| ID_DSAS_Category_RadiusBreakAngle | 반지름 꺾기 각도 | Radius Dim Jog Angle |
| ID_DSAS_Category_RadiusBreakAngle_Angle | 각도 B = | Jog Angle = |
| ID_DSAS_Category_Shape | 형상 | Dim. Line |
| ID_DSAS_Category_Shape_AuxiliaryLineLength | 보조선 길이 | Extension Line Length |
| ID_DSAS_Category_Shape_DimLineExtensionLength | 치수선 연장길이 | Extend Beyond Ticks |
| ID_DSAS_Category_Shape_ExtrusionLength | 내민길이 | Over DimLines |
| ID_DSAS_Category_Shape_SeparationDistance | 이격거리 | Origin Offset |
| ID_DSAS_Category_Shape_SpacingBetweenDim | 치수간 간격 | Gap Between Dimlines |
| ID_DSAS_Category_SubUnitFooter | 보조단위 꼬리말 | Subunit Footer |
| ID_DSAS_Category_SubUnitScale | 보조단위 축척 | Subunit factor |
| ID_DSAS_Category_Text | 문자 | Text |
| ID_DSAS_Category_Text_Font | 글꼴 | Font |
| ID_DSAS_Category_Text_TextColor | 색상 | Text Color |
| ID_DSAS_Category_Text_TextHeight | 높이 | Text Height |
| ID_DSAS_Category_Text_TextStyle | 문자 스타일 | Text Style |
| ID_DSAS_Category_TextAlign | 문자정렬 | Text Alignment |
| ID_DSAS_Category_TextAlign_AlwaysHorizontal | 항상 수평 | Horizontal |
| ID_DSAS_Category_TextAlign_DirectionbyAngle | 각도별 방향 | Direction by Angle |
| ID_DSAS_Category_TextAlign_ParallelDimLines | 치수선 평행 | Aligned |
| ID_DSAS_Category_TextArrangement | 문자배치 | Text Placement |
| ID_DSAS_Category_TextArrangement_Back | 뒤 | Back |
| ID_DSAS_Category_TextArrangement_BackUp | 뒤(위) | Back(UP) |
| ID_DSAS_Category_TextArrangement_Bottom | 아래 | Bottom |
| ID_DSAS_Category_TextArrangement_Center | 중앙 | Center |
| ID_DSAS_Category_TextArrangement_Front | 앞 | Front |
| ID_DSAS_Category_TextArrangement_FrontUp | 앞(위) | Front(UP) |
| ID_DSAS_Category_TextArrangement_Horizontal | 수평 | Hor. |
| ID_DSAS_Category_TextArrangement_Mid | 가운데 | Mid |
| ID_DSAS_Category_TextArrangement_Outside | 외부 | Outside |
| ID_DSAS_Category_TextArrangement_TextSeparationDistance | 이격거리 | Text Offset |
| ID_DSAS_Category_TextArrangement_Top | 위 | Top |
| ID_DSAS_Category_TextArrangement_Vertical | 수직 | Ver. |
| ID_DSAS_Category_TextMove | 치수선 외부로 문자 이동시 | Text Outside Dim. Line |
| ID_DSAS_Category_TextMove_LeaderConnection | 지시선 연결 | Leader |
| ID_DSAS_Category_TextMove_TextOnly | 문자만 | Over |
| ID_DSAS_Category_TextMove_WithDimLine | 치수선 포함 | Beside |
| ID_DSAS_Category_TextPrefaceFooter | 문자 머리말 / 꼬리말 | Prefix/Suffix Settings |
| ID_DSAS_Category_TextPrefaceFooter_Footer | 꼬리말 E = | Suffix |
| ID_DSAS_Category_TextPrefaceFooter_Preface | 머리말 D = | Prefix |
| ID_DSAS_Category_TolerancesNotation | 공차표기 | Tolerances |
| ID_DSAS_Category_TolerancesNotation_2ndPrecision | 2차 공차정밀도 | Alternate |
| ID_DSAS_Category_TolerancesNotation_Deviation | 편차 | Deviation |
| ID_DSAS_Category_TolerancesNotation_Form | 형식 | Shape |
| ID_DSAS_Category_TolerancesNotation_Limit | 한계 | Limits |
| ID_DSAS_Category_TolerancesNotation_LowerLimit | 하한값 | Lower Value |
| ID_DSAS_Category_TolerancesNotation_None | 없음 | None |
| ID_DSAS_Category_TolerancesNotation_Position | 공차 위치 | Tolerance Placement |
| ID_DSAS_Category_TolerancesNotation_PositionBottom | 아래 | Bottom |
| ID_DSAS_Category_TolerancesNotation_PositionMid | 중간 | Middle |
| ID_DSAS_Category_TolerancesNotation_PositionTop | 위 | Top |
| ID_DSAS_Category_TolerancesNotation_Precision | 공차정밀도 | Tolerance |
| ID_DSAS_Category_TolerancesNotation_Standard | 기준 | Basic |
| ID_DSAS_Category_TolerancesNotation_Symmetry | 대칭 | Symmetrical |
| ID_DSAS_Category_TolerancesNotation_TextHeight | 공차문자높이 | Scaling for Height |
| ID_DSAS_Category_TolerancesNotation_UpperLimit | 상한값 | Upper Value |
| ID_DSAS_Category_ZeroHide | 0' 숨기기 | Zero Suppression |
| ID_DSAS_Category_ZeroHide_2ndTolerance | 2차 공차 | Alt Tol. |
| ID_DSAS_Category_ZeroHide_2ndUnit | 2차 단위 | Alt. Units |
| ID_DSAS_Category_ZeroHide_AfterDecimalPoint | 소수점 뒤 | Trailing |
| ID_DSAS_Category_ZeroHide_AngleDim | 각도치수 | Angular |
| ID_DSAS_Category_ZeroHide_BeforeDecimalPoint | 소수점 앞 | Leading |
| ID_DSAS_Category_ZeroHide_Form | 형식 | Form |
| ID_DSAS_Category_ZeroHide_LinearDim | 선형치수 | Linear |
| ID_DSAS_Category_ZeroHide_Tolerance | 공차 | Tolerance |
| ID_DSAS_DecimalPoint | 소수점 아래 | Precision |
| ID_DSAS_DimScaleType_All | 치수전체 | Overal DimScale |
| ID_DSAS_DimScaleType_Paper | 도면공간 | Layout Scale |
| ID_DSAS_DimStyle | 치수 스타일 | DimStyle |
| ID_DSAS_DimStyleName | 스타일 명 : | DimStyle Name : |
| ID_DSAS_Edit | 수정 | Edit |
| ID_DSAS_ERR_AlreadyExistStyleName | 이미 있는 스타일 이름입니다. 다른 스타일 이름을 입력해주세요. | The style name already exists. Please enter a different name. |
| ID_DSAS_ERR_CannotDeleteCurrentStyle | 현재로 설정된 스타일은 삭제할 수 없습니다. | The currently active style cannot be deleted. |
| ID_DSAS_ERR_CannotDeleteUsingStyle | 사용중인 스타일은 지울 수 없습니다. | Styles in use cannot be deleted. |
| ID_DSAS_ERR_NoStyleName | 스타일 이름이 비어있습니다. 스타일 이름을 입력해주세요. | The style name is empty. Please enter a style name. |
| ID_DSAS_MSG_StopStyleModify | 스타일 편집을 중단하시겠습니까? | Do you want to cancel style editing? |
| ID_DSAS_Shape | 형상 | Shape |
| ID_DSAS_ToolTip_BINDSUB_01 | 꺾기를 구성하는 각도의 두 정점 간의 거리에 의해 결정되는 꺾기 높이를 결정합니다. | Determine the jog height based on the distance between the two vertices forming the jog angle. |
| ID_DSAS_ToolTip_CIRCLECENTERSUB_01 | 중심 표식 또는 중심선을 작성하지 않습니다.  이 값은 DIMCEN 시스템 변수에 0으로 저장됩니다. | Do not create center marks or centerlines. (Stored as 0 in DIMCEN system variable.) |
| ID_DSAS_ToolTip_CIRCLECENTERSUB_02 | 중심 표식을 작성합니다.  중심 표식의 크기는 DIMCEN 시스템 변수에 양수 값으로 저장됩니다. | Create center marks.  The size of the center mark is stored as a positive value in the DIMCEN system variable. |
| ID_DSAS_ToolTip_CIRCLECENTERSUB_03 | 중심선을 작성합니다.  중심선의 크기는 DIMCEN 시스템 변수에 음수 값으로 저장됩니다. | Create centerlines. (The size of the centerline is stored as a negative value in the DIMCEN system variable. |
| ID_DSAS_ToolTip_CIRCLECENTERSUB_04 | 중심 표식/선의 크기를 표시 및 설정합니다.(DIMCEN 시스템 변수) | Display and set the size of center marks/centerlines. (DIMCEN system variable) |
| ID_DSAS_ToolTip_Dimalttd | 소수부 자릿수를 표시 및 설정합니다.(DIMALTTD 시스템 변수) | Display and set the number of decimal places for alternate units. (DIMALTTD system variable) |
| ID_DSAS_ToolTip_Dimarcsym_Above | 호 길이 기호를 치수 문자 위에 배치합니다.(DIMARCSYM 시스템 변수) | Place the arc length symbol above the dimension text. (DIMARCSYM system variable) |
| ID_DSAS_ToolTip_Dimarcsym_Before | 호 길이 기호를 치수 문자 앞에 배치합니다.(DIMARCSYM 시스템 변수) | Place the arc length symbol before the dimension text. (DIMARCSYM system variable) |
| ID_DSAS_ToolTip_Dimarcsym_Supress | 호 길이 기호 표시를 억제합니다.(DIMARCSYM 시스템 변수) | Suppress the arc length symbol display. (DIMARCSYM system variable) |
| ID_DSAS_ToolTip_DimFrac_Diagonal | 분수의 형식을 대각선으로 설정합니다.(DIMFRAC 시스템 변수) | Set the fraction format to diagonal. (DIMFRAC system variable) |
| ID_DSAS_ToolTip_DimFrac_Horizon | 분수의 형식을 수평으로 설정합니다.(DIMFRAC 시스템 변수) | Set the fraction format to horizontal. (DIMFRAC system variable) |
| ID_DSAS_ToolTip_DimFrac_NonStack | 분수의 형식을 비스택으로 설정합니다.(DIMFRAC 시스템 변수) | Set the fraction format to unstacked. (DIMFRAC system variable) |
| ID_DSAS_ToolTip_Dimhidezero_Alttol | 2차 공차를 사용할 경우, 0을 숨기는 방법을 설정합니다.(DIMALTTZ 시스템 변수) | Set how leading zeros are suppressed in alternate tolerances. (DIMALTTZ system variable) |
| ID_DSAS_ToolTip_Dimhidezero_Angular | 각도 치수를 사용할 경우, 0을 숨기는 방법을 설정합니다.(DIMAZIN 시스템 변수) | Set how leading zeros are suppressed in angular dimensions. (DIMAZIN system variable) |
| ID_DSAS_ToolTip_Dimhidezero_Linear | 선형 치수를 사용할 경우, 0을 숨기는 방법을 설정합니다.(DIMZIN 시스템 변수) | Set how leading zeros are suppressed in linear dimensions. (DIMZIN system variable) |
| ID_DSAS_ToolTip_Dimhidezero_Tolerance | 공차를 사용할 경우, 0을 숨기는 방법을 설정합니다.(DIMTZIN 시스템 변수) | Set how leading zeros are suppressed in tolerances. (DIMTZIN system variable) |
| ID_DSAS_ToolTip_Dimhidezero_UNIT | 2차 단위를 사용할 경우, 0을 숨기는 방법을 설정합니다.(DIMALTZ 시스템 변수) | Set how leading zeros are suppressed in alternate units. (DIMALTZ system variable) |
| ID_DSAS_ToolTip_Dimjogang | 꺾어진 반지름 치수에서 치수선의 횡단세그먼트 각도를 결정합니다.(DIMJOGANG 시스템 변수) | Set the angle of the transverse segment in a jogged radius dimension. (DIMJOGANG system variable) |
| ID_DSAS_ToolTip_Dimmzf | 보조 단위의 수를 단위로 설정합니다.  치수 거리가 한 단위 미만일 때 거리를 보조 단위로 계산하는 데 사용됩니다.  예를 들어, 꼬리말이 m인데 하위 단위 꼬리말은 cm로 표시하도록 되어 있다면 100을 입력합니다. | Set the number of auxiliary unit sub-units.  Used to convert distances less than one unit into auxiliary units.  e.g., if the Footer is ""m"" and the sub-unit Footer is ""cm,"" enter 100. |
| ID_DSAS_ToolTip_Dimmzs | 치수 값의 보조 단위에 꼬리말을 추가합니다.  문자를 입력하거나 특수 기호를 표시하기 위한 조정 코드를 사용할 수 있습니다.  예를 들어, 0.96m를 96cm로 표시하려면 cm를 입력합니다. | Add a Footer to the auxiliary unit of the dimension value.  You can enter text or use special character codes.&#xA e.g., to display 0.96m as 96cm, enter ""cm |
| ID_DSAS_ToolTip_DimSD1 | 첫번째 치수선의 표시를 억제합니다.(DIMSD1 시스템 변수) | Suppress the display of the first dimension line. (DIMSD1 system variable |
| ID_DSAS_ToolTip_DimSD2 | 두번째 치수선의 표시를 억제합니다.(DIMSD2 시스템 변수) | Suppress the display of the second dimension line. (DIMSD2 system variable) |
| ID_DSAS_ToolTip_DimSE1 | 첫번째 치수보조선의 표시를 억제합니다.(DIMSE1 시스템 변수) | Suppress the display of the first extension line. (DIMSE1 system variable) |
| ID_DSAS_ToolTip_DimSE2 | 두번째 치수보조선의 표시를 억제합니다.(DIMSE2 시스템 변수) | Suppress the display of the second extension line. (DIMSE2 system variable) |
| ID_DSAS_ToolTip_Dimtdec | 소수부 자릿수를 설정합니다.(DIMTDEC 시스템 변수) | Set the number of decimal places. (DIMTDEC system variable) |
| ID_DSAS_ToolTip_DimTextOrientation_Dimaltd | 대체 단위의 소수부 자릿수를 설정합니다.(DIMALTD 시스템 변수) | Set the number of decimal places for alternate units. (DIMALTD system variable) |
| ID_DSAS_ToolTip_DimTextOrientation_DimaltLoc_Down | 치수 문자에서 1차 단위 아래에 대체 단위를 배치합니다. | Place the alternate unit below the primary unit in the dimension text. |
| ID_DSAS_ToolTip_DimTextOrientation_DimaltLoc_Side | 치수 문자에서 1차 단위 뒤에 대체 단위를 배치합니다. | Place the alternate unit after the primary unit in the dimension text. |
| ID_DSAS_ToolTip_DimTextOrientation_Dimaltu_Architectural | 대체 단위의 단위 형식을 ft-in(건축)으로 설정합니다.(DIMALTU 시스템 변수) | Set the unit format for alternate units to feet-inches (architectural). (DIMALTU system variable) |
| ID_DSAS_ToolTip_DimTextOrientation_Dimaltu_Decimal | 대체 단위의 단위 형식을 십진으로 설정합니다.(DIMALTU 시스템 변수) | Set the unit format for alternate units to decimal. (DIMALTU system variable) |
| ID_DSAS_ToolTip_DimTextOrientation_Dimaltu_Engineering | 대체 단위의 단위 형식을 ft-in(공학)으로 설정합니다.(DIMALTU 시스템 변수) | Set the unit format for alternate units to feet-inches (engineering). (DIMALTU system variable) |
| ID_DSAS_ToolTip_DimTextOrientation_Dimaltu_Fractional | 대체 단위의 단위 형식을 분수로 설정합니다.(DIMALTU 시스템 변수) | Set the unit format for alternate units to fractional. (DIMALTU system variable) |
| ID_DSAS_ToolTip_DimTextOrientation_Dimaltu_Scientific | 대체 단위의 단위 형식을 과학으로 설정합니다.(DIMALTU 시스템 변수) | Set the unit format for alternate units to scientific notation. (DIMALTU system variable) |
| ID_DSAS_ToolTip_DimTextOrientation_DimLineAlign | 문자를 치수 선에 정렬합니다.(DIMTIH/DIMTOH 시스템 변수) | Align the text with the dimension line. (DIMTIH/DIMTOH system variable) |
| ID_DSAS_ToolTip_DimTextOrientation_Horizontal | 수평 위치로 문자를 위치시킵니다.(DIMTIH/DIMTOH 시스템 변수) | Position the text horizontally. (DIMTIH/DIMTOH system variable) |
| ID_DSAS_ToolTip_Dimtfac | 치수 문자와 관련된 분수의 축척을 설정합니다.  이 옵션은 주 단위 탭에서 단위 형식으로 분수를 선택한 경우에만 사용할 수 있습니다.  여기에 입력한 값에 문자 높이를 곱하여 치수 문자를 기준으로 한 치수 분수 높이가 결정됩니다.(DIMTFAC 시스템 변수) | Set the scale of fractions in dimension text. This option is only available when the unit format is set to fractions in the primary unit tab.  The entered value is multiplied by the text height to determine the height of fractional dimensions relative to the dimension text. (DIMTFAC system variable) |
| ID_DSAS_ToolTip_Dimtm | 최소 또는 하한 공차값을 설정합니다.(DIMTM 시스템 변수) | Set the minimum or lower tolerance value. (DIMTM system variable) |
| ID_DSAS_ToolTip_DimtMove_Link | 치수선 외부로 치수 문자를 이동할 경우, 지시선을 추가합니다.(DIMTMOVE 시스템 변수) | When moving the dimension text outside the dimension line, add a leader. (DIMTMOVE system variable) |
| ID_DSAS_ToolTip_DimtMove_Text | 치수선 외부로 치수 문자를 이동할 경우, 지시선 없이 문자를 자유롭게 이동할 수 있습니다.(DIMTMOVE 시스템 변수) | When moving the dimension text outside the dimension line, allow free movement of the text without a leader. (DIMTMOVE system variable) |
| ID_DSAS_ToolTip_DimtMove_With | 치수선 외부로 치수 문자를 이동할 경우, 치수 문자와 함께 치수 선을 이동합니다.(DIMTMOVE 시스템 변수) | When moving the dimension text outside the dimension line, move the dimension line along with it. (DIMTMOVE system variable) |
| ID_DSAS_ToolTip_DimtolForm_Deviation | 공차를 계산하기 위한 방법을 편차로 설정합니다.(DIMTOL 시스템 변수) | Set the tolerance calculation method to deviation. (DIMTOL system variable) |
| ID_DSAS_ToolTip_DimtolForm_Limit | 공차를 계산하기 위한 방법을 한계로 설정합니다.(DIMTOL 시스템 변수) | Set the tolerance calculation method to limits. (DIMTOL system variable) |
| ID_DSAS_ToolTip_DimtolForm_None | 공차를 치수 문자에 추가합니다.(DIMTOL 시스템 변수) | Add tolerances to the dimension text. (DIMTOL system variable) |
| ID_DSAS_ToolTip_DimtolForm_Standard | 공차를 계산하기 위한 방법을 기준으로 설정합니다.(DIMTOL 시스템 변수) | Set the tolerance calculation method to basic. (DIMTOL system variable) |
| ID_DSAS_ToolTip_DimtolForm_Symmetry | 공차를 계산하기 위한 방법을 대칭으로 설정합니다.(DIMTOL 시스템 변수) | Set the tolerance calculation method to symmetric. (DIMTOL system variable) |
| ID_DSAS_ToolTip_Dimtolj_Bottom | 대칭 및 편차 공차의 문자 자리맞추기를 아래로 조정합니다.(DIMTOLJ 시스템 변수) | Adjust the text alignment of symmetric and deviation tolerances to the bottom. (DIMTOLJ system variable) |
| ID_DSAS_ToolTip_Dimtolj_Middle | 대칭 및 편차 공차의 문자 자리맞추기를 중간으로 조정합니다.(DIMTOLJ 시스템 변수) | Adjust the text alignment of symmetric and deviation tolerances to the middle. (DIMTOLJ system variable) |
| ID_DSAS_ToolTip_Dimtolj_Top | 대칭 및 편차 공차의 문자 자리맞추기를 위로 조정합니다.(DIMTOLJ 시스템 변수) | Adjust the text alignment of symmetric and deviation tolerances to the top. (DIMTOLJ system variable) |
| ID_DSAS_ToolTip_Dimtp | 최대 또는 상한 공차값을 설정합니다. 방법에서 대칭을 선택하면 공차에 이 값이 사용됩니다.(DIMTP 시스템 변수) | Set the maximum or upper tolerance value. When the method is set to symmetric, this value is used for the tolerance. (DIMTP system variable) |
| ID_DSAS_ToolTip_Dimzin_ft | 거리가 1피트가 안될 때 피트-인치 치수에서 피트 부분을 억제합니다. 예를 들어, 0'-6 1/2"는 6 1/2"가 됩니다. | 0'-6 1/2" 6 1/2" |
| ID_DSAS_ToolTip_Dimzin_in | 피트-인치 치수에서 거리가 피트의 정수 부분만으로 이루어질 때 인치 부분을 억제합니다.  예를 들어, 1'-0"는 1'가 됩니다. | Suppress the inch portion in feet-inch dimensions when the distance consists only of whole feet. e.g., 1'-0" 1' |
| ID_DSAS_ToolTip_Dimzin_Leading | 모든 소수 치수에서 소수점 앞에 오는 0을 억제합니다.  예를 들어 0.5000은 .5000이 됩니다. | Suppress leading zeros in all decimal dimensions.   (e.g., 0.5000 → .5000) |
| ID_DSAS_ToolTip_Dimzin_Trailing | 모든 소수 치수에서 소수점 뒤에 오는 0을 억제합니다.  예를 들어, 12.5000은 12.5가 되고 30.0000은 30이 됩니다. | Suppress trailing zeros in all decimal dimensions.   (e.g., 12.5000 → 12.5, 30.0000 → 30) |
| ID_DSAS_ToolTip_DirectionbyAngle | 문자가 치수보조선 안에 있을 때는 치수선을 따라 문자를 정렬하고,  문자가 치수보조선 밖에 있을 때는 문자를 수평으로 정렬합니다.(DIMTIH/DIMTOH 시스템 변수) | When the text is inside the extension lines, it aligns with the dimension line. When the text is outside the extension lines, it remains horizontally aligned. (DIMTIH/DIMTOH system variable) |
| ID_DSAS_ToolTip_LINESUB_01 | 치수 끊기에 사용되는 간격의 크기를 표시 및 설정합니다. | Display and set the size of the gap used for dimension breaks. |
| ID_DSAS_Unit_Architectural | (건축) | (Arch.) |
| ID_DSAS_Unit_Decimal | 십진 | Decimal |
| ID_DSAS_Unit_DegreesMinutesSeconds | 도/분/초 | D/M/S |
| ID_DSAS_Unit_Desktop | 윈도우 설정 | Windows Desktop |
| ID_DSAS_Unit_Engineering | (공학) | (Eng.) |
| ID_DSAS_Unit_Fractional | 분수 | Fractional |
| ID_DSAS_Unit_Gradian | 그라디안 | Gradians |
| ID_DSAS_Unit_LandSurveyor | 측량사 | Survey Units |
| ID_DSAS_Unit_Radian | 라디안 | Radians |
| ID_DSAS_Unit_Scientific | 과학 | Scientific |
| ID_DSAS_UsingDimStyle | 치수 스타일 관리자 | Dimension Style Manager |
| ID_DSAS_WindowTitle | 치수 스타일 | Dimension styles |
| ID_DSIMB_DimStyle | 치수스타일 | DimStyle |
| ID_DSIMB_DimStyle_Current | 현재 치수 스타일 : | Current DimStyle : |
| ID_DSIMB_DimStyle_Description | 도면에 정의된 치수 스타일을 선택하여 현재 치수 스타일로 만들 수 있습니다. | You can select a dimension style defined in the drawing to make it the current dimension style. |
| ID_DSIMB_DimStyle_SelectedEntity | 선택된 객체 치수 스타일 : | Selected Entity DimStyle |
| ID_DSP_DimScale | 치수 스케일 | Dimension scale |
| ID_DSP_IsFitViewPort | 뷰포트 스케일 맞춤 | Fit Viewport Scale |
| ID_DSP_MeasureScale | 측정 스케일 | Scale Factor |
| ID_DSS_Advanced | 치수스타일 상세 | Advanced settings |
| ID_DSS_Title | 치수스타일 | Dimension styles |
| ID_DSS_ToolTip_Advanced | 치수스타일 상세 설정창이 열립니다 | Open advanced settings |
| ID_EDIT_CommandButton_ALIGN | 정렬 | Align Objects |
| ID_EDIT_CommandButton_ALLZVALUECHANGE | Z값 일괄변경 | Batch Change Z-Value |
| ID_EDIT_CommandButton_CHANGE | 객체 특성변경 | Changes the Properties of objects |
| ID_EDIT_CommandButton_COPY | 복사 | Copy |
| ID_EDIT_CommandButton_COPYBASE | 기준점을 지정하여 복사 | Copy with Base Point |
| ID_EDIT_CommandButton_DELETEDUPLICATEENTITIES | 중복객체 제거 | Remove Duplicate Objects |
| ID_EDIT_CommandButton_DIVIDE | 지정 개수로 등분 | Place Objects by Specified Number |
| ID_EDIT_CommandButton_DRAWORDER | 그리기 순서 변경 | Change the Draw Order |
| ID_EDIT_CommandButton_EC | 숫자로 색상변경 | Change Color by Color Index |
| ID_EDIT_CommandButton_ERASE | 지우기 | Delete Objects |
| ID_EDIT_CommandButton_EXPLODE | 분해 | Explode into Individual Elements |
| ID_EDIT_CommandButton_HATCHEDITE | 해치편집 | Edit Hatch |
| ID_EDIT_CommandButton_HATCHGENERATEBOUNDARY | 해치 경계 재작성 | Recreate Hatch Boundary |
| ID_EDIT_CommandButton_HATCHSETBOUNDARY | 해치 경계 재지정 | Redefine Hatch Boundary |
| ID_EDIT_CommandButton_HATCHSETORIGIN | 해치패턴 원점변경 | Change Hatch Pattern Origin |
| ID_EDIT_CommandButton_HATCHTOBACK | 해치를 맨뒤로 | Send Hatch to Back |
| ID_EDIT_CommandButton_HIDEOBJECTS | 선택 객체 숨기기 | Hide selected object |
| ID_EDIT_CommandButton_ICO | 다중간격으로 복사 | Copy with Multiple Offsets |
| ID_EDIT_CommandButton_ISOLATEOBJECTS | 선택객체 제외하고 숨기기 | Isolate Selected Objects |
| ID_EDIT_CommandButton_MATCHPROP | 특성일치 | Match Properties |
| ID_EDIT_CommandButton_MEASURE | 지정 간격으로 분할 | Place Objects by Specified Length |
| ID_EDIT_CommandButton_MIRROR | 대칭 | Mirror |
| ID_EDIT_CommandButton_MIRROR3D | 3D대칭 | 3D Mirror |
| ID_EDIT_CommandButton_MOVE | 이동 | Move |
| ID_EDIT_CommandButton_MREDO | 다중 명령 복구 | Recover Multiple Commands |
| ID_EDIT_CommandButton_OOPS | 지우기 복원 | Restores Erased Objects |
| ID_EDIT_CommandButton_OVERKILL | 중복객체 삭제 | Delete Duplicate Objects |
| ID_EDIT_CommandButton_PROPERTIES | 객체특성 조회/수정 | Open Properies |
| ID_EDIT_CommandButton_PURGE | 미사용항목 제거 | Purge Unused Items |
| ID_EDIT_CommandButton_PW | 선 두께 일괄변경 | Batch Change Line Global Width |
| ID_EDIT_CommandButton_REDO | 직전작업 취소 복원 | Undo the Undo |
| ID_EDIT_CommandButton_REF | 객체참조회전 | Rotate by Reference |
| ID_EDIT_CommandButton_ROTATE | 객체 회전 | Rotates Objects |
| ID_EDIT_CommandButton_ROTATE3D | 3D 객체 회전 | 3D Rotate |
| ID_EDIT_CommandButton_RZV | 고도값 변경 | Change EL Value |
| ID_EDIT_CommandButton_SETBYLAYER | 레이어특성을 ByLayer로 변경 | Changes the Properties to by Layer |
| ID_EDIT_CommandButton_UNDO | 작업취소 | Undo |
| ID_EDIT_CommandButton_UNISOLATEOBJECTS | 숨긴객체 다시표시 | Unhide Objects |
| ID_EDIT_CommandButton_VIEWALLENTITIES | 모든 객체 보이기 | Show All Objects |
| ID_EDIT_CommandButton_VIEWSELECTIONCOLOR | 선택 색상 객체만 보이기 | Show Objects Selected Color Only |
| ID_EDIT_GroupName_01_01 | 객체특성 | View / Modify |
| ID_EDIT_GroupName_01_02 | 을 | Object Properties |
| ID_EDIT_GroupName_02_01 | 개수나 간격입력하여 | Explode |
| ID_EDIT_GroupName_02_02 | 분할 | & |
| ID_EDIT_GroupName_02_03 | 또는 | Divide |
| ID_EDIT_GroupName_03_01 | 대칭으로 | Mirror |
| ID_EDIT_GroupName_04_01 | 해치 편집 | Edit |
| ID_EDIT_GroupName_04_02 | 및 | Hatch / Boundary |
| ID_EDIT_GroupName_05_01 | 선택객체를 | Hide / Show |
| ID_EDIT_GroupName_06_01 | 여러방법으로 | Rotate |
| ID_EDIT_GroupName_07_01 | 고도값(Z값) | Modify Z-Value |
| ID_EDIT_GroupName_08_01 | 직전작업 등 | Redo / Undo |
| ID_EDIT_GroupName_09_01 | 객체 | Align |
| ID_EDIT_GroupName_09_02 | 정렬하기 | Objects |
| ID_EDIT_GroupName_10_01 | 복사 | Copy |
| ID_EDIT_GroupName_10_02 | 하여 | & |
| ID_EDIT_GroupName_10_03 | 붙여넣기 | Paste |
| ID_EDIT_GroupName_11_01 | 하이퍼링크 | Insert |
| ID_EDIT_GroupName_11_02 | 걸기 | Hyperlink |
| ID_EDIT_GroupName_12_01 | 이동 | Move |
| ID_EDIT_GroupName_12_02 | 복사 | Copy |
| ID_EDIT_GroupName_12_03 | 자르기 | Trim |
| ID_EDIT_GroupName_13_01 | 객체 및 중복객체 | Delete |
| ID_EDIT_GroupName_13_02 | 삭제하기 | Object |
| ID_EDIT_GroupName_14 | 선 객체 수정 | Edit line objects |
| ID_EDIT_GroupName_15 | 객체 숨기기 | Hide Object |
| ID_EDIT_GroupName_16 | 객체 구속조건 적용 | 22 |
| ID_EDIT_RadioButton_HYPERLINK_01 | 표시 | Show |
| ID_EDIT_RadioButton_HYPERLINK_02 | 표시안함 | Hide |
| ID_EDIT_RadioButton_OTP_01 | 폴리선 | Polyline |
| ID_EDIT_RadioButton_OTP_02 | 3D 폴리선 | 3D polyline2 |
| ID_EDIT_TextBlock_BRD | 지정 거리 | Break point |
| ID_EDIT_TextBlock_EBB_01 | 범위 선택 | Select boundary |
| ID_EDIT_TextBlock_EBB_02 | 잘라낼 수 없는 객체 처리 | Handle Non-Trimmable Objects |
| ID_EDIT_TextBlock_OTP | 변환 후, 폴리선 형식 | Polyline Type After Conversion |
| ID_ENTITY_DISPLAY_ALIGNED_DIMENSION | 평행치수 | ALIGNED DIMENSION |
| ID_ENTITY_DISPLAY_ARC | 호 | ARC |
| ID_ENTITY_DISPLAY_ARC_DIMENSION | 호 길이치수 | ARC LENGTH DIMENSION |
| ID_ENTITY_DISPLAY_ATTRIBUTE_BLOCK | 속성블록 | ATTRIBUTE BLOCK |
| ID_ENTITY_DISPLAY_ATTRIBUTE_DEFINITION | 속성문자 | ATTRIBUTE |
| ID_ENTITY_DISPLAY_BLOCK_REFERENCE | 블록 | BLOCK |
| ID_ENTITY_DISPLAY_CIRCLE | 원 | CIRCLE |
| ID_ENTITY_DISPLAY_CIRCLE_ARRAY | 원배열 | CIRCULAR ARRAY |
| ID_ENTITY_DISPLAY_DBPOINT | 점 | POINT |
| ID_ENTITY_DISPLAY_DBTEXT | 문자 | TEXT |
| ID_ENTITY_DISPLAY_DGN_REFERENCE | dgn | DGN |
| ID_ENTITY_DISPLAY_DIAMETRIC_DIMENSION | 지름치수 | DIAMETER DIMENSION |
| ID_ENTITY_DISPLAY_DWF_REFERENCE | dwf | DWF |
| ID_ENTITY_DISPLAY_DWG_BLOCK | dwg | DWG |
| ID_ENTITY_DISPLAY_ELLIPSE | 타원 | ELLIPSE |
| ID_ENTITY_DISPLAY_EXTERNAL_BLOCK_REFERENCE | etc | EXTERNAL BLOCK |
| ID_ENTITY_DISPLAY_HATCH_GRADIENT | 그라데이션 | GRADIENT |
| ID_ENTITY_DISPLAY_HATCH_MPOLYGON | M형 다각형 | M-SHAPED POLYGON |
| ID_ENTITY_DISPLAY_HATCH_PATTERN | 패턴 | PATTERN |
| ID_ENTITY_DISPLAY_HATCH_SOLID | 솔리드 | SOLID |
| ID_ENTITY_DISPLAY_HELIX | 나선 | HELIX |
| ID_ENTITY_DISPLAY_IMP_DIMENSION | 꺾기치수 | JOGGED DIMENSION |
| ID_ENTITY_DISPLAY_LEADER | 지시선 | LEADER LINE |
| ID_ENTITY_DISPLAY_LINE | 선 | LINE |
| ID_ENTITY_DISPLAY_LINE_ANGULAR_DIMENSION2 | 각도치수 | ANGULAR DIMENSION |
| ID_ENTITY_DISPLAY_MLEADER | 다중지시선 | MULTILEADER |
| ID_ENTITY_DISPLAY_MLINE | 여러줄 | MLINE |
| ID_ENTITY_DISPLAY_MTEXT | 여러줄문자 | MTEXT |
| ID_ENTITY_DISPLAY_NYNG_BLOCK | grm | GRM |
| ID_ENTITY_DISPLAY_ORDINATE_DIMENSION | 세로좌표치수 | V-COORDINATE DIMENSION |
| ID_ENTITY_DISPLAY_PATH_ARRAY | 경로배열 | PATH ARRAY |
| ID_ENTITY_DISPLAY_PDF_REFERENCE | pdf | PDF |
| ID_ENTITY_DISPLAY_POINT3_ANGULAR_DIMENSION | 3점각도치수 | 3POINT ALNGULAR DIMENSION |
| ID_ENTITY_DISPLAY_POLYLINE | 폴리선 | POLYLINE |
| ID_ENTITY_DISPLAY_POLYLINE2D | 2D폴리선 | 2D POLYLINE |
| ID_ENTITY_DISPLAY_POLYLINE3D | 3D폴리선 | 3D POLYLINE |
| ID_ENTITY_DISPLAY_RADIAL_DIMENSION | 반지름치수 | RADIUS DIMENSION |
| ID_ENTITY_DISPLAY_RASTERIMAGE | 이미지 | IMAGE |
| ID_ENTITY_DISPLAY_RAY | 광선 | RAY |
| ID_ENTITY_DISPLAY_RECTANGLE_ARRAY | 직사각형배열 | RECTANGULAR ARRAY |
| ID_ENTITY_DISPLAY_REGION | 영역 | REGION |
| ID_ENTITY_DISPLAY_ROTATED_DIMENSION | 회전치수 | LINEAR DIMENSION |
| ID_ENTITY_DISPLAY_SOLID2D | 솔리드 | SOLID |
| ID_ENTITY_DISPLAY_SOLID3D_BOX | 상자 | BOX |
| ID_ENTITY_DISPLAY_SOLID3D_CONE | 원추 | CONE |
| ID_ENTITY_DISPLAY_SOLID3D_CYLINDER | 원통 | CYLINDER |
| ID_ENTITY_DISPLAY_SOLID3D_PYRAMID | 피라미드 | PYRAMID |
| ID_ENTITY_DISPLAY_SOLID3D_SPHERE | 구 | SPHERE |
| ID_ENTITY_DISPLAY_SOLID3D_TORUS | 토러스 | TORUS |
| ID_ENTITY_DISPLAY_SOLID3D_WEDGE | 쐐기 | WEDGE |
| ID_ENTITY_DISPLAY_SPLINE | 스플라인 | SPLINE |
| ID_ENTITY_DISPLAY_TABLE | 테이블 | TABLE |
| ID_ENTITY_DISPLAY_UNKNOWN | 미분류 | UNCLASSIFIED |
| ID_ENTITY_DISPLAY_VIEWPORT | 뷰포트 | VIEWPORT |
| ID_ENTITY_DISPLAY_WIPEOUT | 가리기박스 | WIPEOUT |
| ID_ENTITY_DISPLAY_XLINE | X선 | XLINE |
| ID_ENTITYGROUP_MAIN_ARRAY | 배열 | Array |
| ID_ENTITYGROUP_MAIN_BLOCK | 블록 | Block |
| ID_ENTITYGROUP_MAIN_DIMENSION | 치수 | Dimension |
| ID_ENTITYGROUP_MAIN_HATCH | 해치 | Hatch |
| ID_ENTITYGROUP_MAIN_IMAGE | 이미지 | Image |
| ID_ENTITYGROUP_MAIN_LEADER | 지시선 | Leader |
| ID_ENTITYGROUP_MAIN_OBJECT3D | 3D객체 | 3D Object |
| ID_ENTITYGROUP_MAIN_REGION | 영역 | Region |
| ID_ENTITYGROUP_MAIN_SHAPE | 도형 | Shape |
| ID_ENTITYGROUP_MAIN_TEXT | 문자 | Text |
| ID_ENTITYGROUP_MAIN_UNKNOWN | 미분류 | Unknown |
| ID_ENTITYGROUP_MAIN_VIEWPORT | 뷰포트 | Viewport |
| ID_ENTITYGROUP_SUB_ARRAY | 배열 | Array |
| ID_ENTITYGROUP_SUB_CURVE | 곡선 | Curve |
| ID_ENTITYGROUP_SUB_DIAMETRIC_DIMENSION | 지름치수 | Diameter Dimension |
| ID_ENTITYGROUP_SUB_EXTERNAL_BLOCK | 외부블록 | External Block |
| ID_ENTITYGROUP_SUB_FILL | 채우기 | Fill |
| ID_ENTITYGROUP_SUB_IMAGE | 이미지 | Image |
| ID_ENTITYGROUP_SUB_INNER_BLOCK | 내부블록 | Internal Block |
| ID_ENTITYGROUP_SUB_LEADER | 지시선 | Leader |
| ID_ENTITYGROUP_SUB_LINE | 직선 | Line |
| ID_ENTITYGROUP_SUB_LINE_ANGULAR_DIMENSION2 | 각도치수 | Angular Dimension |
| ID_ENTITYGROUP_SUB_LINEAR_DIMENSION | 선형치수 | Linear Dimension |
| ID_ENTITYGROUP_SUB_MESH | 메쉬 | Mesh |
| ID_ENTITYGROUP_SUB_ORDINATE_DIMENSION | 세로좌표 | Vertical Coordinate |
| ID_ENTITYGROUP_SUB_PATTERN | 패턴 | Pattern |
| ID_ENTITYGROUP_SUB_POINT | 점 | Point2 |
| ID_ENTITYGROUP_SUB_POLYLINE | 폴리선 | Polyline |
| ID_ENTITYGROUP_SUB_REGION | 영역 | Region |
| ID_ENTITYGROUP_SUB_SOLID2D | 2D솔리드 | 2D Solid |
| ID_ENTITYGROUP_SUB_SOLID3D | 3D솔리드 | 3D Solid |
| ID_ENTITYGROUP_SUB_SPLINE | 스플라인 | Create Smooth Curves |
| ID_ENTITYGROUP_SUB_SURFACE | 표면 | Surface |
| ID_ENTITYGROUP_SUB_TABLE | 테이블 | Table |
| ID_ENTITYGROUP_SUB_TEXT | 문자 | Text |
| ID_ENTITYGROUP_SUB_VIEWPORT | 뷰포트 | Viewport |
| ID_FileNotExist | 파일이 존재하지 않습니다. | The file does not exist |
| ID_FS_Advanced | 문자표 상세 | Text Style |
| ID_HAS_Annotative | 주석 | Annotative hatch |
| ID_HAS_Associative | 연관 | Associative hatch |
| ID_HAS_Boundaries | 경계 | Boundaries |
| ID_HAS_BoundaryExtent_BottomLeft | 맨 아래 왼쪽 | Bottom left |
| ID_HAS_BoundaryExtent_BottomRight | 맨 아래 오른쪽 | Bottom right |
| ID_HAS_BoundaryExtent_Center | 중심 | Center |
| ID_HAS_BoundaryExtent_TopLeft | 맨 위 왼쪽 | Top left |
| ID_HAS_BoundaryExtent_TopRight | 맨 위 오른쪽 | Top right |
| ID_HAS_Description | 설명 | Description |
| ID_HAS_DrawOrder | 그리기 순서 | Draw Order |
| ID_HAS_DRAWORDER_BringInFrontOfBoundary | 경계의 앞으로 가져오기 | Bring in front of boundary |
| ID_HAS_DRAWORDER_BringToFront | 맨 앞으로 가져오기 | Bring to front |
| ID_HAS_DRAWORDER_DoNotAssign | 지정안함 | Do not assign |
| ID_HAS_DRAWORDER_SendBehindBoundary | 경계의 뒤로 보내기 | Send behind boundary |
| ID_HAS_DRAWORDER_SendToBack | 맨 뒤로 보내기 | Send to back |
| ID_HAS_ERROR_Initialize | 해치 편집 초기화에 실패했습니다. | Failed to initialize hatch editing. |
| ID_HAS_Gradient_Angle | 각도 | Angle |
| ID_HAS_Gradient_Centered | 중심 | Centered |
| ID_HAS_Gradient_Color | 색상 | Color |
| ID_HAS_Gradient_OneColor | 한 색 사용 | One color |
| ID_HAS_Inheritance_Current | 현재 원점 사용 | Use current origin |
| ID_HAS_Inheritance_Source | 원본 해치 원점 사용 | Use source hatch origin |
| ID_HAS_IslandDetection | 고립영역 탐지 | Island detection |
| ID_HAS_Islands | 고립영역 | Islands |
| ID_HAS_Layer | 레이어 | Layer |
| ID_HAS_Name | 이름 | Name |
| ID_HAS_Options | 옵션 | Options |
| ID_HAS_Pattern_Angle | 각도 | Angle |
| ID_HAS_Pattern_AngleScale | 각도 및 축척 | Angle and Scale |
| ID_HAS_Pattern_Color | 색상 | Color |
| ID_HAS_Pattern_CurrentOrigin | 원본 해치 원점 사용 | Use original hatch origin |
| ID_HAS_Pattern_Double | 이중 | Double |
| ID_HAS_Pattern_HatchOrigin | 해치 원점 | Hatch origin |
| ID_HAS_Pattern_ISOPenWidth | ISO 펜 폭 | ISO pen width |
| ID_HAS_Pattern_PickedOrigin | 클릭하여 새 원점을 설정 | Click to set new origin |
| ID_HAS_Pattern_Related | 도면 공간에 상대적 | Related to paper space |
| ID_HAS_Pattern_SaveCurrentOrigin | 기본 원점으로 저장 | Store as default origin |
| ID_HAS_Pattern_Scale | 축척 | Scale |
| ID_HAS_Pattern_Spacing | 간격두기 | Spacing |
| ID_HAS_Pattern_SpecifiedOrigin | 지정된 원점 | Use specified origin |
| ID_HAS_Pattern_UsingExtentMode | 경계 범위를 기본값으로 설정 | Default to boundary extents |
| ID_HAS_PickInternalPoints | 점 선택 | Pick internal points |
| ID_HAS_PROMPT_OR | 또는 | or |
| ID_HAS_PROMPT_PickedOriginPoint | 원점 지정 | Specify Origin Point |
| ID_HAS_PROMPT_PickInternalPoint | 내부 점 선택 | Specify internal point |
| ID_HAS_PROMPT_Polyline | 폴리선 | Polyline |
| ID_HAS_PROMPT_RecreateBoundary_Associative | 해치를 새 경계와 연관하시겠습니까? | Do you want to associate the hatch with the new boundary? |
| ID_HAS_PROMPT_RecreateBoundary_Object | 경계 객체 유형 입력 | Enter boundary object type |
| ID_HAS_PROMPT_Region | 영역 | Region |
| ID_HAS_PROMPT_RemoveBoundaries | 제거할 경계 선택 | Select boundaries to remove |
| ID_HAS_PROMPT_SelectEntities | 객체 선택 | Select entities |
| ID_HAS_PROMPT_UNDO | 명령 취소 | UNDO |
| ID_HAS_RecreateBoundary | 경계 재작성 | New B'dry |
| ID_HAS_RemoveBoundaries | 경계 제거 | Del Boundary |
| ID_HAS_SelectEntities | 경계 객체 선택 | Select entities |
| ID_HAS_Separate | 개별 해치 | Separated hatch |
| ID_HAS_Style_Ignore | 무시 | Ignore |
| ID_HAS_Style_Normal | 일반 | Std |
| ID_HAS_Style_Outer | 외부 | Outer |
| ID_HAS_TITLE | 해치 | Hatch |
| ID_HAS_TITLE_Edit | 해치 편집 | Hatch editor |
| ID_HAS_TOOLTIP_Angle | 해치 원점을 제외하고 선택한 해치 객체의 특성을 사용해 해치 특성을 설정합니다. | Specifies the angle to use for the hatch pattern relative to the X-axis of the current UCS. (HPANG system variable) |
| ID_HAS_TOOLTIP_Annotative | 사용자 정의된 패턴에서 선의 간격을 지정합니다. 이 옵션은 유형이 사용자 정의로 설정되어 있을 때만 사용할 수 있습니다. (HPSPACE 시스템 변수) | Specifies that the hatch is annotative. This property automates the annotation scaling process so that annotations are plotted or displayed at the correct size in the drawing. (HPANNOTATIVE system variable) |
| ID_HAS_TOOLTIP_Associative | 선택한 펜 폭을 기준으로 ISO 미리 정의된 패턴을 축척합니다. 이 옵션은 유형이 미리 정의로 설정되어 있고 패턴이 사용 가능한 ISO 패턴 중 하나로 설정되어 있을 때만 사용할 수 있습니다. | Specifies that the hatch or fill is related. The associated hatch or fill is updated when you modify its boundary object. (HPASSOC system variable) |
| ID_HAS_TOOLTIP_DrawOrder | 해치 또는 채우기에 그리기 순서를 지정합니다. 해치 또는 채우기는 다른 모든 객체의 앞,뒤 및 해치 경계의 앞, 뒤에 배치할 수 있습니다. (HPDRAWORDER 시스템 변수) | Specifies the order in which the hatch or fill draws. Hatch or fill can be placed in front of, behind, and in front of, and behind the hatch boundary of all other objects. (HPDRAWORDER system variable) |
| ID_HAS_TOOLTIP_Gradient_Angle | 그라데이션 채우기의 각도를 지정합니다. 지정된 각도는 현재 UCS를 기준으로 합니다. 이 옵션은 해치 패턴에서 지정된 각도와 상관이 없습니다. (GFANG 시스템 변수) | Specifies the angle of the gradient fill. The specified angle is based on the current UCS. This option is independent of the angle specified in the hatch pattern. (GFANG system variable) |
| ID_HAS_TOOLTIP_Gradient_Centered | 대칭 그라데이션 구성을 지정합니다. 이 옵션이 선택되지 않으면 그라데이션 채우기가 왼쪽으로 상향 이동하여 객체의 왼쪽으로 라이트 소스의 착시 현상이 나타납니다. (GFSHIFT 시스템 변수) | Specify a symmetric gradient configuration. If this option is not selected, Gradient Filling moves upward to the left, resulting in an optical illusion of the light source to the left of the object. (GFSHIFT system variable) |
| ID_HAS_TOOLTIP_Gradient_Color1 | 두 그라데이션 색상 중 첫번째 색상을 지정합니다. | Specify the first of the two gradient colors. |
| ID_HAS_TOOLTIP_Gradient_Color2 | 두 그라데이션 색상 중 두번째 색상을 지정합니다. | Specify the second color of the two gradation colors. |
| ID_HAS_TOOLTIP_Gradient_OneColor | 색상과 지정한 색조(색상을 흰색과 혼합) 또는 색상과 지정한 음영(색상을 검은색과 혼합) 간의 부드러운 변환을 사용하는 채우기를 지정합니다. (GFCLRSTATE 시스템 변수) | Specifies a fill that uses a smooth transformation between a color and a specified shade (mixing a color with white) or between a color and a specified shade (mixing a color with black). (GFCLRSTATE system variable) |
| ID_HAS_TOOLTIP_Gradient_ShadeOrTint | 한 가지 색으로 그라데이션 채우기에 사용하는 색상의 색조(선택된 색상을 흰색과 혼합) 또는 음영처리(선택된 색상을 검은색과 혼합)를 지정합니다. (GFCLRLUM 시스템 변수) | Specifies the hue (mix selected colors with white) or shading (mix selected colors with black) used to fill gradations in one color. (GFCLRLUM system variable) |
| ID_HAS_TOOLTIP_Inheritance | 특성 상속 옵션을 사용하여 해치를 작성할 때 해치 원점을 상속할지 여부를 조정합니다. (HPINHERIT 시스템 변수) | Use the Inherit Attributes option to adjust whether to inherit the hatch origin when creating a hatch. (HPINHERIT system variable) |
| ID_HAS_TOOLTIP_Inheritance_Current | 해치 원점을 제외하고 선택한 해치 객체의 특성을 사용해 해치 특성을 설정합니다. | Sets the hatch properties using the properties of the selected hatch object except for the hatch origin. |
| ID_HAS_TOOLTIP_InheritanceProperties | 특성 상속 선택된 해치 객체의 해치 또는 채우기 특성을 사용하여 지정된 경계를 해치하거나 채웁니다. | Inherit properties Hatch or fill specified boundaries using the hatch or fill properties of the selected hatch object. |
| ID_HAS_TOOLTIP_ISOPenWidth | 미리 정의된 패턴 또는 사용자 패턴을 확장하거나 축소합니다. 이 옵션은 유형이 미리 정의 또는 사용자로 설정되어 있을 때만 사용할 수 있습니다. (HPSCALE 시스템 변수) | Scales ISO predefined patterns based on the selected pen width. This option is only available when Type is set to Predefined and Pattern is set to one of the available ISO patterns. |
| ID_HAS_TOOLTIP_Layer | 지정한 레이어에 새 해치 객체를 지정하여 현재 레이어를 재지정합니다. | Override the current layer by specifying a new hatch object for the specified layer. |
| ID_HAS_TOOLTIP_Pattern_BackgroundColor | 새 해치 객체의 배경 색상을 지정합니다. 배경 색상을 끄려면 없음을 선택합니다. | Specifies the background color for the new hatch object. Select None to turn off the background color. |
| ID_HAS_TOOLTIP_Pattern_Color | 해치 패턴 및 솔리드 채우기에 대해 지정된 색상으로 현재 색상을 재지정합니다. | Redesignates the current color to the color specified for hatch patterns and solid fill. |
| ID_HAS_TOOLTIP_Pattern_CurrentOrigin | HPORIGIN 시스템 변수에 저장된 해치 원점을 사용합니다. | Use the hatch origin stored in the HPORIGIN system variable. |
| ID_HAS_TOOLTIP_Pattern_Double | 해치 원점을 포함하여 선택한 해치 객체의 특성을 사용해 해치 특성을 설정합니다. | For a custom pattern, you create a crosshatch by drawing a second set of lines at a 90-degree angle from the original lines. This option is only available when Type is set to Custom. (HPDOUBLE system variable) |
| ID_HAS_TOOLTIP_Pattern_ExtentMode | 해치 객체에 대한 경계의 직사각형 범위를 기준으로 새 원점을 계산합니다. 선택은 범위의 각 네 구석 및 중심을 포함합니다. (HPORIGINMODE 시스템 변수) | Calculates a new origin based on a rectangular range of boundaries for a hatch object. The selection includes each of the four corners and centers of the range. (HPORIGINMODE system variable) |
| ID_HAS_TOOLTIP_Pattern_PickedOrigin | 새 해치 원점을 직접 지정합니다. | Directly specify the new hatch origin. |
| ID_HAS_TOOLTIP_Pattern_Related | 해치 패턴에 사용할 각도를 현재 UCS의 X축을 기준으로 지정합니다. (HPANG 시스템 변수) | Expand or collapse predefined or user patterns. This option is only available when Type is set to Predefined or User. (HPSCALE system variable) |
| ID_HAS_TOOLTIP_Pattern_SaveCurrentOrigin | 해치 편집 종료 시, 새 해치 원점값을 HPORIGIN 시스템 변수에 저장합니다. | At the end of hatch editing, store the new hatch origin value in the HPORIGIN system variable. |
| ID_HAS_TOOLTIP_Pattern_SpecifiedOrigin | 다음 옵션을 사용하여 새 해치 원점을 지정합니다. | Use the following options to specify the new hatch origin. |
| ID_HAS_TOOLTIP_PickInternalPoints | 선택된 점에서 닫힌 영역을 구성하는 경계를 결정합니다. | To determine the boundaries that make up the closed area at the selected point. |
| ID_HAS_TOOLTIP_Preview | 선택된 해치의 미리보기를 표시합니다. 미리보기를 클릭하면 해치 편집을 확장하여 해치 선택 화면이 표시됩니다. | Displays a preview of the selected hatch. Click Preview to expand Edit Hatch to display the Hatch Selection screen. |
| ID_HAS_TOOLTIP_Preview_Contract | 선택된 해치의 미리보기를 표시합니다. 미리보기를 클릭하면 해치 선택 화면이 축소됩니다. | Displays a preview of the selected hatch. Click Preview to collapse the hatch selection screen. |
| ID_HAS_TOOLTIP_RecreateBoundary | 선택된 해치 또는 채우기를 중심으로 폴리선 또는 영역이 작성되며, 선택적으로 해치 객체와 연관될 수 있습니다. | Polylines or areas are created around the selected hatch or fill and can optionally be associated with the hatch object. |
| ID_HAS_TOOLTIP_ReferenceType_Custom | 지정된 패턴 지정 경로의 사용자 패턴을 선택하여 채웁니다. 사용자 패턴은 *.PAT 파일로 정의됩니다. | Select and populate the user pattern for the specified pattern designated path. User patterns are defined in the *.PAT file. |
| ID_HAS_TOOLTIP_ReferenceType_Gradient | 색상 그라데이션으로 닫힌 영역을 채웁니다. 그라데이션 채우기는 색조(흰색과 섞인 색상), 음영(검은색과 섞인 색상) 또는 두 색상 간의 부드러운 전환으로 표시할 수 있습니다. | Fill the closed area with color gradation. Gradient fill can be displayed by tinting (mixed with white), shading (mixed with black), or a smooth transition between the two colors. |
| ID_HAS_TOOLTIP_ReferenceType_Pattern | ANSI, ISO 및 기타 업계 표준 해치 패턴을 선택하여 채웁니다. | Select and populate ANSI, ISO, and other industry standard hatch patterns. |
| ID_HAS_TOOLTIP_ReferenceType_Solid | 솔리드 색상으로 영역을 채웁니다. | Fill the area with a solid color. |
| ID_HAS_TOOLTIP_ReferenceType_UserDefined | 지정한 간격, 각도, 색상 및 기타 특성을 사용하여 자신만의 해치 패턴을 정의합니다. | Define your own hatch pattern based on the current linetype using the specified spacing, angle, color, and other properties. |
| ID_HAS_TOOLTIP_RemoveBoundaries | 이전에 추가된 객체를 경계 정의에서 모두 제거합니다. | To remove all previously added objects from the boundary definition. |
| ID_HAS_TOOLTIP_SelectEntities | 선택된 객체에서 닫힌 영역을 구성하는 경계를 결정합니다. | Determines the boundaries that make up the closed area on the selected object. |
| ID_HAS_TOOLTIP_Separate | 여러 개별 닫힌 경계를 지정할 경우, 단일 해치 객체 또는 복수 해치 객체를 작성하는지 여부를 조정합니다. (HPSEPARATE 시스템 변수) | If you specify multiple individual closed boundaries, adjust whether you want to create a single hatch object or multiple hatch objects. (HPSEPARATE system variable) |
| ID_HAS_TOOLTIP_Spacing | 사용자 정의 패턴의 경우 원래 선에서 90도 각도로 두 번째 선 세트를 그려 교차 해치를 작성합니다. 이 옵션은 유형이 사용자 정의로 설정되어 있을 때만 사용할 수 있습니다. (HPDOUBLE 시스템 변수) | Specifies the spacing of lines in a user-defined pattern. This option is only available when Type is set to Custom. (HPSPACE system variable) |
| ID_HAS_TOOLTIP_Style_Ignore | 모든 내부 객체를 무시하고 이 객체들을 해치하거나 채웁니다. (HPISLANDDETECTION 시스템 변수) | Ignore all internal objects and damage or populate them. (HPISLANDDETECTION System Variables) |
| ID_HAS_TOOLTIP_Style_Normal | 외부 경계로 부터 안쪽을 해치하거나 채웁니다. 내부 고립영역이 발견되면 해당 고립영역 내의 다른 고립 영역이 발견될 때까지 해치 또는 채우기가 꺼집니다. (HPISLANDDETECTION 시스템 변수) | Damage or fill in the inside from the outer boundary. If an internal isolation area is found, the hatch or fill is turned off until another isolation area within that isolation area is found. (HPISLANDDETECTION system variable) |
| ID_HAS_TOOLTIP_Style_Outer | 외부 경계로 부터 안쪽을 해치하거나 채웁니다. 이 옵션은 지정된 영역만 해치하거나 채우고 내부 고립영역은 그래도 둡니다. (HPISLANDDETECTION 시스템 변수) | Damage or fill in the inside from the outer boundary. This option only harms or fills the specified area and leaves the internal isolation area. (HPISLANDDETECTION system variable) |
| ID_HAS_TOOLTIP_Transparency | 새 해치 또는 채우기에 대해 투명도 레벨을 설정하여 현재 객체 투명도를 재지정합니다. 현재 객체 투명도 설정을 사용하려면 현재 사용을 선택합니다. (HPTRANSPARENCY 시스템 변수) | Override the current object transparency by setting the transparency level for a new hatch or fill. To enable the current object transparency setting, select Use Current. (HPTRANSPARENCY system variable) |
| ID_HAS_TOOLTIP_TYPE | 미리 정의된 해치나 채우기를 작성할지 아니면 사용자 정의 해치를 작성할지 지정합니다. | Specifies whether to create a predefined hatch or fill, or a custom hatch. |
| ID_HAS_Transparency | 투명도 | Transparen. |
| ID_HAS_TRANSPARENCY_ByBlock | ByBlock | Byblock |
| ID_HAS_TRANSPARENCY_ByLayer | ByLayer | Bylayer |
| ID_HAS_TRANSPARENCY_SpecifyValue | 값 지정 | Specify Value |
| ID_HAS_TRANSPARENCY_UseCurrent | 현재 사용 | Use current |
| ID_HAS_TYPE | 유형 | Type |
| ID_HAS_TYPE_Custom | 사용자 | Custom |
| ID_HAS_TYPE_Gradient | 그라데이션 | Gradient |
| ID_HAS_TYPE_Pattern | 패턴 | Pattern |
| ID_HAS_TYPE_Solid | 솔리드 | Solid |
| ID_HAS_TYPE_UserDefined | 사용자 정의 | User defined2 |
| ID_HS_BUTTON_Apply | 확인 | Apply |
| ID_HS_BUTTON_Cancel | 취소 | Quit |
| ID_HS_GRADIENT_CURVED | 아래로(곡선) | Curved gradation toward bottom |
| ID_HS_GRADIENT_CYLINDER | 중앙으로(선형) | Cylindrical gradation toward center |
| ID_HS_GRADIENT_HEMISPHERICAL | 아래로(반원형) | Hemi-spherical gradation toward bottom |
| ID_HS_GRADIENT_INVCURVED | 위로(곡선) | Inverted curved gradation toward top |
| ID_HS_GRADIENT_INVCYLINDER | 양옆으로 | Inverted cylindrical gradation toward sides |
| ID_HS_GRADIENT_INVHEMISPHERICAL | 위로(반원형) | Inverted hemi-spherical gradation toward top |
| ID_HS_GRADIENT_INVSPHERICAL | 바깥으로(원형) | Inverted Spherical gradation toward sides |
| ID_HS_GRADIENT_LINEAR | 오른쪽으로 | Linear gradation toward right |
| ID_HS_GRADIENT_SPHERICAL | 중앙으로(원형) | Spherical gradation toward center |
| ID_HS_GROUP_CUSTOM | 사용자 | Custom |
| ID_HS_GROUP_Gradient | 그라데이션 | Gradient |
| ID_HS_GROUP_KOSDIC | KOSDIC - 건설분야 도면정보 교환표준 | KOSDIC |
| ID_HS_GROUP_OtherPredefined | 기타 미리 정의 | Other Predefined |
| ID_HS_GROUP_UserDefined | 사용자 정의 | User defined |
| ID_HS_TITLE | 해치 팔레트 | Hatch Palette |
| ID_HS_TOOLTIP_GRID | 타일 | Checkerboard |
| ID_HS_TOOLTIP_LIST | 목록 | List |
| ID_HS_TOOLTIP_REFRESH | 새로고침 (F5) | Refresh (F5) |
| ID_HS_WATERMARK_SEARCH | 이름 또는 설명 검색 | Search Name or Description |
| ID_HTD_AdjustScale_Description | 간격이 너무 좁지 않은 축척 값으로 해치 패턴을 작성합니다. | Create Hatch Pattern with a Scale Value Ensuring Adequate Spacing. |
| ID_HTD_AdjustScale_TITLE | 자동으로 해치 축척 조정 | Automatically adjust the hatch scale |
| ID_HTD_Description | 크고 간격이 좁은 해치 패턴은 시스템 메모리를 많이 사용하므로 전체 시스템 성능에 영향을 줍니다. 메모리가 부족하여 결과적으로 프로그램이 불안정해질 수 있습니다. 이 도면 파일을 여는 다른 사용자 누구에게나 이 문제가 발생할 수 있습니다. | Large, narrow hatch patterns consume a lot of system memory, which affects overall system performance. Insufficient memory can result in program instability. This problem can occur to anyone else who opens this drawing file. |
| ID_HTD_Skip_Description | 권장되지 않음 | not recommended |
| ID_HTD_Skip_TITLE | 간격이 좁은 해치 패턴 작성 | Create a dense hatch pattern |
| ID_HTD_Solid_Description | 해치 패턴을 솔리드로 변경합니다. | Change the hatch pattern to solid. |
| ID_HTD_Solid_TITLE | 솔리드 채우기 해치 작성 | Create a solid fill hatch |
| ID_HTD_TITLE | 간격이 좁은 해치 패턴 | Dense Hatch Pattern |
| ID_HW_Main1 | 인터페이스 | Interface |
| ID_HW_Main1_Sub1 | 화면구성 | Screen Configuration |
| ID_HW_Main1_Sub2 | 작업공간 | Workspace |
| ID_HW_Main2 | 사용자화 | Customization |
| ID_HW_Main2_Sub1 | 명령어아이콘바 | Command Icon Bar |
| ID_HW_Main2_Sub2 | 시스템설정 | System settings |
| ID_HW_Main2_Sub3 | 작업환경설정 | Workspace Settings |
| ID_HW_Main2_Sub4 | 단축키(별칭,단축키) 설정 | Shortcut Keys |
| ID_HW_Main3 | 듀얼화면 모드 | Dual Screen Mode |
| ID_HW_Main3_Sub1 | 3D 작업 전용 | 3D workspace |
| ID_HW_Main3_Sub2 | Layout 탭 분리 | Detach layout tab |
| ID_HW_Main3_Sub3 | 파일탭 분리(Read Only) | Detach File tab (read only) |
| ID_HW_Main5 | 명령어전체보기 | View All Commands |
| ID_HW_Main5_Sub1 | 명령어전체보기 | View All Commands |
| ID_HW_Main6 | 스타일 관리 | Styles |
| ID_HW_Main6_Sub1 | 선스타일 상세보기 | View Line Style Details |
| ID_HW_Main6_Sub2 | 문자스타일 상세보기 | View textStyle Details |
| ID_HW_Main6_Sub3 | 치수스타일 상세보기 | View Dim Style Details |
| ID_HW_Main7 | 객체특성관리 | Object Properties Management |
| ID_HW_Main7_Sub1 | 속성바,속성창(Properties) | Property bar, properties window (Properties) |
| ID_HW_Main7_Sub2 | 레이어 상세보기 | View Layer Details |
| ID_HW_Main7_Sub3 | 색상 상세보기 | View Color Details |
| ID_HW_Main8 | 통합블록관리 | Field Block Management |
| ID_HW_Main8_Sub1 | 블록창 | Block Window |
| ID_HW_Main8_Sub2 | 블록라이브러리 | Block management |
| ID_HW_Main9 | 인쇄 | Print |
| ID_HW_Main9_Sub1 | 인쇄창 | Print Window |
| ID_HW_Main9_Sub2 | 도곽자동맞춤 | Automatic Title Block Alignment |
| ID_HW_Title | 도움말 | Help |
| ID_LABEL_BAR_SELECTION_HEADER | 선택객체 | Selected |
| ID_LAD_Color | 색상 | Color |
| ID_LAD_Group | 그룹 | Group |
| ID_LAD_IsNewViewportFrozen | 새VP동결 | Frz New VP |
| ID_LAD_IsViewportFrozen | VP동결 | Frz VP |
| ID_LAD_LayerSet_01 | 끄기 | Off |
| ID_LAD_LayerSet_02 | 동결 | Frz |
| ID_LAD_LayerSet_03 | 잠금 | Lock |
| ID_LAD_LineType | 선스타일 | L-Type |
| ID_LAD_LineWeight | 선가중치(mm) | L-Weight(mm) |
| ID_LAD_Name | 레이어명 | Name |
| ID_LAD_Plot | 출력 | Print |
| ID_LAD_Transparency | 투명도(%) | Transp.(%) |
| ID_LAS_AllLayer | 모든 레이어 | All Layers |
| ID_LAS_Context_CurrentStyle | 현재 스타일: | Current Style : |
| ID_LAS_Context_Delete | 삭제 | Delete Objects |
| ID_LAS_Context_SetCurrent | 현재 레이어: | Current Layer : |
| ID_LAS_ERR_CannotCurrentLayerFrozen | 동결된 레이어는 현재 레이어가 될 수 없습니다. | Frozen layer cannot be current layer |
| ID_LAS_ERR_CannotDeleteCurrentLayer | 현재 레이어는 삭제할 수 없습니다. | Current layer cannot be deleted. |
| ID_LAS_ERR_CannotDeleteDefaultLayer | 기본 레이어는 삭제할 수 없습니다. | Default layer cannot be deleted. |
| ID_LAS_ERR_CannotDeleteUsingLayer | 객체에서 사용 중인 레이어는 삭제할 수 없습니다. | Layer in use cannot be deleted. |
| ID_LAS_ERR_CannotFrozenCurrentLayer | 현재 레이어는 동결할 수 없습니다. | Current layer connot be frozen. |
| ID_LAS_ERR_DefaultLayerName | 0 은 설정 하실 수 없습니다. 다른 이름을 지정해주세요 | 0"" cannot be set. Please choose a different name. |
| ID_LAS_ERR_DeleteLayerShowCase | 일부 레이어가 삭제되지 않았습니다. 다음과 같은 레이어는 삭제되지 않습니다.  1) 현재 레이어인 경우 2) 0번 레이어인 경우 3) 객체가 포함된 레이어 4) 특수 레이어 (DefPoints 등등) | Some layers could not be deleted. The following layers cannot be deleted.  1) The current layer 2) Layer 0 3) Layers containing objects 4) Special layers (e.g., DefPoints)"" |
| ID_LAS_ERR_DeleteUknownError | 레이어를 삭제할 수 없습니다 | Layer cannot be deleted. |
| ID_LAS_ERR_DuplicatedLayerName | 이미 존재하는 레이어 이름입니다. 다른 이름을 지정해주세요 | The layer name already exists. Please choose a different name. |
| ID_LAS_ERR_MaxLayerSet | 레이어 세트 아이템 생성은 최대 {0}까지 가능합니다. | A maximum of {0} layer set items can be created |
| ID_LAS_Layer | 레이어 | Layer |
| ID_LAS_Layer_ExcessLayerFilters | 레이어 필터 초과 | Excess Layer Filters |
| ID_LAS_Layer_ExcessLayerFilters_Description | 이 도면에는 레이어보다 레이어 필터가 더 많습니다.  오류로 인해 레이어 필터가 초과 작성되었을 수 있습니다. 레이어 필터가 너무 많으면 성능이 저하됩니다.  모든 레이어 필터 삭제하시겠습니까? (삭제 권장) | There are more layer filters in this drawing than layers.  Extra layer filters might have been created in error. Too many layer filters can result in slower performance.  What do you want to delete all layer filters? (recommend deletion.) |
| ID_LAS_MSG_ForceDelete | 레이어를 강제로 삭제합니다. 해당 레이어를 사용중인 객체는 기본레이어 '0'로 변경됩니다. | The layer will be forcibly deleted. Objects using this layer will be moved to the default layer '0'. |
| ID_LAS_Search_WaterMark | # 레이어명 | # LayerName |
| ID_LAS_Title | 레이어 | Layers |
| ID_LAS_XRef | 외부참조 | XRef Layers |
| ID_LAYER_CheckBox_TEXT_01 | 색상 | Color |
| ID_LAYER_CheckBox_TEXT_02 | 선종류 | Line Type |
| ID_LAYER_CheckBox_TEXT_03 | 선가중치 | Lineweight |
| ID_LAYER_CheckBox_TEXT_04 | 투명도 | Transparency |
| ID_LAYER_GroupName_01_01 | 레이어 | Modify |
| ID_LAYER_GroupName_01_02 | 변경 | Layer |
| ID_LAYER_GroupName_02_01 | 레이어 | Lock |
| ID_LAYER_GroupName_02_02 | 잠그기 | Layer |
| ID_LAYER_GroupName_03_01 | 레이어특성 | Modify |
| ID_LAYER_GroupName_03_02 | 변경하기 | Layer Properties |
| ID_LAYER_GroupName_04_01 | 레이어 | Freeze |
| ID_LAYER_GroupName_04_02 | 동결하기 | Layer |
| ID_LAYER_GroupName_05_01 | 선택레이어 | Layer |
| ID_LAYER_GroupName_05_02 | 인쇄 켜기, 끄기 | Plotting |
| ID_LAYER_GroupName_06_01 | 레이어 | Delete |
| ID_LAYER_GroupName_06_02 | 삭제 | Layer |
| ID_LAYER_GroupName_07_01 | 다른레이어로 | Merge |
| ID_LAYER_GroupName_07_02 | 병합하기 | Layers |
| ID_LAYER_GroupName_08_01 | 레이어 | Layer |
| ID_LAYER_GroupName_08_02 | 관리 | Management |
| ID_LAYER_GroupName_09_01 | 레이어 | Layer |
| ID_LAYER_GroupName_09_02 | 켜기, 끄기 | Visibility |
| ID_LAYER_GroupName_10_01 | 레이어 | Copy/Change |
| ID_LAYER_GroupName_10_02 | 변경하여 복사 | Layer |
| ID_LAYER_GroupName_11_01 | 선택레이어만 | Isolate |
| ID_LAYER_GroupName_11_02 | 분리하여 켜기 | Layer |
| ID_LAYER_RadioButton_LAYISO_01 | 레이어 끄기 | Turn Off Layer |
| ID_LAYER_RadioButton_LAYISO_02 | 레이어 동결 | Freeze Layer |
| ID_LAYER_RadioButton_LAYISO_03 | 레이어 잠그기 | Lock Layer |
| ID_LAYER_TextBlock_COPYTOLAYER | 새 레이어로 변경시 레이어명 | Name of New Layer |
| ID_LAYER_TextBlock_LAYISO | 선택 이외의 객체 레이어 표시 방법 | Control Visibility of Layers Except for Selected Objects |
| ID_LAYOUT_MSG_COPYFAIL | 배치 복사에 실패했습니다. | Layout copy failed. |
| ID_LAYOUT_MSG_CREATEFAIL | 배치 생성에 실패했습니다. | Layout creation failed. |
| ID_LAYOUT_MSG_DELETE_0 | 선택된 배치가 영구적으로 삭제될 것입니다. | The selected layout will be deleted. |
| ID_LAYOUT_MSG_DELETE_1 | 확인을 클릭하여 선택된 배치를 삭제하십시오. | To delete the selected layout, click OK. |
| ID_LAYOUT_MSG_DELETE_2 | 취소를 클릭하여 삭제를 취소하십시오. | To cancel the deletion, click Cancel. |
| ID_LAYOUT_MSG_DELETE_3 | 모형 탭은 삭제되지 않을 것입니다. | The Model tab will not be deleted. |
| ID_LAYOUT_MSG_RENAMEFAIL_3D | 이 배치 이름은 사용할 수 없습니다. | This name is not available. |
| ID_LBT_ERR_CommandAlreadyExecuting | 다른 명령이 수행중입니다. 수행중인 명령을 종료해주세요. | Another command is being excuted. Please end the command. |
| ID_LBT_ERR_EXISTRECENTFILE | 지정된 도면 파일을 찾을 수 없습니다. 파일이 존재하지 않거나 파일에 접근할 수 없습니다. | The specified drawing file could not be found. The file does not exist or cannot be accessed. |
| ID_LBT_ERR_EXPORTFAIL | 사용자 설정을 내보내는데 실패했습니다. 관리자에게 문의해주시기 바랍니다. | Failed to export user settings. Please contact the administrator |
| ID_LBT_ERR_IMPORTFAIL | 사용자 설정을 가져오는데 실패했습니다. 관리자에게 문의해주시기 바랍니다. | Failed to import user settings. Please contact the administrator |
| ID_LBT_ERR_SendLimit | 메일은 1분당 1개만 전송 가능합니다 | Only one email can be sent per minute. |
| ID_LBT_ERR_SendLogFail | 관리자에게 로그를 보낼 수 없습니다. 인터넷 연결을 확인 해주시고, 이상이 없을 시 관리자에게 문의바랍니다. | Unable to send logs to the administrator.&#xaPlease check your internet connection, and if the issue persists, contact the administrator. |
| ID_LBT_MSG_EXPORTSUCCESS | 사용자 설정을 내보냈습니다. | User settings have been exported. |
| ID_LBT_MSG_IMPORTSUCCESS | 사용자 설정을 가져왔습니다. | User settings have been imported. |
| ID_LBT_MSG_SENDLOGSUCCESS | 관리자에게 진단정보를 전송하였습니다. | Diagnostic information has been sent to the administrator |
| ID_LGHT_ERR_DuplicatedGroupName | 이미 존재하는 레이어 그룹 이름입니다. 다른 이름을 지정해주세요 | The layer group name already exists. Please choose a different name. |
| ID_LGHT_ERR_NoGroupName | 레이어 그룹 이름이 비어있습니다. 레이어 그룹 이름을 입력해주세요 | The layer group name is empty. Please enter a layer group name. |
| ID_LGHT_TextBlock_FEATURE | 특성 | Properties |
| ID_LIMB_Layer | 레이어 | Layer |
| ID_LIMB_Layer_Current | 현재 레이어 : | Current Layer : |
| ID_LIMB_Layer_Description | 도면에 정의된 레이어 및 레이어 설정을 선택하여 현재 도면층으로 만들 수 있습니다. | You can select a layer and its settings defined in the drawing to make it the current layer. |
| ID_LIMB_Layer_SelectedEntity | 선택된 객체 레이어 : | Selected Entity Layer : |
| ID_LLS_Advanced | 레이어 상세 | Open Layer |
| ID_LLS_Title | 레이어 | Layer |
| ID_LLS_ToolTip_Advanced | 레이어 상세 설정창이 열립니다 | Open advanced settings |
| ID_LR_RenameLayout_Label_Rename | Name : | Name |
| ID_LR_Upper_DetailLabel | 상세보기 | Properties |
| ID_LR_Upper_ToolTip_Close | 닫기 | Close |
| ID_LR_Upper_ToolTip_Maximize | 최대화 | Maximize |
| ID_LR_Upper_ToolTip_Minimize | 최소화 | Minimize |
| ID_LR_Upper_ToolTip_Normal | 이전 크기로 복원 | Normal |
| ID_LSAS_ArrowSize | 크기 | Size |
| ID_LSAS_BlockScale | 축 척 | Scale |
| ID_LSAS_CheckBox_Angle1 | 1st 꺾기 각도 | First segment angle |
| ID_LSAS_CheckBox_Angle2 | 2nd 꺾기 각도 | Second segment angle |
| ID_LSAS_Color | 색 상 | Color |
| ID_LSAS_ConnectionLine | 연결선 | Landing |
| ID_LSAS_ConnectionLineLength | 길이 B = | L (B) = |
| ID_LSAS_DetailMLeaderStyle | 지시선 스타일 상세보기 | MLeader Style Details |
| ID_LSAS_DimScale | 치수 스케일 | Dimension scale |
| ID_LSAS_ERR_AlreadyExistStyleName | 이미 있는 스타일 이름입니다. 다른 스타일 이름을 입력해주세요. | The style name already exist. Please in a different name. |
| ID_LSAS_ERR_CannotDeleteCurrentStyle | 현재로 설정된 스타일은 삭제할 수 없습니다. | The currently set style cannot be deleted. |
| ID_LSAS_ERR_CannotDeleteUsingStyle | 사용중인 스타일은 지울 수 없습니다. | A style in use cannot be deleted. |
| ID_LSAS_ERR_NoStyleName | 스타일 이름이 비어있습니다. 스타일 이름을 입력해주세요. | Style name is empty. In style name please. |
| ID_LSAS_LineShpae | 형상 | Display |
| ID_LSAS_LineStyle | 선 스타일 | Line style |
| ID_LSAS_Linetype | 선 꼴 | L-Style |
| ID_LSAS_LineWeight | 선 가중치 | L-Weight |
| ID_LSAS_MLeaderDisplay | 형상 | Display |
| ID_LSAS_MLeaderStyle | 지시선 스타일 | Leader line style |
| ID_LSAS_MLeaderStyleAdmin | 지시선 스타일 관리자 | MLeader Style Admin |
| ID_LSAS_MLeaderStyleName | 스타일 명 : | MLeaderStyle Name : |
| ID_LSAS_MLeaderType | 유형 | L-Type |
| ID_LSAS_MoreTextAttachmentWindowTitle | 수평 연결 선택창 | More textattachments |
| ID_LSAS_MSG_StopStyleModify | 스타일 편집을 중단하시겠습니까? | Do you want to stop editing the style? |
| ID_LSAS_RadioButton_BottomLineUnderLine | 맨 아래행에 밑줄 | Underline |
| ID_LSAS_RadioButton_BottomOfBottom | 맨 아래 행의 맨 아래 | Bottom of Bottom Row |
| ID_LSAS_RadioButton_Center | 중심 | Center |
| ID_LSAS_RadioButton_CenterUnderLine | 중심 & 밑줄 | Center & Underline |
| ID_LSAS_RadioButton_ContentBlock | 블록 | Block |
| ID_LSAS_RadioButton_ContentLeader | 지시선만 | None |
| ID_LSAS_RadioButton_ContentText | 문자 | Mtext |
| ID_LSAS_RadioButton_MiddleOfText | 문자의 중간 | Middle of Multiline Text |
| ID_LSAS_RadioButton_MiddleOfTop | 맨 위 행의 중간 | Middle of Top Row |
| ID_LSAS_RadioButton_ScaleAll | 치수전체 | Overall DimScale |
| ID_LSAS_RadioButton_Space | 도면공간 | Layout Scale |
| ID_LSAS_RadioButton_TextFrame1 | 없음 | None |
| ID_LSAS_RadioButton_TextFrame2 | 그리기 | Draw |
| ID_LSAS_RadioButton_TopOfTop | 맨 위 행의 맨 위 | Top of Top Row |
| ID_LSAS_Spline | 스플라인 | Spline |
| ID_LSAS_Straight | 직선 | Straight |
| ID_LSAS_SubGroup_LineType | 선 타입 | Line type |
| ID_LSAS_TextBlock_Angle | 꺾기 각도 | Leader Angle |
| ID_LSAS_TextBlock_Arrow | 화살촉 | Arrowhead |
| ID_LSAS_TextBlock_AttachHor | 수평 연결 | H-Attach. |
| ID_LSAS_TextBlock_AttachVer | 수직 연결 | V-Attach. |
| ID_LSAS_TextBlock_Block | 모양 | Shape |
| ID_LSAS_TextBlock_BlockColor | 색 상 | Color |
| ID_LSAS_TextBlock_BlockType | 블록 타입 | Block Options |
| ID_LSAS_TextBlock_Break | 지시선 끊기 | Leader Break |
| ID_LSAS_TextBlock_BreakComment | 다른 객체와 교차하는 지시선의 끊기 길이 | * Break size of leader intersecting another object |
| ID_LSAS_TextBlock_BreakCommentLeader | 다른 객체와 교차하는 지시선의 끊기 길이 | * Break size of leader intersecting another object |
| ID_LSAS_TextBlock_BreakSize | 길이 A = | L (A) = |
| ID_LSAS_TextBlock_Content | 지시선 내용 유형 | Content Type |
| ID_LSAS_TextBlock_DetailCallOut | 상세 콜아웃 | Detailed Callout |
| ID_LSAS_TextBlock_Gap | 연결선 간격 | Landing Gap |
| ID_LSAS_TextBlock_Landing | 연결선 | Landing |
| ID_LSAS_TextBlock_LandingSize | 길이 B = | L (B) = |
| ID_LSAS_TextBlock_TagCircle | 원 | Circle |
| ID_LSAS_TextBlock_TagTriangle | 삼각형 | Triangle |
| ID_LSAS_TextBlock_TextFrame | 테두리 | Text Frame |
| ID_LSAS_TextBlock_TextHeight | 높 이 | Height |
| ID_LSAS_TextBlock_TextStyle | 글 꼴 | Font |
| ID_LSAS_TextBlock_ViewPort | 뷰포트 스케일 맞춤 | Fit Viewport Scale |
| ID_LSAS_TextHeight | 문자 높이 | Text Height |
| ID_LSAS_TextType | 문자 타입 | Text Options |
| ID_LSAS_Title | 지시선 스타일 | Leader style |
| ID_LSAS_ToolTip_Angle1 | 지시선의 첫 번째 점 각도를 지정합니다.(FirstSegmentAngleConstraint) | Specifies the angle of the first segment angle of the leader. |
| ID_LSAS_ToolTip_Angle2 | 지시선의 두 번째 점 각도를 지정합니다.(SecondSegmentAngleConstraint) | Specifies the angle of the second segment angle of the leader. |
| ID_LSAS_ToolTip_AttachHor | 다중 지시선 문자에 대한 연결선 부착을 수평으로 조정합니다.(AttachmentHorizontal) | Horizontally adjusts the attachment line attachment for multileader text. |
| ID_LSAS_ToolTip_AttachVer | 다중 지시선 문자에 대한 연결선 부착을 수직으로 조정합니다.(AttachmentVertical) | Vertically adjusts the attachment line attachment for multileader text. |
| ID_LSAS_ToolTip_BlockScale | 블록의 축척을 지정합니다.(BlockScale) | Sets the scale of block. |
| ID_LSAS_ToolTip_BreakSize | 다중 지시선을 선택한 경우 DIMBREAK 명령에 사용되는 끊기 크기를 표시하고 설정합니다.(BreakSize) | Displays and sets the break size used by the DIMBREAK command when multileaders are selected. |
| ID_LSAS_ToolTip_Color | 지시선의 색상을 반영합니다.(LeaderLineColor) | Sets the color of leader. |
| ID_LSAS_ToolTip_ContentType | 다중 지시선이 문자 또는 블록을 포함할지 여부를 결정합니다. 이 선택은 이 대화상자에서 사용 가능한 다른 옵션에 영향을 줍니다. (ContentType) | Determines whether multileaders include text or blocks. This selection affects the other options available in this dialog. |
| ID_LSAS_ToolTip_DetailCallOut | 다중 지시선 컨텐츠에 사용된 블록을 상세 콜아웃으로 지정합니다.(BlockType) | Specifies the block used for multileader content as a detailed callout. |
| ID_LSAS_ToolTip_Gap | 연결선과 다중 지시선 문자 사이의 거리를 지정합니다.(LandingGap) | Specifies the distance between the connector and multileader text. |
| ID_LSAS_ToolTip_Landing | 수평 연결선을 다중 지시선 컨텐츠에 부착합니다.(EnableLanding) | Attach horizontal connectors to multileader content. |
| ID_LSAS_ToolTip_LandingSize | 다중 지시선 연결선의 고정 거리를 결정합니다. | Determines the fixed distance for multileader connectors. |
| ID_LSAS_TOOLTIP_LEADERSCALE | 지시선 축척 | Leader Scale |
| ID_LSAS_ToolTip_Line | 지시선의 선종류를 결정합니다.(LeaderLineTypeName) | Determine the linetype of leader. |
| ID_LSAS_ToolTip_Spline | 지시선의 유형을 스플라인으로 설정합니다.(LeaderLineType) | Sets the type of leader to spline. |
| ID_LSAS_ToolTip_Straight | 지시선의 유형을 직선으로 설정합니다.(LeaderLineType) | Sets the type of leader to continuous line. |
| ID_LSAS_ToolTip_TagCircle | 다중 지시선 컨텐츠에 사용된 블록을 원으로 지정합니다.(BlockType) | Specifies the block used for multileader content as a circle. |
| ID_LSAS_ToolTip_TextFrame | 다중 지시선 문자 컨텐츠를 문자 상자로 프레임합니다 연결선 간격 설정을 수정하여 문자와 프레임 간 분리를 조정합니다.(EnableFrameText) | Frame multileader text content into a text box Modify the connector spacing setting to adjust the separation between text and frames. |
| ID_LSAS_ToolTip_TextHeight | 다중 지시선 문자의 높이를 지정합니다.(TextHeight) | Sets the height for multileader text. |
| ID_LSAS_ToolTip_Weight | 지시선의 선가중치를 결정합니다.(LeaderLineWeight) | Determine the line weight of leader. |
| ID_LSIMB_LineScale | 스케일 | LineScale |
| ID_LSIMB_ToolTip_Advanced | 선택된 객체가 없을 때 사용할 선 축척을 변경하거나, 선택된 객체의 선 축척를 변경할 수 있습니다. | Change the line scale to use when no objects are selected, or change the line scale for selected objects. |
| ID_LSIMB_ToolTip_Current | 현재 선 축척 : | Current line scale : |
| ID_LSIMB_ToolTip_Selected | 선택된 객체 선 축척 : | Selected Object line scale : |
| ID_LTAS_Apply | 적용 | Apply |
| ID_LTAS_Block | 블록 | Block |
| ID_LTAS_Cancel | 취소 | Quit |
| ID_LTAS_CreateEditStyle | 내 스타일 생성 및 수정하기 | Line Style Details |
| ID_LTAS_Edit | 수정 | Edit |
| ID_LTAS_ERR_AlreadyExistStyle | 이미 있는 스타일 이름입니다. 다른 스타일 이름을 입력해주세요. | The style name already exists. Please enter a different name. |
| ID_LTAS_ERR_CannotDeleteCurrentStyle | 현재로 설정된 스타일은 삭제할 수 없습니다. | The currently active style cannot be deleted. |
| ID_LTAS_ERR_CannotDeleteUsingStyle | 사용중인 스타일은 지울 수 없습니다. | Styles in use cannot be deleted. |
| ID_LTAS_ERR_NoStyleName | 스타일 이름이 비어있습니다. 스타일 이름을 입력해주세요. | The style name is empty. Please enter a style name |
| ID_LTAS_Line | 선 | Line |
| ID_LTAS_LINE_Block | 블록만 | Block only |
| ID_LTAS_LINE_BlockText | 블록+문자 | Block+Text |
| ID_LTAS_LINE_Continuous | 실선 | Continuous |
| ID_LTAS_LINE_DashDot | 점선 | Dotted |
| ID_LTAS_LINE_DashSpace | 파선 | Dashed |
| ID_LTAS_LINE_DoubleDashDot | 외곽선 | Dash(2)-dot |
| ID_LTAS_LINE_LineBlock | 선+블록 | Line+Block |
| ID_LTAS_LINE_LineBlockText | 선+블록+문자 | Line+Block+Text |
| ID_LTAS_LINE_LineText1 | 선+문자(1) | Line+Text(1) |
| ID_LTAS_LINE_LineText2 | 선+문자(2) | Line+Text(2) |
| ID_LTAS_LINE_LongDashDot | 일점쇄선 | Dash-dot |
| ID_LTAS_LINE_LongDashDouble | 이점쇄선 | Dash-dot(2) |
| ID_LTAS_LINE_LongDashDoubleShortDash | 가상선 | Phantom |
| ID_LTAS_LINE_LongDashShortDash | 중심선 | Center line |
| ID_LTAS_LINE_LongDashTripple | 삼점쇄선 | Dash-dot(3) |
| ID_LTAS_LINE_Text | 문자만 | Text only |
| ID_LTAS_LineStyle | 선 스타일 | Line style |
| ID_LTAS_LineStyleAdmin | 선 스타일 관리자 | Line Style Admin |
| ID_LTAS_LineStyleName | 스타일 명 : | Style Name: |
| ID_LTAS_LineType | 선 꼴 | Line Type |
| ID_LTAS_MSG_StopStyleModify | 스타일 편집을 중단하시겠습니까? | Do you want to cancel style editing? |
| ID_LTAS_Text | 내용 | Annotate Slope Ratio |
| ID_LTAS_TextStyle | 문자 스타일 | Text style |
| ID_LTAS_Title | 선 스타일 | Line types |
| ID_LTCB_TEXTBLOCK_TEXT_01 | 건설 CALS 선꼴 확인 | construction line styles |
| ID_LTELV_TEXTBLOCK_TEXT_01 | 건설 CALS 선꼴 | construction line styles |
| ID_LTELV_TITLE | 건설 CALS 선꼴 | construction line styles |
| ID_LTIMB_LineType | 선 스타일 | LineType |
| ID_LTIMB_ToolTip_Advanced | 선택된 객체가 없을 때 사용할 선 스타일을 선택하거나, 선택된 객체의 선 스타일을 변경할 수 있습니다. | Change the line type to use when no objects are selected, or change the line type for selected objects. |
| ID_LTIMB_ToolTip_Current | 현재 선 스타일 : | Current line type : |
| ID_LTIMB_ToolTip_Selected | 선택된 객체 선 스타일 : | Selected Object line type : |
| ID_LTPAB_RotationDegree | 회전 | Rotation |
| ID_LTPAB_Scale | 비율 | Scale |
| ID_LTPAB_Text | 내용 | Text |
| ID_LTPAB_XOffset | X 이격 | XOffset |
| ID_LTPAB_YOffset | Y 이격 | YOffset |
| ID_LTS_Advanced | 선스타일 상세 | Advanced settings |
| ID_LTS_Title | 선 스타일 | LineType |
| ID_LTS_ToolTip_Advanced | 선 스타일 상세 설정창이 열립니다. | Open advanced settings. |
| ID_LWIMB_LineWeight | 가중치 | LineWeight |
| ID_LWIMB_ToolTip_Advanced | 선택된 객체가 없을 때 사용할 선가중치를 선택하거나, 선택된 객체의 선가중치를 변경할 수 있습니다. | Change the line weight to use when no objects are selected, or change the line weight for selected objects. |
| ID_LWIMB_ToolTip_Current | 현재 선가중치 : | Current line weight : |
| ID_LWIMB_ToolTip_Selected | 선택된 객체 선가중치 : | Selected Object line weight : |
| ID_MEASURE_CommandButton_ADDTEXTVALUE | 입력값으로 일괄연산 | Batch Calculation Using In Values |
| ID_MEASURE_CommandButton_AREA | 면적/둘레조회 | Area/Perimeter Inquiry |
| ID_MEASURE_CommandButton_ARET | 면적쓰기 | Write Area |
| ID_MEASURE_CommandButton_CALCULATOR | 계산기 | Calculator |
| ID_MEASURE_CommandButton_CALCULATOR2 | 고급계산기 | Advanced Calculator |
| ID_MEASURE_CommandButton_CHECKDIRECTION | 선/폴리선 방향표시 | Display Object Direction |
| ID_MEASURE_CommandButton_COORDINATESEXPORT | 객체 좌표 액셀로 내보내기 | Export Object Coordinates to EXCEL |
| ID_MEASURE_CommandButton_DIST | 두점 사이 거리조회 | Measure Distance |
| ID_MEASURE_CommandButton_DISTANCETEXT | 거리쓰기 | Write Distance |
| ID_MEASURE_CommandButton_DISTANCETOPOINT | 지정점 마다 거리쓰기 | Multiple Distances from Point |
| ID_MEASURE_CommandButton_DIV | 나누기 | Division |
| ID_MEASURE_CommandButton_DRAWINGFORMSCALE | 도곽축척조회 | Title Block Scale Inquiry |
| ID_MEASURE_CommandButton_EXPORTCTE | 선택순서대로 좌표 액셀로 내보내기 | Export Coordinates to EXCEL With Selection Order |
| ID_MEASURE_CommandButton_FILTER | 특성/유형별 객체조회 | Selection Filtering |
| ID_MEASURE_CommandButton_FILTERSELECT | 필터 객체 선택 | Filter Object Selection |
| ID_MEASURE_CommandButton_FINDBLOCK | 블록찾기 | Find Block |
| ID_MEASURE_CommandButton_FINDRADIUS | 반지름 찾기 | Find Radius |
| ID_MEASURE_CommandButton_GEOMETRYAREA | 지적도 용도 /면적조회 | Cadastral Data Query |
| ID_MEASURE_CommandButton_HATCHAREA | 해치패턴별 면적조회 | Hatch Area Inquiry |
| ID_MEASURE_CommandButton_ID | 선택점 좌표조회 | Query Coordinates |
| ID_MEASURE_CommandButton_INQUIRECOLOR | 색상조회 | Color Inquiry |
| ID_MEASURE_CommandButton_LIST | 객체 특성조회 | Object Properties Inquiry |
| ID_MEASURE_CommandButton_MASSPROP | 물성치 조회 | Mass Properties Inquiry |
| ID_MEASURE_CommandButton_MEASUREGEOM | 거리/반지름/각도 /면적/체적조회 | Geometric Inquiry |
| ID_MEASURE_CommandButton_MINUS | 빼기 | Subtraction |
| ID_MEASURE_CommandButton_PLUS | 더하기 | Addition |
| ID_MEASURE_CommandButton_PROPERTIES | 객체특성조회/수정 | Properties Palette |
| ID_MEASURE_CommandButton_QLIST | 선택된 객체의 길이/면적조회 | Area/Length Inquiry |
| ID_MEASURE_CommandButton_QSELECT | 특성/유형별 객체선택 | Select Objects by Property/Type |
| ID_MEASURE_CommandButton_QSELECT2 | 다각형 모양으로 객체선택 | Select Objects Using Polygon Shape |
| ID_MEASURE_CommandButton_SCALEDISTANCE | 축척이 사용된 거리조회 | Measure Scaled Distance |
| ID_MEASURE_CommandButton_SELECTSIMILAR | 선택한 객체의 특성과 동일한 객체선택 | Select Similar Objects |
| ID_MEASURE_CommandButton_TIMES | 곱하기 | Multiplication |
| ID_MEASURE_CommandButton_TINCREMENT | 연속숫자증가 | Incremental Number Sequence |
| ID_MEASURE_CommandButton_WRITELENGTH | 객체 길이쓰기 | Write Object Length |
| ID_MEASURE_CommandButton_XYPOINT | 선택점좌표쓰기 | Write Coordinates |
| ID_MEASURE_GroupName_01_01 | 형상정보 | Geometry |
| ID_MEASURE_GroupName_01_02 | 조회 | Inquiry |
| ID_MEASURE_GroupName_02_01 | 블록,반지름 | Find |
| ID_MEASURE_GroupName_02_02 | 찾기 | Block / Radius |
| ID_MEASURE_GroupName_03_01 | 객체특성 | Object Properties |
| ID_MEASURE_GroupName_03_02 | 조회 | Inquiry |
| ID_MEASURE_GroupName_04_01 | 좌표 조회 | Coordinate |
| ID_MEASURE_GroupName_04_02 | 및 | Inquiry |
| ID_MEASURE_GroupName_05_01 | 계산기 | Calculator |
| ID_MEASURE_GroupName_06_01 | 조회값(좌표,거리 면적) | Write |
| ID_MEASURE_GroupName_06_02 | 쓰기 | Inquiry Values |
| ID_MEASURE_GroupName_07_01 | 사칙연산 | Basic Arithmetic Operation |
| ID_MEASURE_GroupName_08_01 | 동일한 특성의 객체 | Select |
| ID_MEASURE_GroupName_08_02 | 선택하기 | Similar Objects |
| ID_MEASURE_GroupName_09_01 | 측정 값 | Drawing Units |
| ID_MEASURE_RadioButton_ANGDIR_01 | 시계반대방향 | Counterclockwise |
| ID_MEASURE_RadioButton_ANGDIR_02 | 시계방향 | Clockwise |
| ID_MEASURE_RadioButton_AUNITS_01 | 도/분/초 | D/M/S |
| ID_MEASURE_RadioButton_AUNITS_02 | 그리드 | Gradians |
| ID_MEASURE_RadioButton_AUNITS_03 | 라디안 | Radians |
| ID_MEASURE_RadioButton_AUNITS_04 | 십진도수 | Decimal Degrees |
| ID_MEASURE_RadioButton_AUNITS_05 | 측량사 단위 | Surveyor Units |
| ID_MEASURE_RadioButton_LUNITS_01 | 십진 | Decimal |
| ID_MEASURE_RadioButton_LUNITS_02 | 건축(ft-in) | Archi (ft-in) |
| ID_MEASURE_RadioButton_LUNITS_03 | 공학(ft-in) | Eng (ft-in) |
| ID_MEASURE_RadioButton_LUNITS_04 | 과학 | Scientific |
| ID_MEASURE_RadioButton_LUNITS_05 | 분수 | Fractional |
| ID_MEASURE_TextBlock_ANGBASE | 기준각도 | Base Angle |
| ID_MEASURE_TextBlock_ANGDIR | 각도 방향 | Angle Direction |
| ID_MEASURE_TextBlock_AUNITS | 각도단위 | Angle Unit |
| ID_MEASURE_TextBlock_AUPREC | 각도정밀도 | Angle Precision |
| ID_MEASURE_TextBlock_AUPREC_02 | 자리 | decimal places |
| ID_MEASURE_TextBlock_EXPLAIN_01 | * 객체의 정보가 표시될 때 사용되는 단위 | * Units used when displaying object information |
| ID_MEASURE_TextBlock_EXPLAIN_02 | * 치수표시단위와는 별개 | * Independent of dimension display units |
| ID_MEASURE_TextBlock_EXPLAIN_03 | * 치수표시단위는 치수스타일에서 지정 | * Dimension units are defined in the dimension style |
| ID_MEASURE_TextBlock_LUNITS | 길이단위 | Length Unit |
| ID_MEASURE_TextBlock_LUPREC | 길이정밀도 | Length Precision |
| ID_MEASURE_TextBlock_LUPREC_02 | 자리 | decimal places |
| ID_MLSS_Advanced | 여러줄 스타일 상세보기 | Advanced settings |
| ID_MLSS_Title | 여러줄 스타일 | MlineStyle |
| ID_MLSS_ToolTip_Advanced | 여러줄 스타일 상세 설정창이 열립니다 | Open advanced settings |
| ID_MODELING_CommandButton_MESH | 폴리곤 메쉬 | Polygon Mesh |
| ID_MODELING_CommandButton_MESH_BOX | 상자 메쉬 | Mesh Box |
| ID_MODELING_GroupName_01_01 | 솔리드 | Create |
| ID_MODELING_GroupName_01_02 | 만들기 | Solid Object |
| ID_MODELING_GroupName_02_01 | 3D 표면 | Create |
| ID_MODELING_GroupName_02_02 | 작성 | 3D Surface |
| ID_MODELING_GroupName_03_01 | 단면 이용 | Create |
| ID_MODELING_GroupName_03_02 | 하여 | Profile-Based Surface |
| ID_MODELING_GroupName_04_01 | 복합객체(객체연산) | Boolean Operations |
| ID_MODELING_GroupName_05_01 | 메쉬 | Create |
| ID_MODELING_GroupName_05_02 | 만들기 | Mesh |
| ID_MODELING_GroupName_06_01 | 선을 이용 | Create |
| ID_MODELING_GroupName_06_02 | 하여 | Surface |
| ID_MODELING_GroupName_06_03 | 메쉬 | Using Lines |
| ID_MODELING_GroupName_07_01 | 표면 | Modify |
| ID_MODELING_GroupName_07_02 | 수정 | Surface |
| ID_MODELING_GroupName_08_01 | 원본모형 | Source Model Update |
| ID_MODELING_GroupName_08_02 | 업데이트 | Settings |
| ID_MODELING_RadioButton_DELEBJ_01 | 유지 | Keep |
| ID_MODELING_RadioButton_DELEBJ_02 | 삭제 | Delete |
| ID_MODELING_RadioButton_DELEBJ_03 | 경고메세지 | Warning Message |
| ID_MODELING_RadioButton_SHOWHIST_01 | 표시 안함 | Hide |
| ID_MODELING_RadioButton_SHOWHIST_02 | 표시 안함(모든 솔리드) | Hide All Solids |
| ID_MODELING_RadioButton_SHOWHIST_03 | 표시 | Show |
| ID_MODELING_RadioButton_SOLIDCHECK_01 | 켜기 | Turn On |
| ID_MODELING_RadioButton_SOLIDCHECK_02 | 끄기 | Turn Off |
| ID_MODELING_RadioButton_SOLIDHIST_01 | 기록 안함 | Do Not Record |
| ID_MODELING_RadioButton_SOLIDHIST_02 | 기록 | Record |
| ID_MODELING_RadioButton_SURFACEASSOCIATIVITY_01 | 있음 | ON |
| ID_MODELING_RadioButton_SURFACEASSOCIATIVITY_02 | 없음 | OFF |
| ID_MODELING_RadioButton_SURFACEMODELINGMODE_01 | 절차표면 | Procedural Surface |
| ID_MODELING_RadioButton_SURFACEMODELINGMODE_02 | NURBS표면 | NURBS Surface |
| ID_MODELING_RadioButton_SURFTYPE_01 | 2차원 B-스플라인 | 2D B-Spline |
| ID_MODELING_RadioButton_SURFTYPE_02 | 3차원 B-스플라인 | 3D B-Spline |
| ID_MODELING_RadioButton_SURFTYPE_03 | 베지어 스플라인 | Bezier Spline |
| ID_MODELING_RadioButton_VIEWUPDATEAUTO_01 | 수동 | Manual |
| ID_MODELING_RadioButton_VIEWUPDATEAUTO_02 | 자동 | Automatic |
| ID_MODELING_TextBlock_SOLIDCHECK_OFF | 원본객체 표시 안함 | Do Not Display Original Object |
| ID_MODELING_TextBlock_SOLIDCHECK_ON | 원본객체 표시 | Display Original Objects |
| ID_MODELING_TextBlock_SURFTAB1 | M방향 메쉬 밀도 | M-Direction Mesh Density |
| ID_MODELING_TextBlock_SURFTAB2 | N방향 메쉬 밀도 | N-Direction Mesh Density |
| ID_MODIFY_CommandButton_3DARRAY | 3D 배열 | 3D Array |
| ID_MODIFY_CommandButton_ARRAY | 배열 | Create Copies of Objects in an Array |
| ID_MODIFY_CommandButton_ARRAYCLOSE | 배열 닫기 | Close Edit Array |
| ID_MODIFY_CommandButton_ARRAYEDIT | 배열 편집 | Edit Array |
| ID_MODIFY_CommandButton_ARRAYPATH | 경로 배열 | Path Array |
| ID_MODIFY_CommandButton_ARRAYPOLAR | 원형 배열 | Circular Array |
| ID_MODIFY_CommandButton_ARRAYRECT | 직사각형 배열 | Rectangular Array |
| ID_MODIFY_CommandButton_AVE | 폴리선 정점 추가 | Add polyline vertices |
| ID_MODIFY_CommandButton_BOP | 한점에서 끊기 | Break at One Point |
| ID_MODIFY_CommandButton_BRA | 모든 교차점 끊기 | Break at All Intersections |
| ID_MODIFY_CommandButton_BRD | 지정 거리마다 끊기 | Break at Specified Distance |
| ID_MODIFY_CommandButton_BRE | 입력 거리로 끊기 | Break by Distance |
| ID_MODIFY_CommandButton_BREAK | 한점 또는 두점끊기 | Break at One or Two Points |
| ID_MODIFY_CommandButton_BRI | 객체 기준 교차점 끊기 | Break at Object-Based Intersection |
| ID_MODIFY_CommandButton_BSP | 선택점마다 끊기 | Break at Selected Points |
| ID_MODIFY_CommandButton_CHAMFER | 모서리 따내기 | Chamfer Corner |
| ID_MODIFY_CommandButton_CPL | 폴리선 상호 변환 | Interconvert Polyline and 3D Polyline |
| ID_MODIFY_CommandButton_CUTCLIP | 잘라내기 | Cut Selected Objects |
| ID_MODIFY_CommandButton_DIRECTIONREVERSE | 폴리선 방향전환 | Reverse Polyline Direction |
| ID_MODIFY_CommandButton_DVE | 삭제 | Delete Polyline Vertex |
| ID_MODIFY_CommandButton_EBB | 경계로부터 한번에 잘라내기 | Trim by Boundary at Once |
| ID_MODIFY_CommandButton_EDITENTITYSCALE | 객체 축척 일괄변경 | Batch Scale Adjustment |
| ID_MODIFY_CommandButton_EXTEND | 연장하기 | Extends Objects |
| ID_MODIFY_CommandButton_EXTENDTRIM | 경계 외부 자르기 | Trim Outside Boundary |
| ID_MODIFY_CommandButton_FILLET | 모서리 둥글게 깎기 | Round Corner |
| ID_MODIFY_CommandButton_IOF | 다중 간격으로 띄우기 | Variable Offsets |
| ID_MODIFY_CommandButton_JOIN | 연결하기 | Join Lines |
| ID_MODIFY_CommandButton_LENGTHEN | 선, 호 길이변경 | Modify the Length and Angle of Objects |
| ID_MODIFY_CommandButton_MJOIN | 선 추가해 연결하기 | Join with Additional Lines |
| ID_MODIFY_CommandButton_OBJECTSCALE | 축척 추가 및 삭제 | Add/Delete Scale |
| ID_MODIFY_CommandButton_OFFSET | 간격 띄우기 | Perform an Offset |
| ID_MODIFY_CommandButton_OTL | 레이어로 OFFSET | Offset by Layer |
| ID_MODIFY_CommandButton_OTP | 폴리선으로 변환 | Convert to Polyline |
| ID_MODIFY_CommandButton_PEDIT | 폴리선 변환/편집 | Edit Polyline |
| ID_MODIFY_CommandButton_RF | 동일 간격으로 띄우기 | Equally Spaced Offsets |
| ID_MODIFY_CommandButton_SCALE | 축척 조정하기 | Adjust Scale |
| ID_MODIFY_CommandButton_SPLINEDIT | 스플라인 변환/편집 | Spline Conversion/Edit |
| ID_MODIFY_CommandButton_STRETCH | 객체 신축하기 | Stretch Object |
| ID_MODIFY_CommandButton_TRIM | 경계로부터 잘라내기 | Cut Off Intersecting Portions |
| ID_MODIFY_CommandButton_XYB | X, Y 개별축척 적용 | Apply X, Y Individual Scaling |
| ID_MODIFY_GroupName_01_01 | 폴리선 | Convert & Edit Polyline |
| ID_MODIFY_GroupName_02_01 | 여러가지 방법으로 | Apply |
| ID_MODIFY_GroupName_02_02 | 간격띄우기 | Offset |
| ID_MODIFY_GroupName_03_01 | 여러가지 형태로 | Array |
| ID_MODIFY_GroupName_03_02 | 객체 배열 | Object |
| ID_MODIFY_GroupName_04_01 | 여러가지 방법으로 | Break Line |
| ID_MODIFY_GroupName_05_01 | 모서리 모양 | Modify |
| ID_MODIFY_GroupName_05_02 | 변경하기 | Corner Shape |
| ID_MODIFY_GroupName_06_01 | 스플라인 | Modify |
| ID_MODIFY_GroupName_06_02 | 수정 | Spline |
| ID_MODIFY_GroupName_07_01 | 경계선에서 | Trim |
| ID_MODIFY_GroupName_08_01 | 스케일 | Adjust |
| ID_MODIFY_GroupName_08_02 | 조정하기 | Scale |
| ID_MODIFY_GroupName_09_01 | 폴리선 정점 | Edit |
| ID_MODIFY_GroupName_09_02 | 수정 | Polyline Vertex |
| ID_MODIFY_GroupName_10_01 | 여러선 | Join |
| ID_MODIFY_GroupName_10_02 | 연결 | Lines |
| ID_MODIFY_GroupName_11_01 | 객체를 | Stretch / Extend Object |
| ID_MODIFY_GroupName_12_01 | 객체배열 | Edit |
| ID_MODIFY_GroupName_12_02 | 조정하기 | Array |
| ID_MODIFY_RadioButton_OFFSET_01 | 선 연장 | Extend Line |
| ID_MODIFY_RadioButton_OFFSET_02 | 모 깎기 | Fillet |
| ID_MODIFY_RadioButton_OFFSET_03 | 모 따기 | Chamfer |
| ID_MODIFY_RadioButton_SPLINE_01 | 직선 | Line |
| ID_MODIFY_RadioButton_SPLINE_02 | 호 | arc |
| ID_MODIFY_RadioButton_TRIMMODE_01 | 유지 안함 | Do Not Keep |
| ID_MODIFY_RadioButton_TRIMMODE_02 | 유지 | Keep |
| ID_MS_Block_Description | 모든 종류의 블록을 생성 및 수정, 관리 할 수 있다 | Create, modify, and manage all types of blocks |
| ID_MS_Block_Sub1 | 블록 / 속성블록 외부참조 / 이미지 | Block/Attribute block, External reference/Image |
| ID_MS_Block_Sub2 | 블록 라이브러리 | Block library |
| ID_MS_Block_Title | 통합블록관리 | Unified block management |
| ID_MS_Header | EG-BIM의 차별기능 알아보기 | Discover the unique features of EG-BIM |
| ID_MS_Header_Sub1 | 인터페이스 | Interface |
| ID_MS_Header_Sub1_Content1 | 메인화면 구성 | Main screen layout |
| ID_MS_Header_Sub1_Content2 | 명령어아이콘 | Command icons |
| ID_MS_Header_Sub2 | 멀티작업공간 | Multi-workspace |
| ID_MS_Header_Sub2_Content1 | Layout탭 분리 | Separate Layout tab |
| ID_MS_Header_Sub2_Content2 | 파일탭 분리 | Separate File tab |
| ID_MS_Header_Sub2_Content3 | 3D 작업 전용 | 3D workspace exclusive |
| ID_MS_Help | 도움말 | Help |
| ID_MS_Improving | 개선 중 | Improving |
| ID_MS_MainTitle | 주요기능 즐겨찾기 | Favorite key features |
| ID_MS_MainTitle_Description | EG-BIM에서 사용 할 수 있는 모든 명령어를 확인 할 수 있다 | Check all commands available in EG-BIM |
| ID_MS_ObjectProp_Description | 레이어, 색상 등 객체별 속성정보를 확인하고 수정 할 수 있다 | Check and modify object properties such as layer and color |
| ID_MS_ObjectProp_Sub2 | 레이어 상세 | Layer details |
| ID_MS_ObjectProp_Sub3 | 색상 | Color |
| ID_MS_ObjectProp_Title | 객체특성관리 | Object properties management |
| ID_MS_Option_Description | 사용자에 맞는 기본적인 프로그램 환경을 설정한다 | Set up basic program environment for users |
| ID_MS_Option_Sub1 | 작업화면  색상 | Workspace color |
| ID_MS_Option_Sub10 | 모든도면 닫기 설정 | Close all drawings setting |
| ID_MS_Option_Sub11 | 단축키 | Shortcut keys |
| ID_MS_Option_Sub2 | 파일 저장  및 보안 | File saving and security |
| ID_MS_Option_Sub3 | 마우스기능  설정 | Mouse function settings |
| ID_MS_Option_Sub4 | 십자선커서 | Crosshair cursor |
| ID_MS_Option_Sub5 | 도면공간 (뷰포트설정) | Drawing space (Viewport settings) |
| ID_MS_Option_Sub6 | 파일 오픈시 경고 및 알림 | Warnings and notifications when opening files |
| ID_MS_Option_Sub7 | 명령창 | Command window |
| ID_MS_Option_Sub8 | 뷰큐브 옵션 설정 | ViewCube options settings |
| ID_MS_Option_Sub9 | 프록시객체 | Proxy object |
| ID_MS_Plot_Description | 출력옵션을 설정하고 용지출력 및 파일로 저장한다 | Set output options and print to paper or save as file |
| ID_MS_Plot_Sub1 | 인쇄 / 페이지 설정 | Print/Page settings |
| ID_MS_Plot_Sub2 | 인쇄 미리보기 설정 | Print preview settings |
| ID_MS_Plot_Title | 인쇄 | Print |
| ID_MS_Style_Description | 선, 문자, 치수에 적용될 스타일을 생성 및 수정, 관리할 수 있다 | Create, modify, and manage styles for lines, text, and dimensions |
| ID_MS_Style_Sub1 | 선스타일 | Line style |
| ID_MS_Style_Sub2 | 문자스타일 | Text style |
| ID_MS_Style_Sub3 | 치수스타일 | Dimension style |
| ID_MS_Style_Title | 스타일관리 | Style management |
| ID_MS_Workspace_Description | 작업상황에 맞게 작업환경을 ON/OFF 모드로 변경 적용한다 | Switch workspace mode ON/OFF based on work situation |
| ID_MS_Workspace_Sub1 | 그리드 | Grid |
| ID_MS_Workspace_Sub10 | 명령어 자동완성 | Command autocomplete |
| ID_MS_Workspace_Sub11 | 선택효과 | Selection effects |
| ID_MS_Workspace_Sub12 | 겹쳐진객체  선택구분 | Differentiated selection for overlapping objects |
| ID_MS_Workspace_Sub14 | 선택된 객체  그립표시 | Display grips for selected objects |
| ID_MS_Workspace_Sub2 | 그리드 스냅 | Grid snap |
| ID_MS_Workspace_Sub3 | 오브젝트  스냅 | Object snap |
| ID_MS_Workspace_Sub4 | 객체스냅 추적 | Object Snap Tracking |
| ID_MS_Workspace_Sub5 | Angle Snap  Tracking | Angle Snap Tracking |
| ID_MS_Workspace_Sub6 | 직교모드 | Orthogonal mode |
| ID_MS_Workspace_Sub7 | 선가중치  모드 | Line weight mode |
| ID_MS_Workspace_Sub8 | Dynamic  Input | Dynamic Input |
| ID_MS_Workspace_Sub9 | 오브젝트   그립 | Object grip |
| ID_OPTIONS_CheckBox_01 | 도면 자동복구 알림 | Drawing Auto-Recovery Notification |
| ID_OPTIONS_CheckBox_02 | 상위버전 파일 실행 경고 | Warning for Running Higher Version Files |
| ID_OPTIONS_CheckBox_EDITMODE | 편집모드로 가기 | Enter Edit Mode |
| ID_OPTIONS_CheckBox_SECURITY | 보안 설정 및 도면 암호 | Security Settings and Drawing Password |
| ID_OPTIONS_CommandButton_DockBlockToolbar | 블록 편집 툴바를 화면 왼쪽에 고정합니다. | Dock the block editing toolbar to the left side. |
| ID_OPTIONS_CommandButton_HOTKEYTOENG | 한글키보드에서 객체스냅 단축키를 영어로 변환 | Convert Object Snap hotkey to English on the Korean keyboard |
| ID_OPTIONS_GroupName_01_01 | 작업화면 | Workspace |
| ID_OPTIONS_GroupName_01_02 | 색상 | Color |
| ID_OPTIONS_GroupName_02_01 | 십자선 | Crosshairs |
| ID_OPTIONS_GroupName_02_02 | 커서 | / Pickbox |
| ID_OPTIONS_GroupName_03 | 명령창 | Command Line |
| ID_OPTIONS_GroupName_04 | 파일 탭 미리보기 | File tab preview |
| ID_OPTIONS_GroupName_05 | 도면공간 | Paper Space |
| ID_OPTIONS_GroupName_06_01 | 마우스 | Customize |
| ID_OPTIONS_GroupName_06_02 | 기능 설정 | Mouse Buttons |
| ID_OPTIONS_GroupName_08_01 | 파일 형식 | File Saving Options |
| ID_OPTIONS_GroupName_09_01 | 프록시 | Proxy |
| ID_OPTIONS_GroupName_09_02 | 객체 | Object |
| ID_OPTIONS_GroupName_10 | 인쇄 미리보기 | Print Preview |
| ID_OPTIONS_GroupName_11_01 | 프로그램 종료 시 | File Closing Options |
| ID_OPTIONS_GroupName_13_01 | 자동 저장 | Autosave |
| ID_OPTIONS_GroupName_13_02 | 및 | & Backup |
| ID_OPTIONS_GroupName_14_01 | 확대/축소시 도면요소 | Display Elements |
| ID_OPTIONS_GroupName_14_02 | 표시 | When Zooming |
| ID_OPTIONS_GroupName_15_01 | 언어 | Language |
| ID_OPTIONS_GroupName_15_02 | 설정 | Settings |
| ID_OPTIONS_MenuItem_ViewCubeOption_OFF | 뷰 큐브 표시 안함 | Do Not Show View Cube |
| ID_OPTIONS_RadioButton_AlwaysCloseAll_01 | 항상 모든 도면 닫기 | Always Close All Drawings |
| ID_OPTIONS_RadioButton_AlwaysCloseAll_02 | 하나씩 도면 닫기 | Close Current Drawing |
| ID_OPTIONS_RadioButton_FLETABPREVIEW_01 | 리스트 | List |
| ID_OPTIONS_RadioButton_FLETABPREVIEW_02 | 리스트 + 미리보기 | View List early |
| ID_OPTIONS_RadioButton_ISAVEBAK_01 | 생성 | Generate |
| ID_OPTIONS_RadioButton_ISAVEBAK_02 | 생성 안함 | Do Not Generate |
| ID_OPTIONS_RadioButton_LanguageSettings_01 | 한국어 | Korean |
| ID_OPTIONS_RadioButton_LAYOUTCREATEVIEWPORT_01 | 뷰포트 자동생성 | Auto Create Viewport |
| ID_OPTIONS_RadioButton_MBUTTONPAN_01 | 화면 초점 이동 | Pan Screen |
| ID_OPTIONS_RadioButton_MBUTTONPAN_02 | 객체스냅 | Snap Object |
| ID_OPTIONS_RadioButton_MOUSE_R_02 | 기본 메뉴 | Default menu |
| ID_OPTIONS_RadioButton_MOUSE_R_03 | 추가한 명령탭 메뉴 | Added Command Tab Menu |
| ID_OPTIONS_RadioButton_MOUSE_R_04 | 마지막 명령 반복 | Repeat Last Command |
| ID_OPTIONS_RadioButton_MOUSE_R_05 | 기본/편집 메뉴 | Default/Edit Menu |
| ID_OPTIONS_RadioButton_MOUSE_R_07 | 하위 명령 표시 | Show Subcommands |
| ID_OPTIONS_RadioButton_MOUSE_R_10 | 하위 명령 표시안함 | Do Not Show Subcommands |
| ID_OPTIONS_RadioButton_MOUSE_WS_01 | 위 확대 아래 축소 | Scroll Up → Zoom In |
| ID_OPTIONS_RadioButton_MOUSE_WS_02 | 위 축소 아래 확대 | Scroll Up → Zoom Out |
| ID_OPTIONS_RadioButton_PROXYGRAPHICS_01 | 대체 이미지 | Substitute Image |
| ID_OPTIONS_RadioButton_PROXYGRAPHICS_02 | 경계만 | Boundary Only |
| ID_OPTIONS_RadioButton_PROXYNOTICE_01 | 표시 | Show |
| ID_OPTIONS_RadioButton_PROXYNOTICE_02 | 표시 안함 | Do Not Show |
| ID_OPTIONS_RadioButton_PROXYSHOW_01 | 대체 이미지 | Substitute Image |
| ID_OPTIONS_RadioButton_PROXYSHOW_02 | 경계만 | Boundary Only |
| ID_OPTIONS_RadioButton_PROXYSHOW_03 | 없음 | None |
| ID_OPTIONS_RadioButton_RealTimePlotPreview_01 | 자동 실시간 미리보기 | Automatic Real-Time Preview |
| ID_OPTIONS_RadioButton_RealTimePlotPreview_02 | 수동 미리보기 | Manual Preview |
| ID_OPTIONS_TextBlock_BKGCOLOR | 모형공간 | Model Space |
| ID_OPTIONS_TextBlock_BLOCKSPACECOLOR | 블록편집공간 | Block Editor |
| ID_OPTIONS_TextBlock_COMMAND_04 | 글꼴 | Font |
| ID_OPTIONS_TextBlock_COMMAND_05 | 크기 | Text Size |
| ID_OPTIONS_TextBlock_COMMAND_06 | 문자색상 | Text Color |
| ID_OPTIONS_TextBlock_COMMAND_07 | 배경색상 | Paper Space |
| ID_OPTIONS_TextBlock_COMMAND_08 | 키워드 배경색상 | Option Backgounrd Color |
| ID_OPTIONS_TextBlock_CURSOR_03 | 십자선 길이 | Crosshair Size |
| ID_OPTIONS_TextBlock_CURSOR_04 | PICK박스 크기 | Pickbox size |
| ID_OPTIONS_TextBlock_CURSOR_05 | 색상 | Color |
| ID_OPTIONS_TextBlock_CURSOR_06 | X축 | X axis color |
| ID_OPTIONS_TextBlock_CURSOR_07 | Y축 | Y axis color |
| ID_OPTIONS_TextBlock_CURSOR_08 | Z축 | Z axis color |
| ID_OPTIONS_TextBlock_CURSOR_09 | PICK 박스색상 | Pickbox color |
| ID_OPTIONS_TextBlock_CURSOR_10 | 십자선 축의 색상을 변경하면 UCS좌표계 축 색상도 변경 | * Modifying the crosshair axis color will update the color of the UCS coordinate system |
| ID_OPTIONS_TextBlock_DRAWINGFORMAT | 도면 형식 | Format |
| ID_OPTIONS_TextBlock_FILETABPREVIEW_01 | 여러개의 파일이 열려있을 경우 미리보기 방법 | How to preview when multiple files are open |
| ID_OPTIONS_TextBlock_FILETABPREVIEW_02_01 | 파일명에 마우스 오버시 | Preview on Mouse Hover Over File Name |
| ID_OPTIONS_TextBlock_FILETABPREVIEW_02_02 | 미리보기 가능 | Preview available |
| ID_OPTIONS_TextBlock_ISAVEBAK | 백업파일 | Backup File |
| ID_OPTIONS_TextBlock_ISAVEBAK_GBK | GBK 파일로 생성됨 | * Generated as GBK File |
| ID_OPTIONS_TextBlock_LANGUAGESETTING_DESCRIPTION | 프로그램에서 사용할 언어를 선택 | Select the language to use in the program |
| ID_OPTIONS_TextBlock_LanguageSettings | 언어 설정 | Language settings |
| ID_OPTIONS_TextBlock_MOUSE_L | 왼쪽 더블클릭 | Left  Double-Click |
| ID_OPTIONS_TextBlock_MOUSE_L2 | 왼쪽 클릭 | Left Click |
| ID_OPTIONS_TextBlock_MOUSE_R | 오른쪽 클릭 | Right Click |
| ID_OPTIONS_TextBlock_MOUSE_R_02 | 선택된 객체가 없을 경우 | When an Object is Not Selected |
| ID_OPTIONS_TextBlock_MOUSE_R_03 | 객체가 선택된 경우 | When an Object Is Selected |
| ID_OPTIONS_TextBlock_MOUSE_R_04 | 명령 진행 중 | Command in Progress |
| ID_OPTIONS_TextBlock_MOUSE_W | 휠 클릭 | Click Wheel |
| ID_OPTIONS_TextBlock_MOUSE_WS | 휠 스크롤 | Scroll Wheel |
| ID_OPTIONS_TextBlock_MOUSE_WS_02 | 확대/ 축소량 | Zoom Level |
| ID_OPTIONS_TextBlock_PAPERSPACE_01 | 용지영역 표시 | Display Paper Area |
| ID_OPTIONS_TextBlock_PAPERSPACE_02 | 인쇄영역 표시 | Display Print Area |
| ID_OPTIONS_TextBlock_PAPERSPACE_03 | 뷰포트 - 모형공간의 대상을 보여주는 창 | * Viewport : Window Showing Model Space Objects |
| ID_OPTIONS_TextBlock_PAPERSPACE_04 | 용지 크기 | Paper Size |
| ID_OPTIONS_TextBlock_PROXY_DESCRIPTION | 프로그램에서 지원하지 않는 객체를 다른 소프트웨어를 통해 만들었을 경우 해당객체는 프록시객체로 인식함 | * Objects created using unsupported software are recognized as proxy objects. |
| ID_OPTIONS_TextBlock_PROXYGRAPHICS | 저장 | Save |
| ID_OPTIONS_TextBlock_PROXYNOTICE | 생성알림 및 정보표시 | Generation Status Display |
| ID_OPTIONS_TextBlock_PROXYSHOW | 화면표시 | Screen Display |
| ID_OPTIONS_TextBlock_PSPACEPCOLOR_01 | 도면공간 | Viewport |
| ID_OPTIONS_TextBlock_RealTimePlotPreview | 인쇄정보 변경 옵션 | Print Information Change Options |
| ID_OPTIONS_TextBlock_SAVEFILEPATH | 파일경로 | File Path |
| ID_OPTIONS_TextBlock_SAVETIME_01 | 분 | Minutes |
| ID_OPTIONS_TextBlock_SAVETIME_03 | 파일 확장자 | File Extension |
| ID_OPTIONS_TextBlock_SAVEVERSION_01 | 저장 형식 | Saving Version |
| ID_OPTIONS_TextBlock_SAVEVERSION_03 | 저장 간격 | Save Interval |
| ID_OPTIONS_Title | 시스템 설정 | System Settings |
| ID_PASW_CHECKBOX_ELLIPSE | 타원형 | Ellipse |
| ID_PASW_CHECKBOX_RADIUS | 반지름 | Radius |
| ID_PASW_DetailLabel_AbsoluteSize | 절대 크기 | Absolute Size |
| ID_PASW_DetailLabel_AdjustBackground | 배경 색상 조정 | Adjust Color for Background |
| ID_PASW_DetailLabel_Alignment | 자리 맞추기 | Alignment |
| ID_PASW_DetailLabel_Angle | 각도 | Angle |
| ID_PASW_DetailLabel_ApplyContinuousLinePatter | 선 패턴 연속 적용 | Continuous Linetype Generation |
| ID_PASW_DetailLabel_Arclength | 호 길이 | Arc length |
| ID_PASW_DetailLabel_Arrowhead | 화살촉 | Arrowhead |
| ID_PASW_DetailLabel_ArrowSize | 화살촉 크기 | Arrow Size |
| ID_PASW_DetailLabel_Associative | 연관 | Assoc. |
| ID_PASW_DetailLabel_AtLeast | 최소한 | At least |
| ID_PASW_DetailLabel_AttachType | 부착 유형 | Attach Type |
| ID_PASW_DetailLabel_Attributes | 속성 | Attributes |
| ID_PASW_DetailLabel_AxialVector | 축 벡터 | Semi-Axial Vector |
| ID_PASW_DetailLabel_Axis | 축 | Axis |
| ID_PASW_DetailLabel_BackgroundColor | 배경 색상 | Background Color |
| ID_PASW_DetailLabel_BackgroundMask | 배경 마스크 | Background Mask |
| ID_PASW_DetailLabel_Backword | 거꾸로 | Backward |
| ID_PASW_DetailLabel_BaseLine | 기준선 | Base Line |
| ID_PASW_DetailLabel_BasePoint | 기준점 | Base pt |
| ID_PASW_DetailLabel_BasicInfo | 기본 정보 | Basic Information |
| ID_PASW_DetailLabel_BlockName | 블록 이름 | Block Name |
| ID_PASW_DetailLabel_BlockUnit | 블록 단위 | Block Unit |
| ID_PASW_DetailLabel_BorderOffsetFactor | 간격 띄우기 비율 | Border Offset Factor |
| ID_PASW_DetailLabel_ByCapitalCharacter | 대문자 기준 | By Capital Character |
| ID_PASW_DetailLabel_ByHighCharacter | 높은문자 기준 | By High Character |
| ID_PASW_DetailLabel_ByStyle | 스타일별 | By Style |
| ID_PASW_DetailLabel_ByWidthOne | 폭에 맞춤(폭 비율=1) | Fit Width (Fixed : 1) |
| ID_PASW_DetailLabel_ByWidthVar | 폭에 맞춤(폭 비율=VAR) | Fit Width (Variable) |
| ID_PASW_DetailLabel_Centered | 중심 | Centered |
| ID_PASW_DetailLabel_CenterLocation | 중심 위치 | Center |
| ID_PASW_DetailLabel_CenterPoint | 중간점 | Center pt |
| ID_PASW_DetailLabel_CirclePerimeter | 원주 | Circumference |
| ID_PASW_DetailLabel_Clip | 잘림 | Clip on/off |
| ID_PASW_DetailLabel_Clockwise | 시계 방향 | CW |
| ID_PASW_DetailLabel_Constant | 상수 | Const. |
| ID_PASW_DetailLabel_Constrain | 구속 조건 | Constraint |
| ID_PASW_DetailLabel_ContentsByItem | 항목 별 내용 | Type |
| ID_PASW_DetailLabel_Contrary | 반대로 | Flipped |
| ID_PASW_DetailLabel_ControlPointType | 조정점 | Control |
| ID_PASW_DetailLabel_CustomScale | 사용자 축척 | Custom Scale |
| ID_PASW_DetailLabel_DetailView | 상세보기 | More.. |
| ID_PASW_DetailLabel_DetailView_AttributeBlockValue | 문자 값 | Text Value |
| ID_PASW_DetailLabel_DetailView_DimensionTitle | 치수 측정 상세보기 | Dimension Detail Settings |
| ID_PASW_DetailLabel_DetailView_MLeaderTitle | 다중지시선 상세보기 | Multileader Detail Settings |
| ID_PASW_DetailLabel_DetailView_SegmentTitle | 세그먼트 테이블 | Segment Table |
| ID_PASW_DetailLabel_DetailView_Tangent_External | 문자 값 | Exteranl Tangent |
| ID_PASW_DetailLabel_DetailView_Tangent_Internal | 세그먼트 테이블 | Internal Tangent |
| ID_PASW_DetailLabel_DgnName | DGN 이름 | DGN name |
| ID_PASW_DetailLabel_DimensionLine | 치수선 | Dim. Line |
| ID_PASW_DetailLabel_DimensionScale | 치수 축척 | Overall Scale |
| ID_PASW_DetailLabel_DirectionVector | 방향 백터 | Direction Vector |
| ID_PASW_DetailLabel_Double | 이중 | Double |
| ID_PASW_DetailLabel_DwfName | DWF 이름 | DWF name |
| ID_PASW_DetailLabel_DwgName | DWG 이름 | DWG name |
| ID_PASW_DetailLabel_Elevation | 고도 | Elevation |
| ID_PASW_DetailLabel_EndAngle | 끝 각도 | End Angle |
| ID_PASW_DetailLabel_EndPoint | 끝점 | End pt |
| ID_PASW_DetailLabel_EndWidth | 끝 폭 | End Width |
| ID_PASW_DetailLabel_Error_CantCalculate | 산정불가 | Impossible to calculate |
| ID_PASW_DetailLabel_Exactly | 정확히 | Exactly |
| ID_PASW_DetailLabel_FillColor | 채우기 색상 | Bg. Mask Color |
| ID_PASW_DetailLabel_FirstArrow | 화살촉 1 | Arrowhead 1 |
| ID_PASW_DetailLabel_FitPointType | 맞춤점 | Fit |
| ID_PASW_DetailLabel_FitScale | 사용자 축척 | Custom scale |
| ID_PASW_DetailLabel_FitSmooth | 맞춤 유형 | Fit Type |
| ID_PASW_DetailLabel_FitSmoothType_Cubic | 3차 | Cubic |
| ID_PASW_DetailLabel_FitSmoothType_Curve | 맞춤곡선 | Curve |
| ID_PASW_DetailLabel_FitSmoothType_None | 없음 | None |
| ID_PASW_DetailLabel_FitSmoothType_Quardratic | 2차 | Quadratic |
| ID_PASW_DetailLabel_FitTolerence | 공차 맞춤 | Tolerance |
| ID_PASW_DetailLabel_FitViewportScale | 뷰포트 스케일 맞춤 | Fit Viewport Scale |
| ID_PASW_DetailLabel_FixedRatio | 비율 고정 | Fixed ratio |
| ID_PASW_DetailLabel_GlobalWidth | 전역 폭 | Global Width |
| ID_PASW_DetailLabel_GradientName | 그라데이션 이름 | Gradient Name |
| ID_PASW_DetailLabel_HatchStyleIgnore | 무시 | Ignore |
| ID_PASW_DetailLabel_HatchStyleNormal | 일반 | Normal |
| ID_PASW_DetailLabel_HatchStyleOuter | 외부 | Outer |
| ID_PASW_DetailLabel_Height | 높이 | Height |
| ID_PASW_DetailLabel_Horizontal | 수평 | Horizontal |
| ID_PASW_DetailLabel_HorizontalBack | 뒤 | Back |
| ID_PASW_DetailLabel_HorizontalBackUp | 뒤(위) | Back(UP) |
| ID_PASW_DetailLabel_HorizontalFront | 앞 | Front |
| ID_PASW_DetailLabel_HorizontalFrontUp | 앞(위) | Front(UP) |
| ID_PASW_DetailLabel_HorizontalMiddle | 중앙 | Ctr. |
| ID_PASW_DetailLabel_Increment | 증분 | Increment |
| ID_PASW_DetailLabel_Invisible | 숨김 | Invisible |
| ID_PASW_DetailLabel_IslandDetectionStyle | 고립 영역 탐지 스타일 | Island Detection Style |
| ID_PASW_DetailLabel_JogLocation | 꺾기 위치 | Jog |
| ID_PASW_DetailLabel_LeaderContent | 지시선 내용 | Contents |
| ID_PASW_DetailLabel_LeaderLineColor | 지시선 색상 | Leader color |
| ID_PASW_DetailLabel_LeaderLineWeight | 지시선 선가중치 | Leader lineweight |
| ID_PASW_DetailLabel_LeaderScale | 지시선 축척 | Overall Scale |
| ID_PASW_DetailLabel_LeaderStyle | 지시선 스타일 | Style |
| ID_PASW_DetailLabel_LeaderTextOffset | 문자 이격거리 | Text Offset |
| ID_PASW_DetailLabel_LeaderTextVerticalPosition | 문자 세로위치 | Vertical Position |
| ID_PASW_DetailLabel_LeaderType | 지시선 타입 | Leader type |
| ID_PASW_DetailLabel_Length | 길이 | Length |
| ID_PASW_DetailLabel_LineSpacingFactor | 행간 비율 | Line Factor |
| ID_PASW_DetailLabel_LineSpacingStyle | 행 간격 스타일 | Line Space Style |
| ID_PASW_DetailLabel_LockPositionBlock | 잠금위치 | Lock Position |
| ID_PASW_DetailLabel_MajorAxis | 장축 | Major |
| ID_PASW_DetailLabel_MinorAxis | 단축 | Minor |
| ID_PASW_DetailLabel_MlineStyle | 여러 줄 스타일 | Multiline Style |
| ID_PASW_DetailLabel_Monochrome | 단색 | Mono. |
| ID_PASW_DetailLabel_NyngName | GRM 이름 | GRM name |
| ID_PASW_DetailLabel_OperationType | 방식 | Point Type |
| ID_PASW_DetailLabel_Origin | 원점 | Origin |
| ID_PASW_DetailLabel_PageNumber | 페이지 번호 | Page Number |
| ID_PASW_DetailLabel_PatternAngle | 패턴 각도 | Angle |
| ID_PASW_DetailLabel_PatternName | 패턴 이름 | Pattern Name |
| ID_PASW_DetailLabel_PatternScale | 패턴 축척 | Scale |
| ID_PASW_DetailLabel_PatternSpacing | 패턴 간격 | Pattern Spacing |
| ID_PASW_DetailLabel_PatternType | 유형 | Pattern Type |
| ID_PASW_DetailLabel_PdfName | PDF 이름 | PDF name |
| ID_PASW_DetailLabel_PercentageSize | 상대 크기 | Percentage Size |
| ID_PASW_DetailLabel_Place | 위치 | Geometry |
| ID_PASW_DetailLabel_Planar | 평면형 | Planar |
| ID_PASW_DetailLabel_PlotHighQuality | 고품질 | High |
| ID_PASW_DetailLabel_PlotLowQuality | 저품질 | Low |
| ID_PASW_DetailLabel_PlotQuaility | 플롯 품질 | Plot Quality |
| ID_PASW_DetailLabel_PointSize | 점크기 | Point Size |
| ID_PASW_DetailLabel_PointStyle | 점 스타일 | Point Style |
| ID_PASW_DetailLabel_Preset | 사전설정 | Preset |
| ID_PASW_DetailLabel_Prompt | 프롬프트 | Prompt |
| ID_PASW_DetailLabel_Radius | 반지름 | Radius |
| ID_PASW_DetailLabel_Rotation | 회전 | Rotate |
| ID_PASW_DetailLabel_ScaleList | 스케일 목록 | Scale list |
| ID_PASW_DetailLabel_SecondArrow | 화살촉 2 | Arrowhead 2 |
| ID_PASW_DetailLabel_SecondPoint | 두번째 점 | Second pt |
| ID_PASW_DetailLabel_SegmentTable_EndWidth | 끝 | End |
| ID_PASW_DetailLabel_SegmentTable_StartWidth | 시작 | Start |
| ID_PASW_DetailLabel_SegmentWidth | 세그먼트 폭 | Segment Width |
| ID_PASW_DetailLabel_Seperating | 구분 | Type |
| ID_PASW_DetailLabel_Shape | 형상 | Shape |
| ID_PASW_DetailLabel_ShowClipped | 잘림 표시 | Clip on/off |
| ID_PASW_DetailLabel_ShowDgn | DGN 표시 | Show DGN |
| ID_PASW_DetailLabel_ShowDwf | DWF 표시 | Show DWF |
| ID_PASW_DetailLabel_ShowPdf | PDF 표시 | Show PDF |
| ID_PASW_DetailLabel_SortPoint | 정렬점 | Sort pt |
| ID_PASW_DetailLabel_SourceApplication | 원본 응용프로그램 | Source application |
| ID_PASW_DetailLabel_Spline | 스플라인 | Spline |
| ID_PASW_DetailLabel_SplineDegree | 차수 | Degree |
| ID_PASW_DetailLabel_StandardOfAlignment | 자리맞추기 기준 | Text Alignment |
| ID_PASW_DetailLabel_StandardPoint | 기준점 | Base pt |
| ID_PASW_DetailLabel_StandardScale | 표준 축척 | Standard Scale |
| ID_PASW_DetailLabel_StartAngle | 시작 각도 | Start Angle |
| ID_PASW_DetailLabel_StartPoint | 시작점 | Start pt |
| ID_PASW_DetailLabel_StartWidth | 시작 폭 | Start Width |
| ID_PASW_DetailLabel_StraightLine | 직선 | Straight |
| ID_PASW_DetailLabel_TableBreakEnabled | 테이블 나누기 | Enable Break |
| ID_PASW_DetailLabel_TableBreakHeight | 끊기 높이 | Break Height |
| ID_PASW_DetailLabel_TableBreakSpacing | 간격 조절 | Break Spacing |
| ID_PASW_DetailLabel_TableStyle | 테이블 스타일 | Table Style |
| ID_PASW_DetailLabel_Tag | 태그 | Tag |
| ID_PASW_DetailLabel_TextColor | 문자 색상 | Text Color |
| ID_PASW_DetailLabel_TextContent | 문자 내용 | Contents |
| ID_PASW_DetailLabel_TextString | 문자 값 | Text String |
| ID_PASW_DetailLabel_TextStyle | 문자 스타일 | Text Style |
| ID_PASW_DetailLabel_TotalAngle | 전체 각도 | Total Angle |
| ID_PASW_DetailLabel_TotalHeight | 전체 길이 | Total Length |
| ID_PASW_DetailLabel_TurnsHeight | 회전 높이 | Pitch |
| ID_PASW_DetailLabel_Type | 유형 | Type |
| ID_PASW_DetailLabel_UcsPerViewport | 뷰포트별 UCS 저장 | UCS per Viewport |
| ID_PASW_DetailLabel_UnderClockwise | 시계 반대방향 | CCW |
| ID_PASW_DetailLabel_UnitRatio | 단위 비율 | Unit Ratio |
| ID_PASW_DetailLabel_Value | 값 | Default |
| ID_PASW_DetailLabel_Verifiable | 검증 | Verify |
| ID_PASW_DetailLabel_Vertex | 정점 | Vertex |
| ID_PASW_DetailLabel_Vertex_X | 정점 X | Vertex_X |
| ID_PASW_DetailLabel_Vertex_Y | 정점 Y | Vertex_Y |
| ID_PASW_DetailLabel_VertexPlace | 정점 위치 | Vertex Place |
| ID_PASW_DetailLabel_Vertical | 수직 | Vertical |
| ID_PASW_DetailLabel_VerticalAbove | 위 | Above |
| ID_PASW_DetailLabel_VerticalBelow | 아래 | Below |
| ID_PASW_DetailLabel_VerticalCenter | 가운데 | Ctr. |
| ID_PASW_DetailLabel_VerticalOutside | 외부 | Outside |
| ID_PASW_DetailLabel_ViewportAnntationScale | 뷰포트 맞춤 축척 | Annotation Scale |
| ID_PASW_DetailLabel_ViewportIsLock | 뷰포트 잠금 | Viewport Lock |
| ID_PASW_DetailLabel_ViewportIsOn | 뷰포트 표시 | Display Viewport |
| ID_PASW_DetailLabel_VisualStyle | 비주얼 스타일 | Visual Style |
| ID_PASW_DetailLabel_Width | 폭 | Width |
| ID_PASW_DetailLabel_WidthFactor | 폭비율 | Width Factor |
| ID_PASW_DetailLabel_XAxis | X축 | X-Axis |
| ID_PASW_DetailLabel_YAxis | Y축 | Y-Axis |
| ID_PASW_DetailLabel_ZAxis | Z축 | ZAxis |
| ID_PIMB_TEXTBLOCK_POPUP | 속성창 | Popup |
| ID_PIMB_TEXTBLOCK_PROPERTYBAR | 속성Bar | Bar |
| ID_PIMB_TEXTBLOCK_PROPERTYBAR_TOOLTIP_CONTENT | 속성창 | The properties of the selected object are displayed. If multiple objects are selected, the common properties for all selected objects are displayed. |
| ID_PIMB_TEXTBLOCK_PROPERTYBAR_TOOLTIP_HEADER | 속성Bar | Bar |
| ID_PROPERTY_DETAILVIEW | Properties 상세보기 | View Properties Details |
| ID_PROPERTY_DISPLAY_ANGLE | 각도 | Angle |
| ID_PROPERTY_DISPLAY_ANGLEBETWEENARRAY | 배열 사이의 각 | Angle Between Arrays |
| ID_PROPERTY_DISPLAY_ANGLEBETWEENSHAFT | 축 사이 각 | Angle Between Axes |
| ID_PROPERTY_DISPLAY_ANNOTATIONSCALE | 주석 축척 맞춤 | Fit Annotation Scale |
| ID_PROPERTY_DISPLAY_ANNOTATIVE | 뷰포트 스케일 맞춤 | Fit Viewport Scale |
| ID_PROPERTY_DISPLAY_AREA | 면적 | Area |
| ID_PROPERTY_DISPLAY_ARRAYANGLE | 배열 각도 | Array Angle |
| ID_PROPERTY_DISPLAY_ARRAYCOUNT | 배열 수 | Array count |
| ID_PROPERTY_DISPLAY_ARRAYSPACE | 배열 간격 | Array Spacing |
| ID_PROPERTY_DISPLAY_BACKGROUNDtRANSPARENT | 배경 투명도 | Bg.Transp. |
| ID_PROPERTY_DISPLAY_BOTTOMMAJORRADIUS | 밑면 장축 반지름 | Bottom Major Radius |
| ID_PROPERTY_DISPLAY_BOTTOMMINORRADIUS | 밑면 단축 반지름 | Bottom Minor Radius |
| ID_PROPERTY_DISPLAY_BOTTOMRADIUS | 밑면 반지름 | Base Radius |
| ID_PROPERTY_DISPLAY_BRIGHTNESS | 밝기 | Brightness |
| ID_PROPERTY_DISPLAY_CIRCUMFERENCE | 원주 | Circumference |
| ID_PROPERTY_DISPLAY_CLOSED | 닫힘 | Close |
| ID_PROPERTY_DISPLAY_COLOR | 색상 | Color |
| ID_PROPERTY_DISPLAY_COLUMNS | 열 | Columns |
| ID_PROPERTY_DISPLAY_CONSTANTWIDTH | 전역 폭 | Constantwidth |
| ID_PROPERTY_DISPLAY_CONTRAST | 대비 | Contrast |
| ID_PROPERTY_DISPLAY_DIAMETER | 지름 | Diameter |
| ID_PROPERTY_DISPLAY_DIMASZ | 화살촉 크기 | Dimasz |
| ID_PROPERTY_DISPLAY_DIMDLE | 치수선 연장길이 | Extend Beyond Ticks |
| ID_PROPERTY_DISPLAY_DIMENSIONSTYLE | 치수 스타일 | Dim. Style |
| ID_PROPERTY_DISPLAY_DIMEXE | 내민 길이 | Over DimLines |
| ID_PROPERTY_DISPLAY_DIMEXO | 이격거리 | Origin Offset |
| ID_PROPERTY_DISPLAY_DIMGAP | 문자 이격거리 | Dimgap |
| ID_PROPERTY_DISPLAY_DIMLFAC | 측정 축척 | Linear Scale Factor |
| ID_PROPERTY_DISPLAY_DIMSCALE | 치수 축척 | Dimscale |
| ID_PROPERTY_DISPLAY_DIMTEXT | 문자 높이 | Text Height |
| ID_PROPERTY_DISPLAY_DIRECTION | 방향 | Direction |
| ID_PROPERTY_DISPLAY_DIRECTION_ABOVE | 위 | Up |
| ID_PROPERTY_DISPLAY_DIRECTION_BELOW | 아래 | Down |
| ID_PROPERTY_DISPLAY_DIRECTION_CENTERED | 중심 | Ctr. |
| ID_PROPERTY_DISPLAY_DIRECTION_OUTSIDE | 외부 | Ext. |
| ID_PROPERTY_DISPLAY_DIRECTIONDOWN | 아래쪽 | Downward |
| ID_PROPERTY_DISPLAY_DIRECTIONLEFT | 왼쪽 | Left |
| ID_PROPERTY_DISPLAY_DIRECTIONRIGHT | 오른쪽 | Right |
| ID_PROPERTY_DISPLAY_DISPLAYOPTIONS | 잘림 표시 | Clip on/off |
| ID_PROPERTY_DISPLAY_ELEVATION_ORIGIN | 원점 고도 | Origin Elevation |
| ID_PROPERTY_DISPLAY_ELEVATION_VERTEX | 정점 고도 | Vertex Elevation |
| ID_PROPERTY_DISPLAY_ENDANGLE | 끝 각도 | Endangle |
| ID_PROPERTY_DISPLAY_FACE | 면 | Face |
| ID_PROPERTY_DISPLAY_FADE | 페이드 | Fade |
| ID_PROPERTY_DISPLAY_HATCHPATTERNSCALE | 해치 축척 | Hatch pattern scale |
| ID_PROPERTY_DISPLAY_HEIGHT | 높이 | H |
| ID_PROPERTY_DISPLAY_HORIZONTALMARGIN | 행간격 | Horizontal margin |
| ID_PROPERTY_DISPLAY_HYPERLINK | 하이퍼 링크 | Hyperlink |
| ID_PROPERTY_DISPLAY_IMAGENAME | 이미지 이름 | Image Name |
| ID_PROPERTY_DISPLAY_IMAGEPATH | 이미지 경로 | Image Path |
| ID_PROPERTY_DISPLAY_LAYER | 레이어 | Layer |
| ID_PROPERTY_DISPLAY_LEADERSCALE | 지시선 축척 | Leader Scale |
| ID_PROPERTY_DISPLAY_LEGNTH_ARC | 호 길이 | arc |
| ID_PROPERTY_DISPLAY_LENGTH | 길이 | Length |
| ID_PROPERTY_DISPLAY_LINESPACEDISTANCE | 행간 거리 | L.Space |
| ID_PROPERTY_DISPLAY_LINESPACINGFACTOR | 행간비율 | Line spacing factor |
| ID_PROPERTY_DISPLAY_LINETYPE | 선꼴 | L-Type |
| ID_PROPERTY_DISPLAY_LINETYPEGENERATIONON | 선 패턴 연속 | Line type generationon |
| ID_PROPERTY_DISPLAY_LINETYPESCALE | 선 축척 | LT-Scale |
| ID_PROPERTY_DISPLAY_LINEWEIGHT | 선 가중치 | L-Weight |
| ID_PROPERTY_DISPLAY_MAJORRADIUS | 장축 반지름 | Major Radius |
| ID_PROPERTY_DISPLAY_MATERIAL | 재료 | Material |
| ID_PROPERTY_DISPLAY_MEASUREMENT | 치수 측정값 | Dim. Value |
| ID_PROPERTY_DISPLAY_MINORRADIUS | 단축 반지름 | Minor Radius |
| ID_PROPERTY_DISPLAY_MLINESCALE | 여러줄 축척 | Multiline Scale |
| ID_PROPERTY_DISPLAY_NAME | 이름 | Name |
| ID_PROPERTY_DISPLAY_OBLIQUE | 기울기 | Obliquing |
| ID_PROPERTY_DISPLAY_OVERRIDE | 치수 재정의 | Dim. Override |
| ID_PROPERTY_DISPLAY_PATTERNANGLE | 해치 각도 | Pattern Angle |
| ID_PROPERTY_DISPLAY_PATTERNSCALE | 축척 | Scale |
| ID_PROPERTY_DISPLAY_PDIZE | 점 크기 | Pdize |
| ID_PROPERTY_DISPLAY_POINTSIZE_STANDARD | 점 크기 기준 | Point Size Reference |
| ID_PROPERTY_DISPLAY_RADIUS | 반지름 | Radius |
| ID_PROPERTY_DISPLAY_RADIUSRATIO | 반지름 비율 | Radius Ratio |
| ID_PROPERTY_DISPLAY_ROTATION | 회전 | Ang. |
| ID_PROPERTY_DISPLAY_ROUND | 둘레 | Perimeter |
| ID_PROPERTY_DISPLAY_ROWS | 행 | Rows |
| ID_PROPERTY_DISPLAY_ROWSPACE | 열 간격 | Column Spacing |
| ID_PROPERTY_DISPLAY_SCALE | 축척 | Scale |
| ID_PROPERTY_DISPLAY_SCALEFACTORS_X | X 축척 | X |
| ID_PROPERTY_DISPLAY_SCALEFACTORS_Y | Y 축척 | Y |
| ID_PROPERTY_DISPLAY_SCALEFACTORS_Z | Z 축척 | Z |
| ID_PROPERTY_DISPLAY_SELECTSCALE | 스케일 선택하기 | Select Scale |
| ID_PROPERTY_DISPLAY_SHAPE | 배경 투명도 | Shape |
| ID_PROPERTY_DISPLAY_SHOWIMAGE | 이미지 표시 | Show Image |
| ID_PROPERTY_DISPLAY_SORT | 항목 정렬 | Sort Items |
| ID_PROPERTY_DISPLAY_TEXTHEIGHT | 문자 높이 | Text height |
| ID_PROPERTY_DISPLAY_TEXTROTATION | 문자 회전 | Text Rotation |
| ID_PROPERTY_DISPLAY_TEXTSTYLE | 지시선 축척 | Text Style |
| ID_PROPERTY_DISPLAY_THICKNESS | 두께 | Thickness |
| ID_PROPERTY_DISPLAY_TOPMAJORRADIUS | 상단 장축 반지름 | Top Major Radius |
| ID_PROPERTY_DISPLAY_TOPMINORRADIUS | 상단 단축 반지름 | Top Minor Radius |
| ID_PROPERTY_DISPLAY_TOPRADIUS | 상단 반지름 | Top Radius |
| ID_PROPERTY_DISPLAY_TORUSRADIUS | 토러스 반지름 | Torusradius |
| ID_PROPERTY_DISPLAY_TOTALANGLE | 전체각도 | Totalangle |
| ID_PROPERTY_DISPLAY_TOTALAREA | 누적 면적 | Total area |
| ID_PROPERTY_DISPLAY_TOTALROUND | 총 둘레 | Total Perimeter |
| ID_PROPERTY_DISPLAY_TRANSPARENCY | 투명도 | Transp. (%) |
| ID_PROPERTY_DISPLAY_TUBERADIUS | 튜브 반지름 | Tuberadius |
| ID_PROPERTY_DISPLAY_TURNS | 회전 수 | Turns |
| ID_PROPERTY_DISPLAY_TURNSHEIGHT | 회전 당 높이 | Height per Rotation |
| ID_PROPERTY_DISPLAY_TURNSLOPE | 회전 기울기 | Rotation Slope |
| ID_PROPERTY_DISPLAY_TWIST | 방향 | Direction |
| ID_PROPERTY_DISPLAY_WIDTH | 폭 | Width |
| ID_PROPERTY_DISPLAY_WIDTHFACTOR | 폭 비율 | Width Factor |
| ID_PROPERTY_MSG_SELECTION_REQUEST_1 | 아래의 목록 | * Please select an object from the list below |
| ID_PROPERTY_TOOLTIP_COLOR | 색상 | Color |
| ID_PROPERTY_TOOLTIP_HYPERLINK | 하이퍼링크 | Hyperlink |
| ID_PROPERTY_TOOLTIP_LAYER | 레이어 | Layer |
| ID_PROPERTY_TOOLTIP_LINETYPE | 선스타일 | Line Style |
| ID_PROPERTY_TOOLTIP_LINETYPE_SCALE | 선축척 | Linetype Scale |
| ID_PROPERTY_TOOLTIP_LINEWEIGHT | 선가중치 | Lineweight |
| ID_PROPERTY_TOOLTIP_MATERIAL | 재료 | Material |
| ID_PROPERTY_TOOLTIP_THICKNESS | 두께 | Thickness |
| ID_PROPERTY_TOOLTIP_TRANSPARENCY | 투명도 | Transparency |
| ID_RBAS_Title | 철근상세도 불러오기 | Import Rebar Detail DWG |
| ID_REBAR_CommandButton_EXBM | 철근 마킹 블록 분해 | Explode Rebar Marking Block |
| ID_REBAR_CommandButton_MAKEBM | 분해된 철근 마킹을 블록으로 만들기 | Convert Rebar Marking to Block |
| ID_REBAR_CommandButton_SWBM | 마킹 문자 폭 맞춤 | Adjust Marking Text Width |
| ID_REBAR_CommandButton_TITLE_01 | 만들기 방식 | Creation Method |
| ID_REBAR_CommandButton_TITLE_30 | 철근제원 입력 | Enter Rebar Specifications |
| ID_REBAR_CommandButton_TOOLTIP_01 | 셀 내용 지우기 | Clear Cell Content |
| ID_REBAR_CommandButton_TOOLTIP_02 | 엑셀 파일 가져오기 | Import Excel File |
| ID_REBAR_CommandButton_TOOLTIP_03 | 엑셀 파일 내보내기 | Export to EXCEL File |
| ID_REBAR_GroupName_01 | 축척 설정 | Set Scale |
| ID_REBAR_GroupName_01_01 | 도면축척 | Set |
| ID_REBAR_GroupName_01_02 | 설정하기 | Drawing Scale |
| ID_REBAR_GroupName_02 | 철근 배근 | Rebar Arrangement |
| ID_REBAR_GroupName_02_01 | 철근마킹블록 | Rebar Marking Block |
| ID_REBAR_GroupName_03 | 철근 마킹블록 표기 | Rebar Marking Block Indication |
| ID_REBAR_GroupName_03_01 | 철근배근도 | Draw |
| ID_REBAR_GroupName_03_02 | 그리기 | Rebar Layout Diagram |
| ID_REBAR_GroupName_04 | 수정 / 조회 | Modify/Inquire |
| ID_REBAR_GroupName_04_01 | 철근 | Rebar Data Inquiry |
| ID_REBAR_GroupName_04_02 | 길이 조회 | & |
| ID_REBAR_GroupName_04_03 | 및 | Tag Modification |
| ID_REBAR_GroupName_05 | 철근상세도 | Rebar Detail Drawing |
| ID_REBAR_GroupName_05_01 | 건설CALS 표준레이어 | Load |
| ID_REBAR_GroupName_05_02 | 불러오기 | Standard Layers (CALS) |
| ID_REBAR_GroupName_06 | 철근재료표 | Rebar Material Table |
| ID_REBAR_GroupName_06_01 | 재료표 | Create |
| ID_REBAR_GroupName_06_02 | 만들기 | Material Table |
| ID_REBAR_GroupName_07 | 표준레이어 불러오기(건설CALS_구조물도) | Load Standard Layer (Construction CALS_Structure Drawing) |
| ID_REBAR_GroupName_07_01 | 철근상세도 | Rebar Detail Drawings |
| ID_REBAR_LayerGroup_BLOK | 블록 | Block |
| ID_REBAR_LayerGroup_CONC | 콘크리트 | Concrete |
| ID_REBAR_LayerGroup_DIM | 치수 | Dimension |
| ID_REBAR_LayerGroup_LEA | 지시선 | Lean |
| ID_REBAR_LayerGroup_RBAR | 철근 | Rebar |
| ID_REBAR_LayerGroup_SYMB | 심볼 | Symbol |
| ID_REBAR_LayerGroup_TABL | 재료표 | Table |
| ID_REBAR_LayerGroup_TEXT | 문자 | Text |
| ID_REBAR_RadioButton_REBAR_DETAIL_01_01 | 철근상세 + 철근제원 | Details & Specs |
| ID_REBAR_RadioButton_REBAR_DETAIL_01_02 | 철근상세 | Details |
| ID_REBAR_RadioButton_REBAR_DETAIL_01_03 | 철근제원 | Specs |
| ID_REBAR_TEXT_HEADER_03 | 번호 | No |
| ID_REBAR_TEXT_HEADER_04 | 직경 | Dia. |
| ID_REBAR_TEXT_HEADER_05 | 개수 | Qty. |
| ID_REBAR_TEXT_HEADER_15 | 레이어 코드 | Layer code |
| ID_REBAR_TEXT_HEADER_16 | 내용 | Content |
| ID_REBAR_TEXT_HEADER_17 | 요소 | Type |
| ID_REBAR_TEXT_HEADER_18 | 색상 | CLR |
| ID_REBAR_TEXT_HEADER_19 | 선종류 | Line Type |
| ID_REBAR_TEXT_HEADER_20 | 색상 | Class |
| ID_REBAR_TextBlock_REBAR_DETAIL | * 철근상세를 선택하면 하단 철근제원표에 추가됩니다. | * The selected Rebar Details will be added to the Rebar Specification Table below. |
| ID_REBAR_TextBlock_SCALE_02 | *입력된 도면축척 값을 기준으로 블록 및 재료표, 문자등의 크기가 정해짐 | * sizes of blocks, tables, and text are set by the drawing scale |
| ID_REBAR_TextBlock_TEXT_01 | * Enter : Type 복사 ↑↓→← : 이동 Del : Type 삭제 | * Enter : Copy Type       * ↑↓→← : Move       * Del : Delete Type |
| ID_REBAR_TextBlock_TITLE_01 | 철근상세 | Rebar Details |
| ID_REBAR_TextBlock_TITLE_04 | 축적비율 | Scale Ratio |
| ID_RMBAS_Title | 철근상세표시 불러오기 | Import Rebar Detail View |
| ID_SC_Description_InstructionsForUse | 검색 할 단어를 세미콜론(;)으로 구분해주세요. | Please separate the words you want to search by semicolon(;). |
| ID_SELECTION_STATUS_ALL | 전체 | ALL |
| ID_SELECTION_STATUS_GROUP | {0}그룹 | {0} Group |
| ID_SELECTION_STATUS_NONE | 없음 | None |
| ID_SELECTION_STATUS_VARIABLE | 다양함 | Variables |
| ID_TEXT_CheckBox_FIELDEVAL_01 | 저장할 때 | Update On Save |
| ID_TEXT_CheckBox_FIELDEVAL_02 | 파일열 때 | Update On Open |
| ID_TEXT_CheckBox_FIELDEVAL_03 | 플롯할 때 | Update On Plot |
| ID_TEXT_CheckBox_FIELDEVAL_04 | 재생성할 때 | Update On REGEN |
| ID_TEXT_CheckBox_FIELDEVAL_05 | 전자 전송할 때 | Update On ETRANSMIT |
| ID_TEXT_CommandButton_APT | 문자 머리말/꼬리말 추가 | Add Header/ Footer |
| ID_TEXT_CommandButton_APTEXT | 머리말/꼬리말 추가 | Add Header/ Footer |
| ID_TEXT_CommandButton_ART | 기준점 정렬 | Align Base points |
| ID_TEXT_CommandButton_ARTEXT | 기준점 정렬 | Align Text |
| ID_TEXT_CommandButton_ATTBTEDIT | 속성블록 문자 수정 | Edit Attributes |
| ID_TEXT_CommandButton_ATTDEF | 속성문자 만들기 | Define Attributes |
| ID_TEXT_CommandButton_BOUNDARYALIGNTEXT | 영역 내 문자 정렬 | Reposition Text Region |
| ID_TEXT_CommandButton_CADTOEXL | 캐드표를 엑셀로 | Export Table to EXCEL |
| ID_TEXT_CommandButton_CENTERREC | 중심으로 이동 | Move Text to Center of Area |
| ID_TEXT_CommandButton_CHARACTER | 특수문자표 불러오기 | Special Characters |
| ID_TEXT_CommandButton_CHATTE | 속성문자를 일반문자로 전환 | Attributes to Text |
| ID_TEXT_CommandButton_CONVERTTC | 대소문자 변경 | Change Case |
| ID_TEXT_CommandButton_CR | 중심으로 이동 | move to center |
| ID_TEXT_CommandButton_CREATETEXTSHADOW | 문자 그림자 생성 | Create a Text Shadow |
| ID_TEXT_CommandButton_CTEUP | 캐드표를 엑셀에 업데이트 | Update Table to EXCEL |
| ID_TEXT_CommandButton_DTEXT | 한줄 문자쓰기 | Single-Line Text |
| ID_TEXT_CommandButton_DTTMTEXT | 여러줄 문자로 변경 | Convert to Mtext |
| ID_TEXT_CommandButton_ETCUP | 엑셀표를 캐드에 업데이트 | Update Table from EXCEL |
| ID_TEXT_CommandButton_EXLTOCAD | 엑셀표를 캐드로 | Import Table from EXCEL |
| ID_TEXT_CommandButton_FIELD | 필드값 쓰기 | Create a Field |
| ID_TEXT_CommandButton_FIELDDISPLAY | 필드 값 배경표시 | Field Background |
| ID_TEXT_CommandButton_FIELDEVAL | 필드 업데이트 방식 | Field Update Options |
| ID_TEXT_CommandButton_FIND | 찾아 바꾸기 | Find and Replace |
| ID_TEXT_CommandButton_FINDANDREPLACETEXT | 문자 찾기/바꾸기 | Find/Replace Characters |
| ID_TEXT_CommandButton_FONTALT | 대체 글꼴 변경 | Alternate Font |
| ID_TEXT_CommandButton_JU | 기준점 변경 | Justify |
| ID_TEXT_CommandButton_JUSTIFYTEXT | 기준점 변경 | Change Justification |
| ID_TEXT_CommandButton_MAX | 최대/최소값 | Find Max/Min Value |
| ID_TEXT_CommandButton_MTEDIT | 여러줄 문자 변경 | Edit Mtext |
| ID_TEXT_CommandButton_MTEXT | 여러줄 문자쓰기 | Multi-Line Text |
| ID_TEXT_CommandButton_QTEXT | 화면상의 문자보기 방식 | Text Visibility |
| ID_TEXT_CommandButton_RESFONT | 미설치 폰트 및 조합형 한글 변경 | Replace Missing Fonts |
| ID_TEXT_CommandButton_SCALETEXT | 여러문자 크기 변경 | Scale Text |
| ID_TEXT_CommandButton_SEQTEDIT | 여러 문자내용 연속 수정 | Edit Text Sequentially |
| ID_TEXT_CommandButton_SPELL | 철자검사 | Spell Check |
| ID_TEXT_CommandButton_STYLE | 문자 스타일 작성 | Text Style Manager |
| ID_TEXT_CommandButton_TABLE | 테이블 넣기 | Create a Table |
| ID_TEXT_CommandButton_TABLEDIT | 테이블 편집 | Edit Table Contents |
| ID_TEXT_CommandButton_TABLEINDICATOR | 행과 열 셀 번호 | Display Row and Column Numbers |
| ID_TEXT_CommandButton_TABLESTYLE | 테이블 스타일 | Table Style |
| ID_TEXT_CommandButton_TABLETOOLBAR | 테이블 편집 도구 | Display Table Toolbar |
| ID_TEXT_CommandButton_TEXTBOX | 문자 테두리 생성 | Create a Text Box |
| ID_TEXT_CommandButton_TEXTBTPOINT | 두 점사이 문자쓰기 | Auto-Place Text Above/Below Points |
| ID_TEXT_CommandButton_TEXTCOPY | 문자 내용 복사 | Copy Text |
| ID_TEXT_CommandButton_TEXTEDIT | 문자내용 변경 | Edit Text/Mtext |
| ID_TEXT_CommandButton_TEXTFILL | 출력 시 트루타입 글꼴 표시 | Display Text Fill Mode |
| ID_TEXT_CommandButton_TEXTINPOL | 도형안에 문자쓰기 | Add Text to Shape |
| ID_TEXT_CommandButton_TEXTJOIN | 문자내용 합치기 | Join Text |
| ID_TEXT_CommandButton_TEXTMATCHCOPY | 문자 대응 복사 | Copy Text by Order |
| ID_TEXT_CommandButton_TEXTORDER | 오름,내림차순 정렬 | Sort and Reposition Text By Content |
| ID_TEXT_CommandButton_TEXTREPLACE | 지정 문자내용 수정 | Batch Replace Text |
| ID_TEXT_CommandButton_TEXTROTATE | 문자회전 | Rotate Text |
| ID_TEXT_CommandButton_TEXTSWAP | 문자내용 서로 바꾸기 | Swap Text Content |
| ID_TEXT_CommandButton_TEXTTOCLIPBOARD | 클립보드로 복사 | Copy to Clipboard |
| ID_TEXT_CommandButton_TEXTTOEXL | 선택문자 엑셀로 내보내기 | Export Selected Text to EXCEL |
| ID_TEXT_CommandButton_THP | 천단위 표기 | Thousand Unit Notation |
| ID_TEXT_CommandButton_THPOINT | 천단위 표기 | Thousand Separator |
| ID_TEXT_CommandButton_TSPACEFAC | 행간격 | Set Line Spacing |
| ID_TEXT_CommandButton_TSPACETYPE | 행간 유형 | Set Line Spacing Type |
| ID_TEXT_CommandButton_TXTEXP | 문자 외곽선 추출 | Explode Text Objects |
| ID_TEXT_CommandButton_UPDATEFIELD | 필드 업데이트 | Update Fields |
| ID_TEXT_GroupName_01_01 | 문자 | Text |
| ID_TEXT_GroupName_02_01 | 필드값 | Field |
| ID_TEXT_GroupName_03 | 문자 내용 변경 | Change text content |
| ID_TEXT_GroupName_03_01 | 문자 테이블 | Table |
| ID_TEXT_GroupName_04 | 문자 이동 / 정렬 | Move/Align text |
| ID_TEXT_GroupName_04_01 | 캐드에서 엑셀 | CAD |
| ID_TEXT_GroupName_04_02 | 로, | ↔ |
| ID_TEXT_GroupName_04_03 | 엑셀에서 캐드 | EXCEL |
| ID_TEXT_GroupName_05 | 문자 형상 변경 | Change character shape |
| ID_TEXT_GroupName_05_01 | 문자 | Edit |
| ID_TEXT_GroupName_05_02 | 내용 수정 | Text |
| ID_TEXT_GroupName_06 | 문자 조회 / 검사 | Text inquiry/inspection |
| ID_TEXT_GroupName_06_01 | 여러기준으로 | Align |
| ID_TEXT_GroupName_06_02 | 정렬하기 | Text |
| ID_TEXT_GroupName_07 | 숫자 사칙연산 | Arithmetic operations of numbers |
| ID_TEXT_GroupName_07_01 | 문자 조회 | Inspect |
| ID_TEXT_GroupName_07_02 | / | & |
| ID_TEXT_GroupName_07_03 | 찾아 바꾸기 | Find |
| ID_TEXT_GroupName_08_01 | 문자 | Text |
| ID_TEXT_GroupName_08_02 | 표시상태 | Display Status |
| ID_TEXT_GroupName_09_01 | 문자 | Copy |
| ID_TEXT_GroupName_09_02 | 복사 | Text |
| ID_TEXT_GroupName_10_01 | 문자 | Change |
| ID_TEXT_GroupName_10_02 | 내용 변경 | Text Contents |
| ID_TEXT_GroupName_11_01 | 문자 기준점 | Adjust |
| ID_TEXT_GroupName_11_02 | 조정/변경 | Text |
| ID_TEXT_GroupName_12_01 | 문자 | Text |
| ID_TEXT_GroupName_12_02 | 속성 변경 | Properties |
| ID_TEXT_GroupName_13_01 | 문자 | Add |
| ID_TEXT_GroupName_13_02 | 내용 추가 | Text |
| ID_TEXT_GroupName_14_01 | 문자 | Text |
| ID_TEXT_GroupName_14_02 | 꾸미기 | Styling |
| ID_TEXT_GroupName_15_01 | 속성블록 | Attribute |
| ID_TEXT_GroupName_15_02 | 의 | Text Block |
| ID_TEXT_GroupName_16_01 | 문자 스타일 | Text |
| ID_TEXT_GroupName_16_02 | 작성/변경 | Style |
| ID_TEXT_RadioButton_CTC_01 | 대문자로 변환 | Convert to uppercase |
| ID_TEXT_RadioButton_CTC_02 | 첫 글자만 대문자로 변환 | Convert only the first letter to uppercase |
| ID_TEXT_RadioButton_CTC_03 | 소문자로 변환 | Convert to lowercase |
| ID_TEXT_RadioButton_CTC_04 | 대소문자 변환 | Case conversion |
| ID_TEXT_RadioButton_FIELDDISPLAY_01 | 표시함 | Show |
| ID_TEXT_RadioButton_FIELDDISPLAY_02 | 표시안함 | Hide |
| ID_TEXT_RadioButton_MAX_01 | 최대 값 | Maximum value |
| ID_TEXT_RadioButton_MAX_02 | 최소 값 | Minimum value |
| ID_TEXT_RadioButton_MAX_03 | 모두 | Every |
| ID_TEXT_RadioButton_QTEXT_01 | 문자 그대로 | Display As It Is |
| ID_TEXT_RadioButton_QTEXT_02 | BOX 형태로 | Boundary Box |
| ID_TEXT_RadioButton_TABLEINDICATOR_01 | 표시함 | Show |
| ID_TEXT_RadioButton_TABLEINDICATOR_02 | 표시안함 | Hide |
| ID_TEXT_RadioButton_TABLETOOLBAR_01 | 표시함 | Show |
| ID_TEXT_RadioButton_TABLETOOLBAR_02 | 표시안함 | Hide |
| ID_TEXT_RadioButton_TER_01 | YES | Yes |
| ID_TEXT_RadioButton_TER_02 | NO | No |
| ID_TEXT_RadioButton_TEXTFILL_01 | 문자 그대로 | Filled Text |
| ID_TEXT_RadioButton_TEXTFILL_02 | 문자 윤곽선 | Outlines of Text |
| ID_TEXT_RadioButton_TRD_01 | 오름차순 | Ascending |
| ID_TEXT_RadioButton_TRD_02 | 내림차순 | Descending order |
| ID_TEXT_RadioButton_TSPACETYPE_01 | 높은문자 | Character Height |
| ID_TEXT_RadioButton_TSPACETYPE_02 | 지정간격 | Specified Interval |
| ID_TEXT_TextBlock_CTC | 변환 방식 | Case Conversion |
| ID_TEXT_TextBlock_MAX_01 | 찾는 대상 | What you are looking for |
| ID_TEXT_TextBlock_MAX_02 | 문자 높이 | Character Height |
| ID_TEXT_TextBlock_SED | 연속수정 순서 | Sequential Editing Order |
| ID_TEXT_TextBlock_TER | 회전 후 이동 | Rotate and Move |
| ID_TEXT_TextBlock_TJO | 합치기 순서 | Merge Order |
| ID_TEXT_TextBlock_TRD | 정렬 방식 선택 | Choose sorting method |
| ID_TLS_Advanced | 문자스타일 상세 | Advanced settings |
| ID_TLS_ToolTip_Advanced | 문자 스타일 상세 설정창이 열립니다 | Open advanced settings |
| ID_TSAS_AlignmentBy | 자리 맞추기 | Alignment |
| ID_TSAS_Annotative | 뷰포트 맞춤 | Annotative |
| ID_TSAS_Apply | 적용 | Apply |
| ID_TSAS_BigFont | 큰 글꼴 | Large Fonts |
| ID_TSAS_Bold | 굵게 | Bold |
| ID_TSAS_BoldItlic | 굵게 기울임꼴 | Bold Italic |
| ID_TSAS_ByCatpital | 모두 대문자 | Upper Case |
| ID_TSAS_ByHighCharacter | 높은문자 기준 | Align to Top |
| ID_TSAS_Cancel | 취소 | Quit |
| ID_TSAS_ComboBox_None | (없음) | (none) |
| ID_TSAS_CreateEditStyle | 내 스타일 생성 및 수정하기 | Text Style Details |
| ID_TSAS_DecorationText | 꾸밈형식 | Text Style |
| ID_TSAS_ERR_AlreadyExistStyleName | 이미 있는 스타일 이름입니다. 다른 스타일 이름을 입력해주세요. | The style name already exists. Please enter a different name. |
| ID_TSAS_ERR_CannotDeleteCurrentStyle | 현재로 설정된 스타일은 삭제할 수 없습니다. | The currently active style cannot be deleted. |
| ID_TSAS_ERR_CannotDeleteUsingStyle | 사용중인 스타일은 지울 수 없습니다. | Styles in use cannot be deleted. |
| ID_TSAS_ERR_InvalidIn | 잘못된 입력값입니다. 확인 후, 다시 입력해주세요. | Invalid in. Please check and try again |
| ID_TSAS_ERR_NoSelectFont | 폰트를 선택해주세요. | Please select a font. |
| ID_TSAS_ERR_NoStyleName | 스타일 이름이 비어있습니다. 스타일 이름을 입력해주세요. | The style name is empty. Please enter a style name. |
| ID_TSAS_Font | 글 꼴 | Font |
| ID_TSAS_Font2 | 글꼴 | Font |
| ID_TSAS_FontName | 글꼴 : | Font : |
| ID_TSAS_Height | 높이 | Height |
| ID_TSAS_Modify | 수정 | Edit |
| ID_TSAS_MSG_StopStyleModify | 스타일 편집을 중단하시겠습니까? | Do you want to cancel style editing? |
| ID_TSAS_Normal | 보통 | Normal |
| ID_TSAS_NormalItlic | 보통 기울임꼴 | Italic |
| ID_TSAS_Rotation | 기울기 | Obliquing |
| ID_TSAS_StyleName | 스타일 명 : | Style : |
| ID_TSAS_TextDirection | 문자 방향 | Text Direction |
| ID_TSAS_TextDirectionLayout | 배치에 맞게 문자방향 지정 | Set Text Direction to Match Layout |
| ID_TSAS_TextIsBackwards | 반대로 | Backwards |
| ID_TSAS_TextIsUpsideDown | 거꾸로 | Flipped |
| ID_TSAS_TextManager | 문자 스타일 관리자 | Text Style Manager |
| ID_TSAS_TextScale | 문자 스케일 | Text Scale |
| ID_TSAS_TextVertical | 수직 | Vertical |
| ID_TSAS_TextWritingVertical | 세로쓰기 | Stacked |
| ID_TSAS_Title | 문자 스타일 | Text Styles |
| ID_TSAS_WidthFactor | 폭비율 | Width |
| ID_TSIMB_TextStyle | 문자스타일 | TextStyle |
| ID_TSIMB_TextStyle_Current | 현재 문자 스타일 : | Current TextStyle : |
| ID_TSIMB_TextStyle_Description | 도면에 정의된 문자 스타일을 선택하여 현재 문자 스타일로 만들 수 있습니다. | You can select a text style defined in the drawing to make it the current text style. |
| ID_TSIMB_TextStyle_FontName | 글꼴 : | Font Name : |
| ID_TSIMB_TextStyle_SelectedEntity | 선택된 객체 문자 스타일 : | Selected Entity TextStyle : |
| ID_TSS_Title | 문자 스타일 | Text style |
| ID_UPPER_ActivatedFile | 작업중인 파일 | Activated File |
| ID_UPPER_Ask | 문의하기 | Support |
| ID_UPPER_CorruptedFile | 파일 손상 시 | Corrupted File |
| ID_UPPER_DRAWMODE | 그리기모드 | Draw Mode |
| ID_UPPER_EGBIM_Infomation | S/W 정보 | About |
| ID_UPPER_eTransmit | 도면묶기 | e-transmit |
| ID_UPPER_Guide | 설명보기 | User Guide |
| ID_UPPER_Help | 궁금하면 | Explore |
| ID_UPPER_LoadSettings | 불러오기 | Load Settings |
| ID_UPPER_MoveMotionToolTip | 창 이동 | Move Window |
| ID_UPPER_New | 새파일 | New File |
| ID_UPPER_Open | 찾아열기 | Open File |
| ID_UPPER_OpenFiles | 다른파일 열기 | Open Files |
| ID_UPPER_OpenSaveFilePath | 임시파일 | Temporary Files |
| ID_UPPER_RecentFiles | 최근파일 | Recent files |
| ID_UPPER_Recover | 복구하기 | Recover |
| ID_UPPER_Save | 저장 | Save |
| ID_UPPER_SaveAs | 복사저장 | Save As |
| ID_UPPER_SaveSettings | 저장하기 | Save Settings |
| ID_UPPER_SELECTEDENTITY | 선택객체 | Selected Entity |
| ID_UPPER_TOOLTIP_PLOT | 도면을 플로터, 프린터 또는 파일로 인쇄합니다. | Print a drawing to a plotter, printer, or file. |
| ID_UPPER_TOOLTIP_PLOT_TITLE | 인쇄 | Print |
| ID_UPPER_UserSettings | 사용자 설정 | User Settings |
| ID_UPPER_UserSettings_EXPORT | 내보내기 | Export |
| ID_VALUE_STATUS_VARIABLE | 다양함 | Variables |
| ID_VIEW_CommandButton_3DV | 3D Viewer 실행 | Run 3D Viewer |
| ID_VIEW_CommandButton_VPS3D | 3D 레이아웃 뷰포트 생성 | Create 3D Layout Viewport |
| ID_VIEW_GroupName_01_01 | 화면 | Zoom / Pan |
| ID_VIEW_GroupName_02_01 | 모형공간, 도면공간 | Model Space |
| ID_VIEW_GroupName_02_02 | 이동 | / Layout Space |
| ID_VIEW_GroupName_03_01 | 뷰포트 | Configure |
| ID_VIEW_GroupName_03_02 | 구성하기 | Viewport |
| ID_VIEW_GroupName_04_02 | 좌표계 조정 | UCS |
| ID_VIEW_GroupName_05_01 | 두점 | Rotate |
| ID_VIEW_GroupName_05_02 | 으로 | View |
| ID_VIEW_GroupName_06_01 | 3D뷰어 | 3D Viewer |
| ID_VIEW_GroupName_07_01 | 뷰포트크기 | Adjust |
| ID_VIEW_GroupName_07_02 | 조정하기 | Viewport Size |
| ID_VIEW_GroupName_08_02 | 평면뷰 | Plan |
| ID_VIEW_GroupName_09_01 | 3D뷰 | Rotate 3D View |
| ID_VIEW_GroupName_09_02 | 회전하기 | rotate |
| ID_VIEW_GroupName_10_01 | 작업공간 | Background |
| ID_VIEW_GroupName_11_01 | 도면공간 | Create/Modify |
| ID_VIEW_GroupName_11_02 | 에서 | Viewport |
| ID_VIEW_GroupName_12_02 | 비쥬얼스타일 | 3D |
| ID_VIEW_GroupName_12_03 | 변경하기 | Visaul style |
| ID_VIEW_GroupName_12_04 | 객체 | Change |
| ID_VIEW_GroupName_13_01 | 뷰 방향 | View |
| ID_VIEW_GroupName_14_01 | 도면공간 | Drawing space |
| ID_VIEW_RadioButton_PSLTSCALE_01 | 조정 | Adjust |
| ID_VIEW_RadioButton_PSLTSCALE_02 | 조정안함 | Do Not Adjust |
| ID_VIEW_RadioButton_UCSXYZ_01 | X축 | X-Axis |
| ID_VIEW_RadioButton_UCSXYZ_02 | Y축 | Y-Axis |
| ID_VIEW_RadioButton_UCSXYZ_03 | Z축 | Z-Axis |
| ID_VIEW_RadioButton_VIEWCURRENT_01 | 평면 | Plan |
| ID_VIEW_RadioButton_VIEWCURRENT_02 | 정면 | Front |
| ID_VIEW_RadioButton_VIEWCURRENT_03 | 좌측면 | Left |
| ID_VIEW_RadioButton_VIEWCURRENT_04 | 저면 | Bottom |
| ID_VIEW_RadioButton_VIEWCURRENT_05 | 배면 | Back |
| ID_VIEW_RadioButton_VIEWCURRENT_06 | 우측면 | Right |
| ID_VIEW_RadioButton_VIEWCURRENT_07 | 남서등각투영 | SW ISO |
| ID_VIEW_RadioButton_VIEWCURRENT_08 | 북동등각투영 | NE ISO |
| ID_VIEW_RadioButton_VIEWCURRENT_09 | 남동등각투영 | SE ISO |
| ID_VIEW_RadioButton_VIEWCURRENT_10 | 북서등각투영 | NW ISO |
| ID_VIEW_RadioButton_VPCONTROL_01 | 표시 | Display |
| ID_VIEW_RadioButton_VPCONTROL_02 | 표시안함 | Hide Display |
| ID_VIEW_RadioButton_VSBACKGROUNDS_01 | 표시 | Display |
| ID_VIEW_RadioButton_VSBACKGROUNDS_02 | 표시안함 | Do Not Display |
| ID_VIEW_RadioButton_VSCURRENTSub_01 | 2D와이어프레임 | 2D Wireframe |
| ID_VIEW_RadioButton_VSCURRENTSub_02 | 와이어프레임 | Wireframe |
| ID_VIEW_RadioButton_VSCURRENTSub_03 | 숨기기 | Hide Objects |
| ID_VIEW_RadioButton_VSCURRENTSub_04 | 실제 | Realistic |
| ID_VIEW_RadioButton_VSCURRENTSub_05 | 개념 | Conceptual |
| ID_VIEW_RadioButton_VSCURRENTSub_06 | 음영처리 | Shaded |
| ID_VIEW_RadioButton_VSCURRENTSub_07 | 모서리음영처리 | Edge Shading |
| ID_VIEW_RadioButton_VSCURRENTSub_08 | 회색음영처리 | Gray Shading |
| ID_VIEW_RadioButton_VSCURRENTSub_09 | 스케치 | Sketch |
| ID_VIEW_RadioButton_VSCURRENTSub_10 | X레이 | X-Ray |
| ID_WORKSPACE_CheckBox_Dynamic_In_01 | 좌표표시 | Pointer |
| ID_WORKSPACE_CheckBox_Dynamic_In_02 | 명령입력 | Command |
| ID_WORKSPACE_CheckBox_Dynamic_In_03 | 치수표시/입력 | Dimension |
| ID_WORKSPACE_CheckBox_Isometric_Drawing_01 | 좌측면 | Left Face |
| ID_WORKSPACE_CheckBox_Isometric_Drawing_02 | 우측면 | Right Face |
| ID_WORKSPACE_CheckBox_Isometric_Drawing_03 | 평면 | Plane |
| ID_WORKSPACE_GroupName_01 | 그리드 | Grid |
| ID_WORKSPACE_GroupName_02 | 그립 표시 설정 | Grip Display Settings |
| ID_WORKSPACE_GroupName_03 | 객체스냅 추적 | Object Snap Tracking |
| ID_WORKSPACE_GroupName_04 | 뷰큐브 표시 | ViewCube |
| ID_WORKSPACE_GroupName_05 | 직교모드 | Ortho Mode |
| ID_WORKSPACE_GroupName_06 | 선 가중치 | View As Lineweight |
| ID_WORKSPACE_GroupName_07 | 그리드 스냅 | Grid Snap |
| ID_WORKSPACE_GroupName_08 | 명령어 자동완성 | Command Autocomplete |
| ID_WORKSPACE_GroupName_10 | 좌표계 | Coordinate System |
| ID_WORKSPACE_GroupName_11 | 등각 투영 | Isometric |
| ID_WORKSPACE_GroupName_12 | 작업 모드 | Mode |
| ID_WORKSPACE_GroupName_13 | 커서 좌표값 표시 | Display Cursor Coordinates |
| ID_WORKSPACE_GroupName_14 | 중복객체 | Selection |
| ID_WORKSPACE_GroupName_15 | 리스트 박스 | Cycling |
| ID_WORKSPACE_GroupName_16 | 동적 입력 | Dynamic Input |
| ID_WORKSPACE_GroupName_17 | 객체스냅 | Object Snap |
| ID_WORKSPACE_GroupName_18 | 극좌표 추적 | Angle Snap Tracking |
| ID_WORKSPACE_GroupName_19 | 선택 효과 | Selection |
| ID_WORKSPACE_GroupName_20 | 설정 | Effects |
| ID_WORKSPACE_GroupName_UCS | 좌표계색상 | Coordinate System Color |
| ID_WORKSPACE_GroupName_UCS_01 | X축 | X-Axis |
| ID_WORKSPACE_GroupName_UCS_02 | Y축 | Y-Axis |
| ID_WORKSPACE_GroupName_UCS_03 | Z축 | Z-Axis |
| ID_WORKSPACE_GroupName_UCS_04 | UCS좌표계 축의 색상을 변경하면 | Changing UCS Axis Colors Also Changes Crosshair Colors |
| ID_WORKSPACE_GroupName_UCS_05 | 십자선의 축 색상도 변경 | Change the axis color of the crosshair |
| ID_WORKSPACE_RadioButton_Grid_01_01 | 선 | Line |
| ID_WORKSPACE_RadioButton_Grid_01_02 | 점 | Point |
| ID_WORKSPACE_RadioButton_Grid_04_01 | 공간 전체 | Entire Space |
| ID_WORKSPACE_RadioButton_Grid_04_02 | 한계 영역 | Limits Area |
| ID_WORKSPACE_RadioButton_Grid_Snap_02_01 | 명령 진행시 | During Command |
| ID_WORKSPACE_RadioButton_Grid_Snap_02_02 | 항상 | Always |
| ID_WORKSPACE_RadioButton_Selection_Object_Grip_01_01 | 정점 그립 | Vertex |
| ID_WORKSPACE_RadioButton_Selection_Object_Grip_01_02 | 정점 및 중간 그립 | Vertex and Midpoint |
| ID_WORKSPACE_RadioButton_Selection_Object_Grip_07_01 | 표시 | Show |
| ID_WORKSPACE_RadioButton_Selection_Object_Grip_07_02 | 표시 안함 | Do Not Show |
| ID_WORKSPACE_RadioButton_Selection_Visual_Effects_06_01 | 미리보기 없음 | No Preview |
| ID_WORKSPACE_RadioButton_Selection_Visual_Effects_06_02 | 명령 진행시 | On Command |
| ID_WORKSPACE_RadioButton_Selection_Visual_Effects_06_03 | 항상 | Always Highlight |
| ID_WORKSPACE_TextBlock_Angle_Snap_Tracking_01 | 증분 각도 | Set Angle |
| ID_WORKSPACE_TextBlock_Angle_Snap_Tracking_02 | 각도 추가 | Add Extra Angle |
| ID_WORKSPACE_TextBlock_Angle_Snap_Tracking_03 | *입력값 만큼 증분하여 표시 | Track Angle Incrementally |
| ID_WORKSPACE_TextBlock_Angle_Snap_Tracking_04 | *입력각도만 찾아서 표시 | Display Extra Angle |
| ID_WORKSPACE_TextBlock_Angle_Snap_Tracking_06 | 기준점으로부터 원하는 | * Display Guide Lines At A Desired Angle |
| ID_WORKSPACE_TextBlock_Angle_Snap_Tracking_07 | 각도 위치를 잡아 가이드라인 표시 | From A Base Point |
| ID_WORKSPACE_TextBlock_Command_Auto_Complete_01 | 지연시간(ms) | Delay Time (ms) |
| ID_WORKSPACE_TextBlock_Command_Auto_Complete_02 | 명령 입력시 자동완성 기능 설정 | * Settings for command Auto-Completion |
| ID_WORKSPACE_TextBlock_FUNC_ANGSNAPTRACK | 극좌표 추적 | Angle Snap Tracking |
| ID_WORKSPACE_TextBlock_FUNC_AUTOCOMPLETEMODE | 명령어 자동완성 | Auto Complete Mode |
| ID_WORKSPACE_TextBlock_FUNC_DYNMODE | 동적 입력 | Dynmode |
| ID_WORKSPACE_TextBlock_FUNC_GRID | 격자배경 | Grid |
| ID_WORKSPACE_TextBlock_FUNC_GRIPS | 그립 표시 설정 | Selection Cycling |
| ID_WORKSPACE_TextBlock_FUNC_LWDISPLAY | 선가중치 | Lineweight |
| ID_WORKSPACE_TextBlock_FUNC_OBJSNAPTRACK | 객체 스냅 추적 | Object Snap Tracking |
| ID_WORKSPACE_TextBlock_FUNC_ORTHO | 직각교차 | Orthogonal |
| ID_WORKSPACE_TextBlock_FUNC_OSNAP | 객체스냅 | Object Snap |
| ID_WORKSPACE_TextBlock_FUNC_SELECTIONCYCLING | 중복객체 리스트 박스 | Selection Cycling |
| ID_WORKSPACE_TextBlock_FUNC_SNAP | 격자스냅 | Grid Snap |
| ID_WORKSPACE_TextBlock_FUNC_SNAPSTYL | 등각 투영 작업 모드 | Isometric Drawing |
| ID_WORKSPACE_TextBlock_FUNC_VisualEffect | 선택효과 | Visual Effect |
| ID_WORKSPACE_TextBlock_Grid_01 | 형식 | Format Type |
| ID_WORKSPACE_TextBlock_Grid_02 | 색상 | Color |
| ID_WORKSPACE_TextBlock_Grid_02_01 | 주 그리드 | Primary Grid |
| ID_WORKSPACE_TextBlock_Grid_02_02 | 보조 그리드 | Secondary Grid |
| ID_WORKSPACE_TextBlock_Grid_03 | 간격 | Spacing |
| ID_WORKSPACE_TextBlock_Grid_03_01 | *범위 1~100 | (Range 1~100) |
| ID_WORKSPACE_TextBlock_Grid_04 | 범위 | Range |
| ID_WORKSPACE_TextBlock_Grid_Snap_01 | 스냅간격 | Snap Spacing |
| ID_WORKSPACE_TextBlock_Grid_Snap_01_01 | 수평 | Horizontal |
| ID_WORKSPACE_TextBlock_Grid_Snap_01_02 | 수직 | Vertical |
| ID_WORKSPACE_TextBlock_Grid_Snap_02 | 스냅 실행 | Grid Snap |
| ID_WORKSPACE_TextBlock_Isometric_Drawing_01 | 2D 평면에 3D 형상처럼 그릴 때 적용 | * Applied when drawing 3D Shapes on a 2D Plane |
| ID_WORKSPACE_TextBlock_Isometric_Drawing_02 | 투영된 모드이므로 작업공간은 항상 평면 | * Projected mode keeps Workspace always in a plane |
| ID_WORKSPACE_TextBlock_Object_Snap_01 | 표식기 색상 | Marker Color |
| ID_WORKSPACE_TextBlock_Object_Snap_02 | 표식기 크기 | Marker Size |
| ID_WORKSPACE_TextBlock_Object_Snap_03 | 스냅선택 | Snap Selection |
| ID_WORKSPACE_TextBlock_Object_Snap_04 | 유형추가 | Add Type |
| ID_WORKSPACE_TextBlock_Object_Snap_Tracking_01 | 스냅점으로부터 직교 방향의 가이드 라인 표시 | * Display orthogonal guide lines from snap points |
| ID_WORKSPACE_TextBlock_Object_Snap_Tracking_02 | 수평 가이드 | Horizontal Guide |
| ID_WORKSPACE_TextBlock_Object_Snap_Tracking_03 | 수직 가이드 | Vertical Guide |
| ID_WORKSPACE_TextBlock_Orthogonal_Mode_01 | 명령어 실행 중에 커서 이동을 수평 및 수직으로 제한 | * Restrict cursor movement to horizontal and vertical during command execution |
| ID_WORKSPACE_TextBlock_Orthogonal_Mode_02 | ON(움직임 제한) | ON (Apply Ortho Mode) |
| ID_WORKSPACE_TextBlock_Orthogonal_Mode_03 | OFF(움직임제한 없음) | OFF (Disable Ortho Mode) |
| ID_WORKSPACE_TextBlock_Selection_Object_Grip_01 | 그립 표시 | Display |
| ID_WORKSPACE_TextBlock_Selection_Object_Grip_02 | 색상 | Color |
| ID_WORKSPACE_TextBlock_Selection_Object_Grip_03 | 정점/중간그립 | Vertex/Midpoint Grip |
| ID_WORKSPACE_TextBlock_Selection_Object_Grip_04 | 선택된 그립 | Selected Grip |
| ID_WORKSPACE_TextBlock_Selection_Object_Grip_05 | 크기 | Size |
| ID_WORKSPACE_TextBlock_Selection_Object_Grip_06 | 그립 개수 | Number of Grips |
| ID_WORKSPACE_TextBlock_Selection_Object_Grip_06_01 | 최대 | Up To |
| ID_WORKSPACE_TextBlock_Selection_Object_Grip_06_02 | 개 | Grips |
| ID_WORKSPACE_TextBlock_Selection_Object_Grip_07 | 그립 명령 | Grip Command |
| ID_WORKSPACE_TextBlock_Selection_of_Overlapping_Objects_01 | 여러 객체가 겹쳐있을 때 | * Creates a list box to select |
| ID_WORKSPACE_TextBlock_Selection_of_Overlapping_Objects_02 | 객체를 확인 및 선택 할 수 있는 | objects when overlapping |
| ID_WORKSPACE_TextBlock_Selection_Visual_Effects_01 | 영역색상 | Area Color |
| ID_WORKSPACE_TextBlock_Selection_Visual_Effects_02 | 왼쪽시작 | Start on Left |
| ID_WORKSPACE_TextBlock_Selection_Visual_Effects_03 | 오른쪽시작 | Start on Right |
| ID_WORKSPACE_TextBlock_Selection_Visual_Effects_04 | 선택 영역 불투명도 | Selection Area Opacity |
| ID_WORKSPACE_TextBlock_Selection_Visual_Effects_05 | 미리보기 | Preselection |
| ID_WORKSPACE_TextBlock_Selection_Visual_Effects_06 | 선택 전, 커서가 객체 위에 있을 때 표시 | * Highlight object when cursor hovers before selection |
| ID_WORKSPACE_TextBlock_SNAPSUB_01 | 전체선택 | ALL |
| ID_WORKSPACE_TextBlock_SNAPSUB_02 | 끝점 | END |
| ID_WORKSPACE_TextBlock_SNAPSUB_03 | 사분점 | QUA |
| ID_WORKSPACE_TextBlock_SNAPSUB_04 | 중간점 | MID |
| ID_WORKSPACE_TextBlock_SNAPSUB_05 | 중심점 | CEN |
| ID_WORKSPACE_TextBlock_SNAPSUB_06 | 교차점 | INT |
| ID_WORKSPACE_TextBlock_SNAPSUB_07 | 연장선 | EXT |
| ID_WORKSPACE_TextBlock_SNAPSUB_08 | 노드점 | NOD |
| ID_WORKSPACE_TextBlock_SNAPSUB_09 | 삽입점 | INS |
| ID_WORKSPACE_TextBlock_SNAPSUB_10 | 직교점 | PER |
| ID_WORKSPACE_TextBlock_SNAPSUB_11 | 근처점 | NEA |
| ID_WORKSPACE_TextBlock_SNAPSUB_12 | 평행점 | PAR |
| ID_WORKSPACE_TextBlock_SNAPSUB_13 | 접점 | TAN |
| ID_WORKSPACE_TextBlock_SNAPSUB_14 | 가상교차점 | APP |
| ID_WORKSPACE_TextBlock_SNAPSUB_15 | 정점 | Vertex |
| ID_WORKSPACE_TextBlock_SNAPSUB_16 | 면의 중심 | Face Center |
| ID_WORKSPACE_TextBlock_SNAPSUB_17 | 모서리 중간점 | Edge Midpoint |
| ID_WORKSPACE_TextBlock_SNAPSUB_18 | 면의 근처점 | Near Face Point |
| ID_WORKSPACE_TextBlock_SNAPSUB_19 | 매듭 | Knot |
| ID_WORKSPACE_TextBlock_SNAPSUB_21 | PDF | pdf |
| ID_WORKSPACE_TextBlock_SNAPSUB_22 | DWF | dwf |
| ID_WORKSPACE_TextBlock_SNAPSUB_23 | 해치 | hatch |
| ID_WORKSPACE_TextBlock_SNAPSUB_24 | DGN | dgn |
| ID_WORKSPACE_TextBlock_View_as_Lineweight_01 | 선 가중치 표시여부 | * Display Lineweight |
| ID_WORKSPACE_TextBlock_View_as_Lineweight_02 | ON(가중치 값 만큼 표시) | ON (Apply Lineweight) |
| ID_WORKSPACE_TextBlock_View_as_Lineweight_03 | OFF(동일하게표시) | OFF (Disable Lineweight) |
| ID_WORKSPACE_TextBlock_ViewCube | 작업공간 뷰 회전 | * Show or hide the ViewCube |
| ID_WORKSPACE_TextBlock_ZoomDetail_01 | 값이 높을 수록 더 적은 도면요소를 표시하여 속도향상 평소의 객체표시가 아닌 확대,축소할 경우에만 해당 | * A higher value displays fewer drawing elements, improving performance. This only applies during zooming, no in the normal object display. |
| ID_WORKSPACE_TextBlock_ZoomDetail_02 | 요소표시 값 | Level of Detail |
| IDC_BL_Main_1 | 설계일반 | General |
| IDC_BL_Main_1_Sub_1 | 기호 | Symbols |
| IDC_BL_Main_1_Sub_1_Group_1 | 문자기호 | Text symbols |
| IDC_BL_Main_1_Sub_1_Group_2 | 방위기호 | North arrows |
| IDC_BL_Main_1_Sub_1_Group_3 | 수위／표고 | Water level/EL |
| IDC_BL_Main_1_Sub_1_Group_4 | 패턴 | Patterns |
| IDC_BL_Main_1_Sub_2 | 도곽 | Title Block/Leaders |
| IDC_BL_Main_1_Sub_2_Group_1 | 도곽 | Title Blocks |
| IDC_BL_Main_1_Sub_2_Group_2 | 로고 | Logo |
| IDC_BL_Main_1_Sub_2_Group_3 | 타이틀 | Title |
| IDC_BL_Main_1_Sub_3 | 인출 | Leader |
| IDC_BL_Main_1_Sub_3_Group_1 | 인출블럭 | Leader Blocks |
| IDC_BL_Main_1_Sub_3_Group_2 | 표준도인출부호 | Leader Symbols |
| IDC_BL_Main_1_Sub_4 | 치수및지시 | Dim/ |
| IDC_BL_Main_1_Sub_4_Group_1 | 참조지시 | Reference instructions |
| IDC_BL_Main_1_Sub_4_Group_2 | 치수블럭 | Dimension block |
| IDC_BL_Main_1_Sub_5 | 축척 | Scale |
| IDC_BL_Main_1_Sub_5_Group_1 | 그래픽축척 | Graphic scale |
| IDC_BL_Main_1_Sub_5_Group_2 | 축척 | Scale |
| IDC_BL_Main_1_Sub_6 | 표시 | Mark |
| IDC_BL_Main_1_Sub_6_Group_1 | 단면표시 | Cross section mark |
| IDC_BL_Main_1_Sub_6_Group_2 | 방향표시 | Direction mark |
| IDC_BL_Main_1_Sub_6_Group_3 | 번호표시 | Number mark |
| IDC_BL_Main_2 | 측량및지반조사 | Surveying and ground investigation |
| IDC_BL_Main_2_Sub_1 | 측량 | Survey |
| IDC_BL_Main_2_Sub_1_Group_1 | 관측및계측 | Observation and survey |
| IDC_BL_Main_2_Sub_1_Group_2 | 측량점 | survey point |
| IDC_BL_Main_2_Sub_2 | 지반조사 | Ground investigation |
| IDC_BL_Main_2_Sub_2_Group_1 | 보링주상위치 | Boring column position |
| IDC_BL_Main_3 | 도로 | Roadway |
| IDC_BL_Main_3_Sub_1 | 배수 | drainage |
| IDC_BL_Main_3_Sub_1_Group_1 | 방수거 | Waterproofer |
| IDC_BL_Main_3_Sub_1_Group_2 | 배수맨홀 | Drain manhole |
| IDC_BL_Main_3_Sub_1_Group_3 | 배수시설 | Drainage system |
| IDC_BL_Main_3_Sub_1_Group_4 | 배수펌프 | Drain pump |
| IDC_BL_Main_3_Sub_1_Group_5 | 지반배수 | Dround drainage |
| IDC_BL_Main_3_Sub_1_Group_6 | 집수거 | Collection |
| IDC_BL_Main_3_Sub_2 | 부대-교통표지판 | Troop-traffic signs |
| IDC_BL_Main_3_Sub_2_Group_1 | 규제 | Regulation |
| IDC_BL_Main_3_Sub_2_Group_2 | 기타 | Etc |
| IDC_BL_Main_3_Sub_2_Group_3 | 도로번호 | Road number |
| IDC_BL_Main_3_Sub_2_Group_4 | 보조 | Assistance |
| IDC_BL_Main_3_Sub_2_Group_5 | 주의 | Caution |
| IDC_BL_Main_3_Sub_2_Group_6 | 지시 | Instruction |
| IDC_BL_Main_3_Sub_2_Group_7 | 표지판지주 | Sign holding |
| IDC_BL_Main_3_Sub_3 | 부대-노면표시 | Troop-road markings |
| IDC_BL_Main_3_Sub_3_Group_1 | 규제 | Regulation |
| IDC_BL_Main_3_Sub_3_Group_2 | 지시 | Instruction |
| IDC_BL_Main_3_Sub_4 | 부대-안전표시판 | Troop-Safety Signs |
| IDC_BL_Main_3_Sub_4_Group_1 | 고속국도 | High speed national highway |
| IDC_BL_Main_3_Sub_4_Group_2 | 국도 | National highway |
| IDC_BL_Main_3_Sub_4_Group_3 | 시내 | Downtown |
| IDC_BL_Main_3_Sub_5 | 선형 | Linear |
| IDC_BL_Main_3_Sub_5_Group_1 | 선형심벌 | Linear symbol |
| IDC_BL_Main_3_Sub_5_Group_2 | 선형제원 | Linear specifications |
| IDC_BL_Main_3_Sub_5_Group_3 | 연거리이정표시 | Milestone mileage |
| IDC_BL_Main_3_Sub_5_Group_4 | 편경사 | Superelevation |
| IDC_BL_Main_3_Sub_6 | 종단면도 | Logitudinal section |
| IDC_BL_Main_3_Sub_6_Group_1 | 구조물제원 | Structure Specifications |
| IDC_BL_Main_3_Sub_6_Group_2 | 연거리이정표시 | Milestone mileage |
| IDC_BL_Main_3_Sub_6_Group_3 | 유용토제원 | Specifications of useful soil |
| IDC_BL_Main_3_Sub_6_Group_4 | 축척표시 | Mark Scale |
| IDC_BL_Main_3_Sub_7 | 포장 | Paving |
| IDC_BL_Main_3_Sub_7_Group_1 | 범례 | legend |
| IDC_BL_Main_3_Sub_8 | 횡단면도 | Cross section |
| IDC_BL_Main_3_Sub_8_Group_1 | 건물경계 | Building border |
| IDC_BL_Main_3_Sub_8_Group_2 | 용지경계 | Paper Border |
| IDC_BL_Main_3_Sub_8_Group_3 | 측점 | Surveying station |
| IDC_BL_Main_3_Sub_8_Group_4 | 토적표 | Mass Curve Table |
| IDC_BL_Main_3_Sub_8_Group_5 | 횡단시설 | Crossing facility |
| IDC_BL_Main_3_Sub_8_Group_6 | 횡배수구조물표 | Lateral drainage structure table |
| IDC_BL_Main_4 | 토목구조 | Civil engineering structure |
| IDC_BL_Main_4_Sub_1 | 가시설 | Temporary facilities |
| IDC_BL_Main_4_Sub_1_Group_1 | 가시설 | Temporary facilities |
| IDC_BL_Main_4_Sub_2 | 구조도 | Structure Diagram |
| IDC_BL_Main_4_Sub_2_Group_1 | 철근 | Rebar |
| IDC_BL_Main_4_Sub_2_Group_2 | 철근가공조립 | Rebar Assembly Type |
| IDC_BL_Main_4_Sub_3 | 상세도 | Detailed view |
| IDC_BL_Main_4_Sub_3_Group_1 | 강재 | Steel |
| IDC_BL_Main_4_Sub_3_Group_2 | 리브플레이트 | Rib plate |
| IDC_BL_Main_4_Sub_3_Group_3 | 볼트홀 | Bolt hole |
| IDC_BL_Main_4_Sub_3_Group_4 | 슈 | Shoe |
| IDC_BL_Main_4_Sub_3_Group_5 | 파일 | File |
| IDC_BL_Main_5 | 상하수도 | Water and sewage |
| IDC_BL_Main_5_Sub_1 | 상수도 | Water supply |
| IDC_BL_Main_5_Sub_1_Group_1 | 관이음 | Pipe joint |
| IDC_BL_Main_5_Sub_1_Group_2 | 기타설비 | Other facilities |
| IDC_BL_Main_5_Sub_1_Group_3 | 상부벨브 | upper valve |
| IDC_BL_Main_5_Sub_1_Group_4 | 상수도맨홀 | Water supply manhole |
| IDC_BL_Main_5_Sub_1_Group_5 | 상수도시설 | Water supply facilities |
| IDC_BL_Main_5_Sub_1_Group_6 | 상수펌프 | Water pump |
| IDC_BL_Main_5_Sub_2 | 하수도 | Sewer |
| IDC_BL_Main_5_Sub_2_Group_1 | 관이음 | Pipe joint |
| IDC_BL_Main_5_Sub_2_Group_2 | 기타설비 | Other facilities |
| IDC_BL_Main_5_Sub_2_Group_3 | 측정설비 | Measuring equipment |
| IDC_BL_Main_5_Sub_2_Group_4 | 하수／오수시설 | Sewage facilities |
| IDC_BL_Main_5_Sub_2_Group_5 | 하수도맨홀 | Sewer manhole |
| IDC_BL_Main_5_Sub_2_Group_6 | 하수설비 | sewage facilities |
| IDC_BL_Main_5_Sub_2_Group_7 | 하수펌프 | Sewage pump |
| IDC_F_Main1 | 돋움 | Dotum |
| IDC_F_Main1_Sub1 | 각진형 | DotumChe |
| IDC_F_Main1_Sub2 | 둥근형 | Round |
| IDC_F_Main1_Sub3 | 복합형 | Complex |
| IDC_F_Main2 | 바탕 | Batang |
| IDC_F_Main2_Sub1 | 바탕체형 | BatangChe |
| IDC_F_Main2_Sub2 | 궁서형 | Gungsuh |
| IDC_F_Main3 | 꾸밈 | Embelishment |
| IDC_F_Main3_Sub1 | 필기형 | Handwriting |
| IDC_F_Main3_Sub2 | 판화형 | Engraving |
| IDC_F_Main3_Sub3 | 장식형 | Decoration |
| IDC_F_Main4 | 쉐이프 | Shape |
| IDC_F_Main5 | 미분류 | Unknown |
| IDC_HW_Main | 도움말 | Help |
| IDC_HW_Main1 | 인터페이스 | Interface |
| IDC_HW_Main2 | 사용자화 | Customization |
| IDC_HW_Main3 | 듀얼화면 모드 | Dual screen mode |
| IDC_HW_Main5 | 명령어전체보기 | View all commands |
| IDC_HW_Main6 | 스타일 관리 | Style management |
| IDC_HW_Main7 | 객체특성관리 | Object property management |
| IDC_HW_Main8 | 통합블록관리 | Block Manager |
| IDC_HW_Main9 | 인쇄 | Print |
| IDC_LT_Main1 | 기본선 | Basic |
| IDC_LT_Main1_Sub1 | 실선 | Continuous line |
| IDC_LT_Main1_Sub2 | 파선·점선 | Dashed & Dotted line |
| IDC_LT_Main1_Sub3 | 일점쇄선 | One Dashed line |
| IDC_LT_Main1_Sub4 | 이점쇄선 | Two Dashed line |
| IDC_LT_Main1_Sub5 | 삼점쇄선 | Three Dashed line |
| IDC_LT_Main2 | 지형·지반·경계 | Topography, Ground, Boundary |
| IDC_LT_Main2_Sub1 | 지형 | Topography |
| IDC_LT_Main2_Sub2 | 굴착 | Excavation |
| IDC_LT_Main2_Sub3 | 절단 | Cutting |
| IDC_LT_Main2_Sub4 | 경계 | Boundary |
| IDC_LT_Main3 | 시설· 설비 | Facility, Equipment |
| IDC_LT_Main3_Sub1 | 시설 | Facility |
| IDC_LT_Main3_Sub2 | 설비 | Equipment |
| IDC_LT_Main3_Sub3 | 시설물 | Facilities |
| IDC_LT_Main3_Sub4 | 시설기초 | Facility foundation |
| IDC_LT_Main4 | 매설관로 | Buried pipeline |
| IDC_LT_Main4_Sub1 | 상수관로 | Water pipeline |
| IDC_LT_Main4_Sub2 | 오수관로 | Sewage pipeline |
| IDC_LT_Main4_Sub3 | 통신관로 | Communication pipeline |
| IDC_LT_Main4_Sub4 | 전기선로 | Electricline |
| IDC_LT_Main4_Sub5 | 가스관로 | Gas pipeline |
| IDC_LT_Main5 | 측구 | Drainage Channel |
| IDC_LT_Main5_Sub1 | 쌓기 | Stacking |
| IDC_LT_Main5_Sub2 | 깎기 | Clipper |
| IDC_LT_Main5_Sub3 | 소단 | Bench |
| IDC_LT_Main5_Sub4 | 노면 | Road surface |
| IDC_LT_Main5_Sub5 | U형·J형 | Type U&J |
| IDC_LT_Main6 | 배수 | Drainage |
| IDC_LT_Main6_Sub1 | 물방향 | Water direction |
| IDC_LT_Main6_Sub2 | 횡배수관 | Horizontal drainage pipe |
| IDC_LT_Main6_Sub3 | 종배수관 | Vertical drainage pipe |
| IDC_LT_Main6_Sub4 | 맹암거 | Blind |
| IDC_LT_Main6_Sub5 | 용수로 | Water path |
| IDC_RBL_Main_1 | 철근가공조립 | Rebar Assembly Type |
| IDC_RBL_Main_1_Sub_1 | 철근가공조립(A) | Rebar Assembly Type(A) |
| IDC_RBL_Main_1_Sub_10 | 철근가공조립(J) | Rebar Assembly Type(J) |
| IDC_RBL_Main_1_Sub_11 | 철근가공조립(K) | Rebar Assembly Type(K) |
| IDC_RBL_Main_1_Sub_13 | 철근가공조립(L) | Rebar Assembly Type(L) |
| IDC_RBL_Main_1_Sub_14 | 철근가공조립(M) | Rebar Assembly Type(M) |
| IDC_RBL_Main_1_Sub_15 | 철근가공조립(X) | Rebar Assembly Type(X) |
| IDC_RBL_Main_1_Sub_2 | 철근가공조립(B) | Rebar Assembly Type(B) |
| IDC_RBL_Main_1_Sub_3 | 철근가공조립(C) | Rebar Assembly Type(C) |
| IDC_RBL_Main_1_Sub_4 | 철근가공조립(D) | Rebar Assembly Type(D) |
| IDC_RBL_Main_1_Sub_5 | 철근가공조립(E) | Rebar Assembly Type(E) |
| IDC_RBL_Main_1_Sub_6 | 철근가공조립(F) | Rebar Assembly Type(F) |
| IDC_RBL_Main_1_Sub_7 | 철근가공조립(G) | Rebar Assembly Type(G) |
| IDC_RBL_Main_1_Sub_8 | 철근가공조립(H) | Rebar Assembly Type(H) |
| IDC_RBL_Main_1_Sub_9 | 철근가공조립(I) | Rebar Assembly Type(I) |
| IDC_SK_Main_1 | Draw | Draw2 |
| IDC_SK_Main_1_Sub_1 | 선스타일 생성 및 수정하기 | Creating and modifying line types |
| IDC_SK_Main_1_Sub_10 | 자유곡선 그리기 | Drawing a freehand curve |
| IDC_SK_Main_1_Sub_11 | 해치 경계 또는 영역 작성하기 | Creating Hatch Boundaries or Regions |
| IDC_SK_Main_1_Sub_12 | 해치(솔리드 및 패턴) 넣기 | Add hatches (solids and patterns) |
| IDC_SK_Main_1_Sub_13 | 엑셀에서 가져와 그리기 | Import and draw from Excel |
| IDC_SK_Main_1_Sub_2 | 직선 그리기 | Draw Straight Lines |
| IDC_SK_Main_1_Sub_3 | 무한선 그리기 | Draw infinite lines |
| IDC_SK_Main_1_Sub_4 | 점 그리기 | Draw Dots |
| IDC_SK_Main_1_Sub_5 | 곡선 그리기 | Draw Curves |
| IDC_SK_Main_1_Sub_6 | 도형 그리기 | Draw Shapes |
| IDC_SK_Main_1_Sub_7 | 등분선 넣기 | Insert dividing line |
| IDC_SK_Main_1_Sub_8 | 절단선 또는 화살표 넣기 | Add cutting lines or arrows |
| IDC_SK_Main_1_Sub_9 | 폴리선 그리기 | Add cutting lines or arrows |
| IDC_SK_Main_10_Sub_1 | 형상 정보 조회 | Shape information inquiry |
| IDC_SK_Main_10_Sub_2 | 블록, 반지름 찾기 | Find radius, block |
| IDC_SK_Main_10_Sub_3 | 객체 특성 조회 | Object property query |
| IDC_SK_Main_10_Sub_4 | 좌표 조회 및 엑셀로 내보내기 | Coordinate lookup and export to Excel |
| IDC_SK_Main_10_Sub_5 | 계산기 열기 | Open Calculator |
| IDC_SK_Main_10_Sub_6 | 조회값(좌표, 거리, 면적) 쓰기 | Write query values ??(coordinates, distance, area) |
| IDC_SK_Main_10_Sub_7 | 사칙연산 하기 | Perform four basic operations |
| IDC_SK_Main_10_Sub_8 | 객체의 특성 조회 | Query object properties |
| IDC_SK_Main_10_Sub_9 | 측정정보 표시 단위 | Measurement information display unit |
| IDC_SK_Main_11_Sub_1 | EL 구하기 | Find EL |
| IDC_SK_Main_11_Sub_2 | 비탈면 그리기 및 경사표기 하기 | Drawing slopes and marking slopes |
| IDC_SK_Main_11_Sub_3 | 종단선형 작성 및 계획고 찾기 | Create vertical alignment and find plan height |
| IDC_SK_Main_11_Sub_4 | 시설물 및 차선 그리기 | Drawing facilities and lanes |
| IDC_SK_Main_11_Sub_5 | 횡단면도 작성하기 | Creating a cross section |
| IDC_SK_Main_11_Sub_6 | 현황 수정 및 표고점 생성하기 | Edit status and create elevation points |
| IDC_SK_Main_11_Sub_7 | 평면선형 측정 및 거리 표시하기 | Horizontal Linear Measurements and Distance Display |
| IDC_SK_Main_11_Sub_8 | 선형 그리기 | Linear drawing |
| IDC_SK_Main_11_Sub_9 | 측구 설치 | Ditch installation |
| IDC_SK_Main_12_Sub_1 | 철근 마킹블록 넣기 | Inserting rebar marking blocks |
| IDC_SK_Main_12_Sub_2 | 철근 배근도 그리기 | Drawing a rebar arrangement diagram |
| IDC_SK_Main_12_Sub_3 | 철근 길이 조회 및 마킹블록 수정 | Check rebar length and modify marking block |
| IDC_SK_Main_12_Sub_4 | 건설CALS 표준레이어 불러오기 | Load construction CALS standard layer |
| IDC_SK_Main_12_Sub_5 | 재료표 만들기 | Create a bill of materials |
| IDC_SK_Main_12_Sub_6 | 철근상세도 만들기 | Create Rebar Details |
| IDC_SK_Main_13_Sub_1 | 그리드 | Grid |
| IDC_SK_Main_13_Sub_10 | 객체 스냅 | Object Snap |
| IDC_SK_Main_13_Sub_11 | 직교 모드 | Orthogonal Mode |
| IDC_SK_Main_13_Sub_12 | 선 가중치 | Line weight |
| IDC_SK_Main_13_Sub_13 | 극좌표 추적 | Angle Snap Tracking |
| IDC_SK_Main_13_Sub_14 | 선택 효과 설정 | Selection Visual Effects |
| IDC_SK_Main_13_Sub_2 | 그리드 스냅 | Grid Snap |
| IDC_SK_Main_13_Sub_3 | 명령어 자동완성 | Command Auto Complete |
| IDC_SK_Main_13_Sub_4 | 그립 표시 설정 | Selected Object Grip |
| IDC_SK_Main_13_Sub_5 | 등각 투영 작업 모드 | Isometric Drawing |
| IDC_SK_Main_13_Sub_6 | 커서 좌표값 표시 | Display cursor coordinate values |
| IDC_SK_Main_13_Sub_7 | 중복객체 리스트 박스 | Selection of Overlapping Objects |
| IDC_SK_Main_13_Sub_8 | 객체스냅 추적 | Object Snap Tracking |
| IDC_SK_Main_13_Sub_9 | 동적 입력 | Dynamic input |
| IDC_SK_Main_14_Sub_1 | 작업화면 색상 | Work space color |
| IDC_SK_Main_14_Sub_10 | 파일 저장 및 보안 | File storage and security |
| IDC_SK_Main_14_Sub_2 | 확대/축소시 도면요소 표시 | Display elements when zooming in/out |
| IDC_SK_Main_14_Sub_3 | 도면 공간 | Paper space |
| IDC_SK_Main_14_Sub_4 | 십자선 커서 | Crosshair cursor |
| IDC_SK_Main_14_Sub_5 | 파일 형식 및 버전 | File format and version |
| IDC_SK_Main_14_Sub_6 | 명령창 | Command line |
| IDC_SK_Main_14_Sub_7 | 도면 닫기 | Close draw |
| IDC_SK_Main_14_Sub_8 | 프록시 객체 | Proxy object |
| IDC_SK_Main_14_Sub_9 | 마우스 기능 설정 | Mouse function settings |
| IDC_SK_Main_15_Sub_1 | 홈 메뉴 | Home Menu |
| IDC_SK_Main_2_Sub_1 | 문자 쓰기 | Write a text |
| IDC_SK_Main_2_Sub_10 | 문자 조회 / 찾아 바꾸기 | text search / find and replace |
| IDC_SK_Main_2_Sub_11 | 문자 기준점 조정/변경 | Adjust/change text reference point |
| IDC_SK_Main_2_Sub_12 | 속성블록의 속성문자 | Attribute text of attribute block |
| IDC_SK_Main_2_Sub_13 | 캐드 ↔ 엑셀 변환 | CAD ↔ Excel conversion |
| IDC_SK_Main_2_Sub_14 | 문자 표시 상태 | Text display status |
| IDC_SK_Main_2_Sub_15 | 문자 속성 변경 | Change text properties |
| IDC_SK_Main_2_Sub_17 | 문자 스타일 작성/변경 | Create/Edit Text Style |
| IDC_SK_Main_2_Sub_2 | 문자 내용 수정 | Edit Text Contents |
| IDC_SK_Main_2_Sub_3 | 문자 복사/붙여넣기 | Copy/Paste text |
| IDC_SK_Main_2_Sub_4 | 문자 내용 추가 | Add text content |
| IDC_SK_Main_2_Sub_5 | 필드값 | Field value |
| IDC_SK_Main_2_Sub_6 | 여러 기준으로 정렬하기 | Sort by multiple criteria |
| IDC_SK_Main_2_Sub_7 | 문자 내용 변경 | Change text content |
| IDC_SK_Main_2_Sub_8 | 문자 꾸미기 | text decoration |
| IDC_SK_Main_2_Sub_9 | 문자 테이블 작성 | Create a Text Table |
| IDC_SK_Main_3_Sub_1 | 객체특성을 조회하거나 변경하기 | View or change object properties |
| IDC_SK_Main_3_Sub_10 | 이동 / 복사 / 자르기 | Move / Copy / Cut |
| IDC_SK_Main_3_Sub_11 | 선택 객체를 숨기거나 보이게 하기 | Hide or show selected objects |
| IDC_SK_Main_3_Sub_12 | 정렬 | Align |
| IDC_SK_Main_3_Sub_13 | 객체 및 중복객체 삭제하기 | Deleting objects and duplicate objects |
| IDC_SK_Main_3_Sub_2 | 여러 방법으로 회전하기 | Rotate in multiple ways |
| IDC_SK_Main_3_Sub_3 | 복사하여 붙여넣기 | Copy and paste |
| IDC_SK_Main_3_Sub_4 | 개수나 간격 입력하여 분할 또는 분해 | Split or decompose by entering the number or interval |
| IDC_SK_Main_3_Sub_5 | 대칭으로 이동 또는 복사 | Move or copy symmetrically |
| IDC_SK_Main_3_Sub_6 | 고도값(Z값) 변경 | Altitude value (Z value) change |
| IDC_SK_Main_3_Sub_7 | 하이퍼링크 걸기 | Hyperlinking |
| IDC_SK_Main_3_Sub_8 | 해치 편집 및 경계 재작성 | Hatch editing and boundary rebuilding |
| IDC_SK_Main_3_Sub_9 | 직전작업 등 이전 명령 취소 | Cancel previous commands such as the previous task |
| IDC_SK_Main_4_Sub_1 | 폴리선 변환 및 편집 | Convert and edit polylines |
| IDC_SK_Main_4_Sub_10 | 여러가지 방법으로 선끊기 | Cutting lines in various ways |
| IDC_SK_Main_4_Sub_11 | 스케일 조정하기 | Adjust scale |
| IDC_SK_Main_4_Sub_12 | 객체 배열 조정하기 | Adjusting the Array of Objects |
| IDC_SK_Main_4_Sub_2 | 모서리 모양 변경하기 | Change the shape of corners |
| IDC_SK_Main_4_Sub_3 | 폴리선 정점 수정 | Modify polyline vertices |
| IDC_SK_Main_4_Sub_4 | 여러가지 방법으로 간격 띄우기 | Spacing in various ways |
| IDC_SK_Main_4_Sub_5 | 스플라인 수정 | Spline Modification |
| IDC_SK_Main_4_Sub_6 | 여러선 연결하기 | Connecting multiple lines |
| IDC_SK_Main_4_Sub_7 | 여러가지 형태로 객체 배열하기 | Arranging objects in various shapes |
| IDC_SK_Main_4_Sub_8 | 경계선에서 잘라내기 | Cut at border |
| IDC_SK_Main_4_Sub_9 | 객체를 늘이거나 연장하기 | Stretch or extend an object |
| IDC_SK_Main_5_Sub_1 | 치수 스타일 작성하기 | Creating a Dimension Style |
| IDC_SK_Main_5_Sub_10 | 치수보조선 조정하기 | Adjust Dim Lines |
| IDC_SK_Main_5_Sub_11 | 치수 합치거나 분할하기 | Combine or split dimensions |
| IDC_SK_Main_5_Sub_12 | 지시선 작성 및 수정하기 | Creating and modifying leaders |
| IDC_SK_Main_5_Sub_2 | 반지름,지름 치수 넣기 | Single Dimension |
| IDC_SK_Main_5_Sub_3 | 치수 연속으로 넣기 | Insert dimensions in succession |
| IDC_SK_Main_5_Sub_4 | 수평, 수직, 호, 각도 치수 넣기 | Insert horizontal, vertical, arc, and angle dimensions |
| IDC_SK_Main_5_Sub_5 | 치수 표식 넣기 | Adding dimension marks |
| IDC_SK_Main_5_Sub_6 | 치수선 변경하기 | Change dimension lines |
| IDC_SK_Main_5_Sub_7 | 치수 문자 위치 이동하기 | Move dimension text position |
| IDC_SK_Main_5_Sub_8 | 치수문자 추가하거나 변경하기 | Add or change dimension text |
| IDC_SK_Main_5_Sub_9 | 크기 변화에 따라 치수 연동하기 | Interlocking dimensions according to size changes |
| IDC_SK_Main_6_Sub_1 | 블록 삽입시 기준 단위 지정 | Specify standard unit when inserting block |
| IDC_SK_Main_6_Sub_10 | 여러가지 방법으로 블록 불러오기 | Loading blocks in various ways |
| IDC_SK_Main_6_Sub_11 | 블록 프레임 | Block frame |
| IDC_SK_Main_6_Sub_12 | 블록을 원하는 모양으로 자르기 | Cut blocks into desired shapes |
| IDC_SK_Main_6_Sub_13 | 글자가 변경되는 속성 블록 | Attribute block where letters change |
| IDC_SK_Main_6_Sub_2 | 블록 내 객체 복사 | Copy objects within a block |
| IDC_SK_Main_6_Sub_3 | 다른 파일을 블록으로 연결(외부참조) | Link other files as blocks (external references) |
| IDC_SK_Main_6_Sub_4 | OLE 객체 삽입/수정 | Inserting/modifying OLE objects |
| IDC_SK_Main_6_Sub_5 | 외부 블록 수정 | External block modification |
| IDC_SK_Main_6_Sub_6 | 블록 만들기 | Building blocks |
| IDC_SK_Main_6_Sub_7 | 여러 객체 그룹으로 만들기 | Create with multiple object groups |
| IDC_SK_Main_6_Sub_8 | 내부 블록 수정 | Internal block modification |
| IDC_SK_Main_6_Sub_9 | 이미지 조정 | Image Adjustment |
| IDC_SK_Main_7_Sub_1 | 솔리드 만들기 | Create a Solid |
| IDC_SK_Main_7_Sub_2 | 메쉬 만들기 | Create Mesh |
| IDC_SK_Main_7_Sub_3 | 3D 표면 작성 | Create 3D surfaces |
| IDC_SK_Main_7_Sub_4 | 선을 이용하여 메쉬 만들기 | Creating a mesh using lines |
| IDC_SK_Main_7_Sub_5 | 단면을 이용한 3D솔리드 및 표면 작성 | Create 3D solids and surfaces using cross sections |
| IDC_SK_Main_7_Sub_6 | 표면 수정 | Surface modification |
| IDC_SK_Main_7_Sub_7 | 복합객체(객체연산) 생성 | Creating complex objects (object operations) |
| IDC_SK_Main_7_Sub_8 | 원본 모형 업데이트 설정 | Original model update settings |
| IDC_SK_Main_8_Sub_1 | 레이어 변경 | Change layer |
| IDC_SK_Main_8_Sub_10 | 레이어 변경하여 복사 | Copy by changing layer |
| IDC_SK_Main_8_Sub_11 | 선택 레이어만 분리하여 켜기 및 복원 | Isolate only selected layers to turn them on and restore them |
| IDC_SK_Main_8_Sub_2 | 선택 레이어 인쇄 켜기, 끄기 | Turn selected layer printing on or off |
| IDC_SK_Main_8_Sub_3 | 레이어 삭제 | Delete Layer |
| IDC_SK_Main_8_Sub_4 | 레이어 잠그기 | Lock a layer |
| IDC_SK_Main_8_Sub_5 | 다른 레이어로 병합하기 | Merge to another layer |
| IDC_SK_Main_8_Sub_6 | 레이어 관리 | Layer Management |
| IDC_SK_Main_8_Sub_7 | 레이어 특성 변경 | Change layer properties |
| IDC_SK_Main_8_Sub_8 | 레이어 켜기, 끄기 | Turn layers on and off |
| IDC_SK_Main_8_Sub_9 | 레이어 동결하기 | Freeze a layer |
| IDC_SK_Main_9_Sub_1 | 화면 확대, 초점 이동 | Zoom in on screen, move focus |
| IDC_SK_Main_9_Sub_10 | 작업공간 조정하기 | Adjust your workspace |
| IDC_SK_Main_9_Sub_11 | 도면공간에서 뷰포트 창 만들기 | Create a viewport window in paper space |
| IDC_SK_Main_9_Sub_12 | 3D객체 비주얼 스타일 변경하기 | Changing 3D object visual style |
| IDC_SK_Main_9_Sub_13 | 뷰 방향 조정하기 | Adjust view direction |
| IDC_SK_Main_9_Sub_14 | 도면공간 생성 및 페이지 설정 | Paper space creation and page settings |
| IDC_SK_Main_9_Sub_15 | UCS 아이콘 | UCS Icon |
| IDC_SK_Main_9_Sub_2 | 모형공간, 도면공간 이동 | Move between model space and paper space |
| IDC_SK_Main_9_Sub_3 | 뷰포트 구성하기 | Configuring the viewport |
| IDC_SK_Main_9_Sub_4 | UCS 좌표계 | UCS coordinate system |
| IDC_SK_Main_9_Sub_5 | 두 점으로 수평, 수직뷰 만들기 | Create horizontal and vertical views with two points |
| IDC_SK_Main_9_Sub_7 | 뷰포트 크기 조정하기 | Resize the viewport |
| IDC_SK_Main_9_Sub_8 | UCS 평면뷰 변경하기 | Changing UCS Plan View |
| IDC_SK_Main_9_Sub_9 | 3D 뷰 회전하기 | Rotate the 3D view |
| MARKUPWINDOW_LABEL_DELETEMYRECORD | 내 기록 삭제하기 | Delete my record |
| MARKUPWINDOW_LABEL_MODIFYTITLE | 제목 및 내용 수정하기 | Modify title and description |
| MARKUPWINDOW_LABEL_RESTORE | 이 버전 복원하기 | Restore |
| MARKUPWINDOW_LABEL_SAVECURRENTVER | 현재 버전 추가하기 | Save current version |
| MSG_ERR_FixedDocument | 오류가 발생할 가능성이 있는 도면입니다. 원활한 작업을 위해 도면을 저장한 후 다시 열어 주세요. | The drawing may contain errors. For a smoother workflow, please save the drawing and reopen it. |
| MSG_RESTART_PROGRAM | 프로그램을 재시작해 주세요. 재시작하지 않으면 제대로 작동하지 않습니다. | Please restart EG-BIM. Otherwise, it will not work properly. |
| STR_Style | 스타일 | Style |
| STR_Varies | 다양함 | Varies |


## 5. Nyng.ThirdParty — CAD 명령어 / 구조·배근 관련 용어

| Key | Korean | English |
|---|---|---|
| ID_3RDPT_COM_Area | 면적 | Area |
| ID_3RDPT_COM_Auto | 자동(A) | Auto(A) |
| ID_3RDPT_COM_BarDist | 철근간격을 입력하세요. | Enter the rebar distance. |
| ID_3RDPT_COM_BarMark | 철근마크블록을 선택하세요. | Select a reinforcement mark block. |
| ID_3RDPT_COM_BaseEL | 기준 E.L | Base E.L |
| ID_3RDPT_COM_BasePoint | 기준점 | Select base point |
| ID_3RDPT_COM_BasepointEL | 기준점 E.L값 선택 | Select base point E.L value |
| ID_3RDPT_COM_BlockDetail | 철근상세도의 블록을 선택하세요. | Select a block in reinforcement detail. |
| ID_3RDPT_COM_Cancel | 취소 | Cancel |
| ID_3RDPT_COM_CannotCompute | 수식을 계산할 수 없습니다. | Cannot compute formula. |
| ID_3RDPT_COM_CannotPopup | 팝업창을 띄울 수 없습니다. | Can not view popup window. |
| ID_3RDPT_COM_CellInput | 셀 입력 | Enter Cell |
| ID_3RDPT_COM_ChangeScale | 축척변경(C) | ChangeScale(C) |
| ID_3RDPT_COM_Civil | 토목 | Civil |
| ID_3RDPT_COM_ColorLane | 선(또는 폴리선)에서 유도선의 시작방향을 선택하세요. | Select the starting direction from the line (or polyline). |
| ID_3RDPT_COM_Continue | 계속 실행하시겠습니까? | Do you want to continue running? |
| ID_3RDPT_COM_CopyAnotherLayer | 다른 레이어로 변경하여 복사할 객체 선택 | Select object to be changed to and copied to another layer |
| ID_3RDPT_COM_CountOpt | 개수(C) | Count(C) |
| ID_3RDPT_COM_CreateMark | 철근을 선택하여 마크 블록을 생성한다. | Select a reinforcing bar to create mark block. |
| ID_3RDPT_COM_CurrentOption | 현재옵션 | Current Options |
| ID_3RDPT_COM_CurrentSetting | 현재 설정 | Current Settings |
| ID_3RDPT_COM_CurvedObject | 커브 객체를 선택하세요 | Select curved object |
| ID_3RDPT_COM_DecimalPlace | 소수점자리 | Decimal place |
| ID_3RDPT_COM_DecimalPoint | 소수점(D) | DecimalPoint(D) |
| ID_3RDPT_COM_DeformDetail | 이 형 철 근 상 세 | Deformed Bar Detail |
| ID_3RDPT_COM_Diameter | 지름 | Diameter |
| ID_3RDPT_COM_DimPoint | 치수를 입력할 점을 선택하세요. | Select a point to enter dimension. |
| ID_3RDPT_COM_Distance | 거리 | Distance |
| ID_3RDPT_COM_DistOpt | 간격(D) | Distance(D) |
| ID_3RDPT_COM_DupRebarNum | 중복된 철근번호가 있습니다. | Duplicate rebar number found. |
| ID_3RDPT_COM_EL | EL 값 | EL Value |
| ID_3RDPT_COM_ELCalPoint | EL 계산 기준점 선택 | Select EL Calculation Base Point |
| ID_3RDPT_COM_EndPoint | 끝 점 지정 | Select end point |
| ID_3RDPT_COM_EnterDecimalPlace | 소수점 자리 입력 | Enter decimal place |
| ID_3RDPT_COM_EnterEL | E.L값입력(E) | EnterE.L(E) |
| ID_3RDPT_COM_EnterLength | 길이 입력 | Enter Length |
| ID_3RDPT_COM_EnterScale | 스케일 입력 | Enter scale |
| ID_3RDPT_COM_EnterText | 문자입력 | Enter text |
| ID_3RDPT_COM_EnterTextHeight | 문자높이 입력 | Enter text height |
| ID_3RDPT_COM_EnterValueKo | 값을 입력하세요. | Enter a value for  |
| ID_3RDPT_COM_Exit | 닫기(X) | Close(X) |
| ID_3RDPT_COM_FirstPoint | 첫 번째 점 지정 | Select first point |
| ID_3RDPT_COM_Footer | 꼬리말 | Footer |
| ID_3RDPT_COM_Formula | 계산식 입력 | Enter formula |
| ID_3RDPT_COM_Ground | 지반선 선택 | Select Ground Line |
| ID_3RDPT_COM_Header | 머리말 | Header |
| ID_3RDPT_COM_Height | 높이 | Height |
| ID_3RDPT_COM_InOut | 내_외(I) | Inside_Outside(I) |
| ID_3RDPT_COM_Insert | 삽입할 점 지정 | Select a point to insert |
| ID_3RDPT_COM_LapJoint | (겹이음 할증률 적용 | (Lap Joint Extra Charge Applied) |
| ID_3RDPT_COM_LondDrawingScale | 긴 도면일 때 | When it's a long drawing |
| ID_3RDPT_COM_MakeLayer | 선택한 객체들로 새 레이어를 생성한다. | Create a new layer with selected objects. |
| ID_3RDPT_COM_MergeDim | 전체치수생성(O) | MergeDimensions(O) |
| ID_3RDPT_COM_MoveAnotherLayer | 다른 레이어로 변경하여 이동할 객체 선택 | Select an object to move to another layer |
| ID_3RDPT_COM_MoveLayer | 선택한 객체를 다른 레이어로 변경하여 객체를 이동한다. | Move the selected object to another layer. |
| ID_3RDPT_COM_MultiDim | 여러 치수를 한번에 입력한다. | Enter multiple dimensions at once. |
| ID_3RDPT_COM_No | 아니오 | No |
| ID_3RDPT_COM_NoBarMark | 철근마크블록이 선택되지 않았습니다. | No reinforcement mark blocks are selected. |
| ID_3RDPT_COM_NoBlock | 선택된 블록이 없습니다. | No blocks selected. |
| ID_3RDPT_COM_NoContent | 선택된 내용이 없습니다. | No content selected. |
| ID_3RDPT_COM_NoObject | 선택된 객체가 없습니다. | No objects selected. |
| ID_3RDPT_COM_NoOpt | 아니오(N) | No(N) |
| ID_3RDPT_COM_NotMergeDim | 전체치수생성안함(O) | DoNotMergeDimensions(O) |
| ID_3RDPT_COM_NotRead | 철근상세도 정보가 제대로 읽히지 않았습니다. | Reinforcement detail information was not read correctly. |
| ID_3RDPT_COM_Plan | 사면 계획선 선택 | Select Slope Plan Line |
| ID_3RDPT_COM_PlotScale | 출력 축척 | Plot Scale |
| ID_3RDPT_COM_ProfileLine | 종단 계획선 선택 | Select Profile Plan Line |
| ID_3RDPT_COM_Radius | 반지름 | Radius |
| ID_3RDPT_COM_RangeDetail | 철근상세도의 범위를 선택하세요. (원 또는 블록 선택) | Select a range of reinforcement detail. (Select circle or block) |
| ID_3RDPT_COM_ReplicateLayer | 선택한 객체의 다른 레이어로 변경하여 객체를 복제한다. | Replicate object by changing to another layer of the selected object. |
| ID_3RDPT_COM_Reverse | 방향을 반대로 하시겠습니까? | Would you like to reverse the direction? |
| ID_3RDPT_COM_SamePoint | 동일한 지점은 선택할 수 없습니다. | The same point cannot be selected. |
| ID_3RDPT_COM_Scale | 스케일 | Scale |
| ID_3RDPT_COM_Scale2 | 축척 | Scale |
| ID_3RDPT_COM_ScaleOpt | 스케일(S) | Scale(S) |
| ID_3RDPT_COM_SecondPoint | 두 번째 점 지정 | Select second point |
| ID_3RDPT_COM_SelectBasePoint | 기준점 선택 | Select Base point |
| ID_3RDPT_COM_SelectCurve | 선, 폴리선, 2d 폴리선, 3d 폴리선을 선택하세요. | Select a line, polyline, 2d polyline or 3d polyline. |
| ID_3RDPT_COM_SelectCurve2 | 선, 폴리선, 2d 폴리선을 선택하세요. | Select a line, polyline or 2d polyline. |
| ID_3RDPT_COM_SelectObjectToGetLayer | 레이어를 가져올 객체 선택 | Select a object to get layer. |
| ID_3RDPT_COM_SelectTwo | 2개 이상의 객체를 선택해 주십시오. | Select at least two objects. |
| ID_3RDPT_COM_Setting | 설정(S) | Settings(S) |
| ID_3RDPT_COM_SpecifyDistance | 거리를 지정할 객체 선택 | Select object to specify distance |
| ID_3RDPT_COM_StartBarTable | 철근재료표를 생성할 시작점을 선택하시오. | Select the start point to create a rebar material table. |
| ID_3RDPT_COM_StartOpt | 시작위치(P) | StartPoint(P) |
| ID_3RDPT_COM_StartPoint | 시작 점 지정 | Select start point |
| ID_3RDPT_COM_Subtotal | 소  계 | Subtotal |
| ID_3RDPT_COM_Terminate | 오류가 발생해 명령이 종료되었습니다. | The command was terminated due to an error. |
| ID_3RDPT_COM_TextHeight | 문자높이 | Text height |
| ID_3RDPT_COM_TextHeightOpt | 문자높이(H) | TextHeight(H) |
| ID_3RDPT_COM_TextModify | 수정할 문자 선택 | Select texts to modify |
| ID_3RDPT_COM_TextObj | 문자 객체를 선택해 주세요. | Select a text object. |
| ID_3RDPT_COM_Than0 | 0보다 큰 값을 입력하세요. | Enter a value greater than 0. |
| ID_3RDPT_COM_TidyLine | 보조선을 정리할 지점을 클릭 | Select point to tidy up extension lines |
| ID_3RDPT_COM_Total | 총  계 | Total |
| ID_3RDPT_COM_VerticalLine | 수직선 | VerticalLine |
| ID_3RDPT_COM_Yes | 예 | Yes |
| ID_3RDPT_COM_YesOpt | 예(Y) | Yes(Y) |
| ID_3RDPT_LIB_0 | {0} 입니다 | {0} |
| ID_3RDPT_LIB_Change | Current UCS를 WCS로 변경해 주시기 바랍니다. | Please change the Current UCS to WCS. |
| ID_3RDPT_LIB_ClickSecond | 두 번째 점을 클릭해주세요. | Click the second point. |
| ID_3RDPT_LIB_Contact | 객체가 존재하지 않습니다. 관리자에게 문의해주시기바랍니다. | Object does not exist. Please contact the administrator. |
| ID_3RDPT_LIB_Demand | 수치값을 요구함 | Demand a numerical value |
| ID_3RDPT_LIB_ElText | EL 문자 선택 또는 |  select EL Text or Enter EL |
| ID_3RDPT_LIB_ElValue | EL 값 입력(E) | Enter EL value(E)  |
| ID_3RDPT_LIB_EnterValue | 값을 입력하세요. 현재 | Enter a value. Current |
| ID_3RDPT_LIB_Error | 오류 | Error |
| ID_3RDPT_LIB_FirstPoint | 첫번째 점을 지정 | Specify the first point |
| ID_3RDPT_LIB_Linear | 선, 폴리선, 호를 선택해 주십시오. | Select line, polyline, arc |
| ID_3RDPT_LIB_Linear2D | 선, 폴리선, 2D폴리선, 호를 선택해 주십시오. | Select line, 2D polyline, arc |
| ID_3RDPT_LIB_LinearObject | 선, 폴리선, 호, 타원, 스플라인 등 선형 객체를 선택해 주십시오. | Select linear object |
| ID_3RDPT_LIB_NewLength | 새 길이를 지정 | Specify new length |
| ID_3RDPT_LIB_NewPointP | 새로운 점(P) | New Point (P) |
| ID_3RDPT_LIB_NoBlock | 블록이 존재하지 않습니다. | Block does not exist. |
| ID_3RDPT_LIB_NoContent | 선택된 내용이 없습니다. | No content selected. |
| ID_3RDPT_LIB_NoNumber | 선택한 텍스트에 숫자가 없습니다. | There are no numbers in the selected text. |
| ID_3RDPT_LIB_NotExist | 이 존재하지 않습니다. |  does not exist. |
| ID_3RDPT_LIB_NotValid | 입력 값이 유효하지 않습니다. | Input value is not valid. |
| ID_3RDPT_LIB_One | 하나 이상의 도면 객체가 선택되었습니다. | One or more drawing objects selected. |
| ID_3RDPT_LIB_Operate | SELECTIONCYCLING 이 켜져있으면 정상작동하지 않을 수 있습니다. | If SELECTIONCYCLING is ON, it may not operate normally. |
| ID_3RDPT_LIB_Option | 옵션(O) | Option(O) |
| ID_3RDPT_LIB_Or | 또는 | Or |
| ID_3RDPT_LIB_Pick | 선택 | Select |
| ID_3RDPT_LIB_PointMove | 이동할 점 지정 | Select point to move |
| ID_3RDPT_LIB_RefEL | 기준 EL값 입력 | Enter base EL value |
| ID_3RDPT_LIB_RefLength | 참조 길이 시작점을 지정 | Select reference length start point |
| ID_3RDPT_LIB_Selectable | □□ 선택 할 수 있는 객체 타입 | □□ Selectable object type |
| ID_3RDPT_LIB_SelectImportFont | 문자 글꼴을 가져올 문자 선택 | Select texts to import text fonts |
| ID_3RDPT_LIB_SelectObject | 객체를 선택해 주세요. | Please select an object. |
| ID_3RDPT_LIB_SelectText | 문자 객체를 선택해 주십시오. | Select text object. |
| ID_3RDPT_LIB_UcsStandard | 현재 도면은 UCS가 표준(World) 상태가 아닙니다. | UCS is not standard (World) for the current drawing. |
| ID_3RDPT_LIB_Warning | 경고 | Warning |
| ID_BLOCK_AS_Select | 속성 블록 선택 | Select a attribute block |
| ID_BLOCK_ATTBEX_DecomposeAttributeBlock | 개의 속성블록을 분해했습니다 | Decomposed Attribute block |
| ID_BLOCK_ATTBEX_SelectBlockDecompose | 분해할 블록 객체 선택 | Select Block to decompose |
| ID_BLOCK_BINSERTIONPOINT_BasePointChanged | 기준점 변경 완료 | Base point changed |
| ID_BLOCK_BINSERTIONPOINT_BasePointSame | 기존 기준점과 변경 기준점이 같습니다. | Same base point as the existing base point. |
| ID_BLOCK_BINSERTIONPOINT_SelectBlock | 블록 객체를 선택해 주십시오. | Select a block. |
| ID_BLOCK_BINSERTIONPOINT_SelectBlockBasePoint | 기준점을 변경할 블록 선택 | Select a block to change the base point |
| ID_BLOCK_BINSERTIONPOINT_SelectBlockNewPoint | 선택한 블록의 새 기준점 지정 | Select a new base point for the block |
| ID_BLOCK_BL_ERR_CANNOTFIND | 블럭 '{0}'의 정의파일 '{1}'을 찾을 수 없음 | Definition file '{1}' for block '{0}' not found |
| ID_BLOCK_BL_ERR_CANNOTFINDFILE | 오류: 폴더 '{0}' 및 서브폴더에서 에서 JSON 파일을 찾을 수 없습니다 | Could not find JSON files in folder '{0}' and its subfolders |
| ID_BLOCK_BL_ERR_CANNOTGENERATE | 블럭 '{0}'의 정의파일 '{1}'에서 썸네일을 생성할 수 없음 | Could not generate thumbnail from definition file '{1}' for block '{0}' |
| ID_BLOCK_BL_ERR_JSONREAD | JSON파일을 읽어들이던 중 오류가 발생했습니다: | An error occurred while reading the JSON file |
| ID_BLOCK_BL_ERR_SUPPORTCOLOR | 현재는 16, 24, 32비트 컬러 형식만 지원함 | Currently, only 16, 24, and 32-bit color formats are supported |
| ID_BLOCK_BNC_InputNewBlockName | 새로운 블록 이름 입력 | Enter a new block name. |
| ID_BLOCK_BNC_InputOtherBlockName | 동일한 이름의 블록이 존재합니다. 다른 이름을 입력하세요. | There is a same name block. Enter a different name. |
| ID_BLOCK_BNC_SelectBlock | 이름을 변경할 블록 선택 | Select the block to change name. |
| ID_BLOCK_Button_FNTN_01 | 도곽/특정 블록 등록 | Register DWG/Block |
| ID_BLOCK_Button_FNTN_02 | 도면 추가 | Add dwg |
| ID_BLOCK_Button_FNTN_03 | 폴더 추가 | Add Folder |
| ID_BLOCK_Button_FNTN_04 | 활성 도면 | Open dwg |
| ID_BLOCK_Button_FNTN_05 | 선택 열기 | Open sel. |
| ID_BLOCK_Button_FNTN_06 | 선택 삭제 | Delete sel. |
| ID_BLOCK_Button_FNTN_07 | 전체 삭제 | Delete all |
| ID_BLOCK_Button_FNTN_08 | 도면 제목 가져오기 | Import DWG Title |
| ID_BLOCK_Button_FNTN_09 | 파일 이름 변경 | Change File Name |
| ID_BLOCK_Button_FNTN_10 | 도곽/특정 블록 선택 | Select DWG/Block |
| ID_BLOCK_Button_FNTN_11 | 도곽/블록 수정 | Modify DWG/Block |
| ID_BLOCK_Button_FNTN_12 | 등록 종료 | Finish Register |
| ID_BLOCK_Button_FNTN_13 | 특정 위치 문자를 등록 | Register Text Location |
| ID_BLOCK_Button_FNTN_14 | 도곽 속성 값을 등록 | Register Title Block Attribute |
| ID_BLOCK_Button_FNTN_15 | 속성 블록 값을 등록 | Register Block Attribute |
| ID_BLOCK_Button_FNTN_16 | 수정 완료 | Complete edit |
| ID_BLOCK_Button_FNTN_17 | 수정 취소 | Cancel edit |
| ID_BLOCK_Button_FNTN_18 | 파일 이름 테스트 | File name text |
| ID_BLOCK_Button_FNTN_19 | 초기화 | Reset |
| ID_BLOCK_Button_FNTN_20 | 태그 추가 | Add tag |
| ID_BLOCK_Button_FNTN_21 | 태그 적용 | Apply tag |
| ID_BLOCK_Button_FNTN_22 | 적용 취소 | Cancel apply |
| ID_BLOCK_Button_MID_01 | 도면 불러오기 | Add DWG |
| ID_BLOCK_CheckBox_COPYNESTED_01 | 연속 복사 | Continuous copy |
| ID_BLOCK_CheckBox_COPYNESTED_02 | 복사 후 이동 | Move after copy |
| ID_BLOCK_CheckBox_IBP_01 | 선 | Line |
| ID_BLOCK_CheckBox_IBP_02 | 폴리선 | PolyLine |
| ID_BLOCK_CheckBox_IBP_03 | 호 | Arc |
| ID_BLOCK_CheckBox_IBP_04 | 원 | Circle |
| ID_BLOCK_CheckBox_IBP_05 | 타원 | Ellipse |
| ID_BLOCK_CheckBox_IBP_06 | 스플라인 | Spline |
| ID_BLOCK_CheckBox_IBP_07 | 문자 | Text |
| ID_BLOCK_CheckBox_IBP_08 | 점 | Point |
| ID_BLOCK_CheckBox_IBP_09 | 블록 | Block |
| ID_BLOCK_CheckBox_IBP_10 | 정점(폴리선) | Vertex (polyline) |
| ID_BLOCK_CheckBox_IBP_11 | 중간점(선, 폴리선, 호, 스플라인) | Midpoint (line, polyline, arc, spline) |
| ID_BLOCK_CheckBox_IBP_12 | 중심점(호, 원, 타원 중심) | Center (arc, circle, ellipse center) |
| ID_BLOCK_CheckBox_IBP_13 | 끝점(선, 폴리선, 호, 스플라인) | Endpoint (line, polyline, arc, spline) |
| ID_BLOCK_CheckBox_IBP_14 | 삽입점(문자, 점, 블록 삽입점) | Insertion point (text, point, block) |
| ID_BLOCK_CheckBox_IBP_15 | 교차점(Curve 객체끼리 교차한 지점) | Point where curve objects intersect |
| ID_BLOCK_CheckBox_IBP_16 | 삽입 후 폭파 | Explode after insertion |
| ID_BLOCK_CHXREFXOLOR_ColorInput | 색상 입력 (0~256) | Enter Color (0?256) |
| ID_BLOCK_CHXREFXOLOR_IntegerInput | 0과 256사이의 정수를 입력해 주세요. | Please enter an integer between 0 and 256. |
| ID_BLOCK_CHXREFXOLOR_NotExternalReference | 외부참조가 아닙니다. | This is not an external reference. |
| ID_BLOCK_CHXREFXOLOR_SelectExternalReference | 레이어 색상을 변경할 외부참조 선택 | Select to change layer color to the external reference. |
| ID_BLOCK_CHXREFXOLOR_SelectExternalReferenceNotSelected | 선택한 객체는 외부참조가 아닙니다. 외부참조를 선택해 주십시오. | The selected object is not an external reference. Please select an external reference. |
| ID_BLOCK_CN_Base | 이동할 기준점 지정 | Select the base point to move to |
| ID_BLOCK_CN_Point | 이동할 점 지정 | Select a point to move to |
| ID_BLOCK_CN_Select1 | 블록 또는 외부참조 내부 객체 선택 | Select a block or internal object of external reference |
| ID_BLOCK_CN_Select2 | 블록 또는 외부참조의 내부객체를 선택해주세요. | Select a block or internal object of external reference. |
| ID_BLOCK_DETACHURL_NotSelected | 객체가 선택되지 않았습니다. | Object not selected. |
| ID_BLOCK_DETACHURL_RemovedHyperlink | 선택한 객체의 하이퍼링크를 제거했습니다. | Removed the selected object hyperlink. |
| ID_BLOCK_DETACHURL_SelectBreakHyperlink | 하이퍼링크를 끊을 객체 선택 | Select an object to break the hyperlink |
| ID_BLOCK_FILEINSERT_AfterDisassemblyInsert | 분해 후, 삽입 | After disassembly, insert |
| ID_BLOCK_FILEINSERT_ChangeSettings | 설정을 변경하시겠습니까? (현재 설정 | Do you want to change the settings? (Current settings |
| ID_BLOCK_FILEINSERT_InsertIntoBlock | 블록으로 삽입 | Insert into Block |
| ID_BLOCK_FILEINSERT_InsertionAngle | 삽입 각도 지정 | Select insertion angle |
| ID_BLOCK_FILEINSERT_InsertionPoint | 삽입점 지정 | Select the insertion point |
| ID_BLOCK_FILEINSERT_InsertionScale | 삽입 스케일 지정 | Select insertion scale |
| ID_BLOCK_FILEINSERT_SelectExternalFile | 외부 파일 선택하기 | Select an external file |
| ID_BLOCK_FILEINSERT_SelectExternalFileFilter | GRM 파일(*.grm)|*.grm|DWG 파일 (*.dwg)|*.dwg|DXF 파일(*.dxf)|*.dwf | GRM file (*.grm)|*.grm|DWG file (*.dwg)|*.dwg|DXF file (*.dxf)|*.dwf |
| ID_BLOCK_FILENAMEFROMTITLENAME_Add | 도면 제목으로 파일 이름 수정 도면 추가 | Modify file name to drawing title Add drawing |
| ID_BLOCK_FILENAMEFROMTITLENAME_ChangeComplete | 변경 완료 | Change complete |
| ID_BLOCK_FILENAMEFROMTITLENAME_ChangeFailed | 변경 실패 | Change failed |
| ID_BLOCK_FILENAMEFROMTITLENAME_DrawingList | 도면 목록에 도면을 추가해 주십시오 | Please add a drawing to the drawing list |
| ID_BLOCK_FILENAMEFROMTITLENAME_DuplicateBlockName | 중복된 블록 이름이 존재합니다. | Duplicate block name exists. |
| ID_BLOCK_FILENAMEFROMTITLENAME_EditFileName | 도면 제목으로 파일 이름 수정 | Modify file name to drawing title |
| ID_BLOCK_FILENAMEFROMTITLENAME_FailedReadFile | 파일 읽기 실패 | Failed to read file |
| ID_BLOCK_FILENAMEFROMTITLENAME_FileNameEmpty | 파일 이름 목록이 비어 있습니다. | The file name list is empty. |
| ID_BLOCK_FILENAMEFROMTITLENAME_FirstPoint | 첫번째 점 지정 | Select the first point |
| ID_BLOCK_FILENAMEFROMTITLENAME_ImportFimeName | 가져온 파일 이름 | Imported File Name |
| ID_BLOCK_FILENAMEFROMTITLENAME_NoDestination | 파일 이름을 변경 할 대상이 없습니다. | There is no destination to rename the file. |
| ID_BLOCK_FILENAMEFROMTITLENAME_NoSelectBlock | Block을 선택 할 수 없습니다. | Block cannot be selected. |
| ID_BLOCK_FILENAMEFROMTITLENAME_NotFoundCurrentBlock | Block을 현재 도면에서 찾을 수 없습니다. | Block could not be found in the current drawing. |
| ID_BLOCK_FILENAMEFROMTITLENAME_RegisteringBlock | 도곽, 특정 블록 등록 | diagram, registering specific blocks |
| ID_BLOCK_FILENAMEFROMTITLENAME_SecondPoint | 두번째 점 지정 | Select the second point |
| ID_BLOCK_FILENAMEFROMTITLENAME_SelectBlock | 도곽 블록 또는 특정 블록 선택 | Select a graphic block or a specific block |
| ID_BLOCK_FILENAMEFROMTITLENAME_SelectBlockOrReference | 블록 또는 외부참조를 선택해 주십시오 | Please select block or external reference |
| ID_BLOCK_FILENAMEFROMTITLENAME_SelectDiagramsOrSpecificBlock | 도곽/특정 블록 선택 | Select Diagrams/Specific Block |
| ID_BLOCK_FILENAMEFROMTITLENAME_SelectItem | 수정 할 항목을 선택해 주십시오. | Please select an item to modify. |
| ID_BLOCK_FILENAMEFROMTITLENAME_SelectOnlyOne | 하나의 도곽/특정 블록만 선택 할 수 있습니다. | Only one diagram/specific block can be selected. |
| ID_BLOCK_FILENAMEFROMTITLENAME_SelectSameBlock | 동일한 도곽/블록을 선택하세요. | Please select the same diagram/block. |
| ID_BLOCK_FNTN_TITLE | FILENAMEFROMTITLENAME | File name from Title name |
| ID_BLOCK_GOTOURL_NotContainHyperlink | 선택한 객체에 하이퍼링크가 없습니다. | Selected object does not contain hyperlinks. |
| ID_BLOCK_GOTOURL_OpenedHyperlink | 선택한 객체의 하이퍼링크를 열었습니다. | Selected object hyperlink opened successfully. |
| ID_BLOCK_GOTOURL_SelectObjectHyperlink | 하이퍼링크를 열 객체 선택 | Select an object to open hyperlinks |
| ID_BLOCK_GROUP_Current | 현재 | Current |
| ID_BLOCK_GROUP_EnterGroupName | 그룹 이름을 입력 | Enter a group name |
| ID_BLOCK_GROUP_GroupCreated | 그룹이 작성되었습니다. | The group has been created. |
| ID_BLOCK_GROUP_GroupNameExist | 이름의 그룹이 존재합니다. | A group of names exists. |
| ID_BLOCK_GROUP_SelectObjectGroup | 그룹으로 묶을 객체 선택 | Select objects to group |
| ID_BLOCK_GroupName_01 | 설정 | Settings |
| ID_BLOCK_GroupName_02 | 옵션 | Options |
| ID_BLOCK_GroupName_03 | 도면 목록 | Drawing List |
| ID_BLOCK_GroupName_04 | 도곽/특정 블록 등록 | Register DWG/Block |
| ID_BLOCK_GroupName_05 | 도면 번호 | DWG Number |
| ID_BLOCK_GroupName_06 | 도면 이름 | DWG Name |
| ID_BLOCK_GroupName_07 | 선택 대상 객체 | Select Target Object |
| ID_BLOCK_GroupName_08 | 삽입 옵션 | Insert Options |
| ID_BLOCK_GroupName_09 | 블록 입력 옵션 | Block Input Options |
| ID_BLOCK_GroupName_10 | 도면간 간격 설정 | Drawing Spacing |
| ID_BLOCK_GroupName_11 | 방향 설정 | Direction |
| ID_BLOCK_GroupName_12 | 행(열) 간격 설정 | Row (Column) Spacing |
| ID_BLOCK_GroupName_13 | 입력 후 처리 | Process After Input |
| ID_BLOCK_GroupName_14 | 불러오기 설정 | Import Settings |
| ID_BLOCK_INSERTBLOCKATPOINT_Insert | 삽입할 블록 객체 선택 | Select a block to insert. |
| ID_BLOCK_INSERTBLOCKATPOINT_Select | 블록을 삽일할 대상 객체 선택 | Select a target object to insert a block. |
| ID_BLOCK_PASTEASHYPERLINK_NoObjectSelected | 객체가 선택되지 않았습니다. | No object has been selected. |
| ID_BLOCK_PASTEASHYPERLINK_PlacedHyperlink | 선택한 객체에 하이퍼링크를 걸었습니다. | Hyperlink successfully placed on the selected object. |
| ID_BLOCK_PASTEASHYPERLINK_SelectObjectHyperlink | 하이퍼링크를 넣을 객체 선택 | Select an object to open hyperlinks |
| ID_BLOCK_POLYIMAGECLIP_SelectClosedLine | 폐합된 선 객체를 선택해주세요. | Please select a closed line object. |
| ID_BLOCK_POLYIMAGECLIP_SelectCutImage | 자를 이미지를 선택하세요 | Select the image you want to |
| ID_BLOCK_POLYIMAGECLIP_SelectImage | 이미지를 선택해주세요. | Please select an image. |
| ID_BLOCK_POLYIMAGECLIP_SelectTargetToImage | 이미지를 자를 대상 선택(폐합된 객체) | Select the destination to crop the image (closed object) |
| ID_BLOCK_RadioButton_COPYNESTED_01 | 일반 문자로 복사 | Copy as normal text |
| ID_BLOCK_RadioButton_COPYNESTED_02 | 속성 문자로 복사 | Copy as attribute text |
| ID_BLOCK_RadioButton_FI_01 | 블록으로 삽입 | Insert as a block |
| ID_BLOCK_RadioButton_FI_02 | 분해 후, 삽입 | Insert after explode |
| ID_BLOCK_RadioButton_FNTN_01 | 활성된 도면(모형,배치) | Model & Layouts |
| ID_BLOCK_RadioButton_FNTN_02 | 모형만 | Model only |
| ID_BLOCK_RadioButton_FNTN_03 | 첫 번째 배치만 | First layout only |
| ID_BLOCK_RadioButton_FNTN_04 | 모든 배치 | All layouts |
| ID_BLOCK_RadioButton_FNTN_05 | 저장하고 닫음 | Save and close |
| ID_BLOCK_RadioButton_FNTN_06 | 저장 안 하고 닫음 | Close without saving |
| ID_BLOCK_RadioButton_IBP_01 | 도면에서 선택 | From drawing |
| ID_BLOCK_RadioButton_IBP_02 | 목록에서 선택 | From list |
| ID_BLOCK_RadioButton_MID_01 | 상대적 간격 | Relative |
| ID_BLOCK_RadioButton_MID_02 | 절대적 간격 | Absolute |
| ID_BLOCK_RadioButton_MID_03 | 수평 | Horizontal |
| ID_BLOCK_RadioButton_MID_04 | 수직 | Vertical |
| ID_BLOCK_RadioButton_MID_05 | 없음 | None |
| ID_BLOCK_RadioButton_MID_06 | 입력 후 분해 | Explode after input |
| ID_BLOCK_RadioButton_MID_07 | 블록 참조 | Block Reference |
| ID_BLOCK_RadioButton_MID_08 | 외부 참조 | External Reference |
| ID_BLOCK_RadioButton_MID_09 | 각 도면의 원점을 그대로 적용 | Use original origin |
| ID_BLOCK_REBLOCK_CurrentName | 현재 블록명 | Current block name is |
| ID_BLOCK_REBLOCK_InputBlockName | 바꿀 블록의 이름을 입력 | Enter the target block name. |
| ID_BLOCK_REBLOCK_NoBlockName | 입력한 이름의 블록이 없습니다. | There is no block with entered name. |
| ID_BLOCK_REBLOCK_SelectBlock | 재설정할 블록 선택 | Select a block to reset. |
| ID_BLOCK_TextBlock_COPYNESTED_01 | 복사 설정 | Copy settings |
| ID_BLOCK_TextBlock_COPYNESTED_02 | 속성 문자 처리 | Attribute text |
| ID_BLOCK_TextBlock_FI_01 | 삽입 방식 | Insert method |
| ID_BLOCK_TextBlock_FNTN_01 | 파일 이름 추출 기준 | File Name Extraction |
| ID_BLOCK_TextBlock_FNTN_02 | 도면 검색 위치 | Drawing Search Location |
| ID_BLOCK_TextBlock_FNTN_03 | 도면이 열려 있을 때 | When DWG is Open |
| ID_BLOCK_TextBlock_FNTN_04 | 현재 파일 이름 | Current File Name |
| ID_BLOCK_TextBlock_FNTN_05 | 변경 파일 이름 | Changed File Name |
| ID_BLOCK_TextBlock_FNTN_06 | 변경 결과  | Change Result |
| ID_BLOCK_TextBlock_FNTN_07 | 목록에 도면을 추가해 주십시오. | Add drawings to the lists |
| ID_BLOCK_TextBlock_FNTN_08 | 블록 이름 | Block Name |
| ID_BLOCK_TextBlock_FNTN_09 | 구분 | Division |
| ID_BLOCK_TextBlock_FNTN_10 | 파일명 포멧 | File Name Format |
| ID_BLOCK_TextBlock_FNTN_11 | 머리말 | Prefix |
| ID_BLOCK_TextBlock_FNTN_12 | 꼬리말 | Suffix |
| ID_BLOCK_TextBlock_FNTN_13 | 도면 번호와 이름 사이 문자는 도면 번호 맨 마지막 아이템 꼬리말에 입력합니다. | Input the separator between the number and name in the last drawing number's suffix. |
| ID_BLOCK_TextBlock_FNTN_14 | 값을 가져올 태그를 선택해 주십시오. | Select a tag to import value |
| ID_BLOCK_TextBlock_FNTN_15 | 태그 | Tag |
| ID_BLOCK_TextBlock_FNTN_16 | 값 | Value |
| ID_BLOCK_TextBlock_FNTN_17 | 파일 이름 :  | File name : |
| ID_BLOCK_TextBlock_FNTN_18 | 연결 문자 :  | Connection text : |
| ID_BLOCK_TextBlock_IBP_01 | 블록 선택 방법 | Block Selection |
| ID_BLOCK_TextBlock_IBP_02 | 블록 축척 | Block Scale |
| ID_BLOCK_TextBlock_LAYER | 레이어 | Layer |
| ID_BLOCK_TextBlock_MID_01 | 도면간 간격 설정 | Drawing Spacing |
| ID_BLOCK_TextBlock_MID_02 | 최대 행(열) 개수 (0 입력 시 제한 없음) | Max Rows(columns)          * 0 for no limit |
| ID_BLOCK_TextBlock_MID_03 | 행(열) 간격 | Row(column) spacing |
| ID_BLOCK_TextBlock_MID_04 | 도면 리스트 | Drawing List |
| ID_BLOCK_TextBlock_MID_05 | 추가 | Add |
| ID_BLOCK_TextBlock_MID_06 | 도면경로 | Path |
| ID_BLOCK_TextBlock_MID_07 | 도면이름 | Name |
| ID_BLOCK_TextBlock_MID_08 | 도면크기 | Size |
| ID_BLOCK_TextBlock_MID_09 | 파일크기 | File Size |
| ID_BLOCK_TextBlock_SELECTBLOCK_01 | 블록 | Block |
| ID_BLOCK_TextBlock_SELECTBLOCK_02 | 이름 | Name |
| ID_BLOCK_TextBlock_SELECTBLOCK_03 | 설명 | Description |
| ID_BLOCK_TextBlock_SELECTBLOCK_04 | 속성블록 | Attribute block |
| ID_BLOCK_TextBlock_SELECTBLOCK_05 | 외부참조블록 | External reference block |
| ID_Button_Apply | 적용 | Apply |
| ID_Button_Cancel | 취소 | Quit |
| ID_Button_Close | 닫기 | Close |
| ID_Button_OK | 확인 | Ok |
| ID_CIVIL_3DVM_Change | Z값을 변경할 정점 지정 | Specify the vertex to change the Z value |
| ID_CIVIL_3DVM_Enter | 변경 Z값 입력 | Enter Z value to change |
| ID_CIVIL_3DVM_Not | 3D 폴리선이 아닙니다. | Not a 3D polyline. |
| ID_CIVIL_3DVM_Poly | 3D 폴리선을 선택해 주십시오. | Select 3D polyline. |
| ID_CIVIL_3DVM_Select | 정점 Z값을 변경할 3D 폴리선 선택 | Select 3D polyline to change Z value of the vertex |
| ID_CIVIL_AETT_Apply | Z값을 적용할 객체 선택 | Select object to apply the Z value to |
| ID_CIVIL_AETT_Change | Z값을 변경할 객체를 선택하세요. | Select the object to change the Z value. |
| ID_CIVIL_AETT_Number | 선택한 문자는 숫자가 아닙니다. | Selected text is not number. |
| ID_CIVIL_AETT_Text | Z값을 가져올 문자 선택 | Select text to get the Z value from |
| ID_CIVIL_ApplyButton_CLOTHOID | 클로소이드 그리기 | Draw Clothoid |
| ID_CIVIL_AREA_Draw | 그리드 그리기 | Draw Grid |
| ID_CIVIL_AREA_NoApplied | [그린 후 맨 뒤로 보내기]가 적용이 되지 않았다면, Regen 명령어를 실행해주세요. | If [Draw and send to the back] is not applied, run the Regen command. |
| ID_CIVIL_AREA_One | Grid 한쪽 모서리 점 지정 | Specify one edge point of Grid |
| ID_CIVIL_AREA_Op | Grid 반대쪽 모서리 점 지정 | Specify opposite edge point of Grid |
| ID_CIVIL_AREA_Warn1 | 지정한 영역의 가로 또는 세로 높이가 | The horizontal or vertical height of the specified area is |
| ID_CIVIL_AREA_Warn2 | 지정한 Grid 간격보다 작습니다. | less than the specified Grid interval. |
| ID_CIVIL_AREA_Warn3 | 영역을 좀 더 크게 지정해 주십시오. | Specify a larger area. |
| ID_CIVIL_BASE_Create | 선꼴스타일을 생성합니다. | Create a line type style. |
| ID_CIVIL_BD_Distance | 설치이격거리 | Installation Separation Distance |
| ID_CIVIL_BD_Ditch | 산마루 측구를 생성한다. | Create a Ridge Ditch. |
| ID_CIVIL_CG_Center | 횡단 중심점 지정 | Specify Center of Cross Section |
| ID_CIVIL_CG_Closed | 폐합된 폴리선 선택 | Select Closed Polylines |
| ID_CIVIL_CG_Draw | 횡단면도 그리드를 그린다. | Draw Cross Section Grid. |
| ID_CIVIL_CG_EL | 지정한 중심점의 EL값 문자 선택 or [EL값 입력(E)] | Select EL value text for the specified center point or [Enter EL value (E)] |
| ID_CIVIL_CG_EL2 | 지정한 점의 EL값 문자 선택 | Select EL value text for the specified center point |
| ID_CIVIL_CG_Main | 주 그리드 | Main Grid |
| ID_CIVIL_CG_PickFirstCorner | 횡단 Grid 한쪽 모서리 지정 | Select the first corner of cross-section grid. |
| ID_CIVIL_CG_PickSecondCorner | 횡단 Grid 반대쪽 모서리 지정 | Select the second corner of cross-section grid. |
| ID_CIVIL_CG_Ref | 기준 EL값 | Reference EL Value |
| ID_CIVIL_CG_Second | 보조 그리드 | Secondary Grid |
| ID_CIVIL_CG_Select | 문자 객체를 선택하세요 | Select text object |
| ID_CIVIL_CG_SelectClosedPoly | 하나로 이어진 폐합된 폴리선을 선택해주세요. | Select only one closed polyline. |
| ID_CIVIL_CG_SmallArea | 선택된 영역이 너무 작습니다. | Selected area is so small. |
| ID_CIVIL_CG_Text | 그리드 문자 | Grid Text |
| ID_CIVIL_CheckBox_AETT_01 | 변경한 객체의 레이어 변경 | Change layer of modified object |
| ID_CIVIL_CheckBox_CLOTHOID_01 | 정수 맞춤 | Fit to integer |
| ID_CIVIL_CheckBox_CLOTHOID_02 | S형 원 위치 고정 | Fix S-shape circle position |
| ID_CIVIL_CheckBox_CRN_01 | 차로유도선 생성 후 원래 선 삭제 | Delete original line after creation |
| ID_CIVIL_CheckBox_CRN_02 | 블록으로 생성 | Create as block |
| ID_CIVIL_CheckBox_CSR_01 | 라운딩 후 계획선 Trim | Trim design line after rounding |
| ID_CIVIL_CheckBox_CSR_02 | 표준 레이어 사용하기 | Use standard layer (CALS) |
| ID_CIVIL_CheckBox_CSR_03 | 라운딩 선 분할 | Rounding segmentation |
| ID_CIVIL_CheckBox_CSR_04 | 선(Line)으로 폭파 | Explode to Line |
| ID_CIVIL_CheckBox_CSS_01 | 문자 및 횡단 사면 표준 레이어 사용하기 | Use standard layer for text and slope |
| ID_CIVIL_CheckBox_CSS_02 | 사면 경계 표시 문자 쓰기 | Write slope boundary text |
| ID_CIVIL_CheckBox_CSS_03 | 구조물 하단 임시선 작성 | Draw temporary line under structure |
| ID_CIVIL_CheckBox_CSS_04 | 3소단 마다 소단 측구 적용 | Side ditch every 3rd berm |
| ID_CIVIL_CheckBox_DCG_01 | 그린 후 맨 뒤로 보내기 | Send to back after drawing |
| ID_CIVIL_CheckBox_DCG_02 | 문자 영역 보조 Grid 삭제 | Remove minor grid in text area |
| ID_CIVIL_CheckBox_DCG_03 | 좌측 EL값 표기 | Show left EL |
| ID_CIVIL_CheckBox_DCG_04 | 우측 EL값 표기 | Show right EL |
| ID_CIVIL_CheckBox_DCG_05 | 좌측 거리는 - 표기 | Minus for left distance |
| ID_CIVIL_CheckBox_DGR_01 | 그린 후 맨 뒤로 보내기 | Send to back after drawing |
| ID_CIVIL_CheckBox_DGR_02 | Grid 그리기 | Draw grid |
| ID_CIVIL_CheckBox_DGR_03 | 좌표 문자 쓰기 | Write coordinate text |
| ID_CIVIL_CheckBox_DIVD_01 | 도면 원점으로 이동 | Move drawing to origin |
| ID_CIVIL_CheckBox_DLG_01 | 그린 후 맨 뒤로 보내기 | Send grid to back |
| ID_CIVIL_CheckBox_DLS_01 | 경사 문자 표시 | Display slope text |
| ID_CIVIL_CheckBox_DLS_02 | 표준 레이어 사용하기 | Use standard layer |
| ID_CIVIL_CheckBox_DNL_01 | 선 두께 적용 | Transverse width |
| ID_CIVIL_CheckBox_DP_01 | 관 보강 | Pipe |
| ID_CIVIL_CheckBox_DSLO_01 | 표준 레이어 사용 | Use Standard Layer |
| ID_CIVIL_CheckBox_DSLO_02 | 사면 끝 단일점 | Converge to a point |
| ID_CIVIL_CheckBox_DSLO_03 | 종료지점 선 항상 그리기 | Always draw slope line at the end point |
| ID_CIVIL_CheckBox_DSTA_01 | 측점 원 표시 | Circle on major STA |
| ID_CIVIL_CheckBox_DSTA_02 | 측점 0+000 형식 유지 | Keep 0+000 format |
| ID_CIVIL_CheckBox_DSTA_03 | 측점 문자 표시 | Show station text |
| ID_CIVIL_CheckBox_DSTA_04 | 선형에 수직으로 측점 문자 쓰기 | Write text perpendicular |
| ID_CIVIL_CheckBox_DSTA_05 | 선형의 아래 쪽에 측점 문자 쓰기 | Write text below |
| ID_CIVIL_CheckBox_DSTA_06 | Km 문자 표시 생략 | Hide 'km' |
| ID_CIVIL_CheckBox_DSTA_07 | No 체인 정체인 뒤 +0 표기 안함 | Hide '+0' for No. format |
| ID_CIVIL_CheckBox_DTA_01 | 추가 차로 그리기 | Draw additional lane |
| ID_CIVIL_CheckBox_DWC_01 | 보행자 유도 화살표 그리기 | Draw pedestrian arrows |
| ID_CIVIL_CheckBox_DWC_02 | 일방향도 화살표 그리기 | Draw pedestrian arrows (One-way) |
| ID_CIVIL_CheckBox_EM_01 | 변경한 객체의 레이어 변경 | Change the layer of the changed object |
| ID_CIVIL_CheckBox_FINDLEVEL_01 | DimScale 적용 | Apply DimScale |
| ID_CIVIL_CheckBox_FINDLEVEL_02 | 시작할 때마다 축척 입력 묻기 | Ask for scale on start |
| ID_CIVIL_CheckBox_FINDLEVEL_03 | 선택 점에 포인트 삽입 | Insert point at selection |
| ID_CIVIL_CheckBox_FINDLEVEL_04 | 수평거리 표기 | Show horizontal distance |
| ID_CIVIL_CheckBox_FINDLEVEL_05 | 수평거리 기준점 별도 선택 | Select separate base point |
| ID_CIVIL_CheckBox_FINDLEVEL_06 | 지시선 표기 | Show leader line |
| ID_CIVIL_CheckBox_FLM_01 | 찾은 점에 측점 표시 | Label station |
| ID_CIVIL_CheckBox_FLM_02 | 찾은 점에 계획고 표시 | Label elevation |
| ID_CIVIL_CheckBox_FLM_03 | 변곡점에 측점 표시 | Display the inflection point as station |
| ID_CIVIL_CheckBox_GEL_01 | 연장 표시 | Label distance |
| ID_CIVIL_CheckBox_GEL_02 | 지시선 그리기 | Create leader |
| ID_CIVIL_CheckBox_GEL_03 | 연속으로 EL 산출 | Multiple EL output |
| ID_CIVIL_CheckBox_GEL_04 | EL 위치에 점 생성 | Create points with EL |
| ID_CIVIL_CheckBox_GEL_05 | 생성된 점 Z 값에 EL 값 적용 | Apply EL to point Z |
| ID_CIVIL_CheckBox_GEL_06 | 점 지정 없이 두 점 사이 정수 EL만 표기 | Label interger EL between points |
| ID_CIVIL_CheckBox_GRP_01 | Z값 0 지반선 제외 | Exclude Zero EL |
| ID_CIVIL_CheckBox_GRP_02 | Z값 0 미만 지반선 제외 | Exclude Negative EL |
| ID_CIVIL_CheckBox_GSE_01 | 측점 표기 | Station display |
| ID_CIVIL_CheckBox_HEVTT_01 | Z 값이 0인 객체 제외 | Exclude objects with zero Z-value |
| ID_CIVIL_CheckBox_HPTT_01 | Z값이 0인 점 제외 | Exclude points with zero z value |
| ID_CIVIL_CheckBox_HPTT_02 | 문자에 Z값 넣기 | Include z value in text |
| ID_CIVIL_CheckBox_IM_01 | 변경한 객체의 레이어 변경 | Change the layer of the changed object |
| ID_CIVIL_CheckBox_SLT_01 | 앞에 ""S="" 붙임 | Add "S=" prefix |
| ID_CIVIL_CheckBox_SLT_02 | 화살표 그리기 | Draw arrow |
| ID_CIVIL_CheckBox_SLT_03 | 경사 앞에 +/- 표시하기 | Show +/- prefix |
| ID_CIVIL_CheckBox_SLT_04 | 1:n 형식에서 공백 없이 쓰기 | No space in 1:n format |
| ID_CIVIL_CheckBox_STT_01 | STA, NO 문자 쓰기 | Write STA, NO Text |
| ID_CIVIL_CheckBox_STT_02 | 도면에서 지정 | Pick on screen |
| ID_CIVIL_CheckBox_STT_03 | 인출선 표기 | Show leader |
| ID_CIVIL_CheckBox_STT_04 | Dot 표기 | Show dot |
| ID_CIVIL_CheckBox_TAP_01 | 문자와 함께 점 생성 | Create points with text |
| ID_CIVIL_CheckBox_TAP_02 | 문자에 Z값 넣기 | Include Z value in text |
| ID_CIVIL_CheckBox_TLC_01 | 하나의 폴리선으로 결합 | Join as polyline |
| ID_CIVIL_CheckBox_TLC_02 | 결합 후 원래 객체 삭제 | Delete source after join |
| ID_CIVIL_CheckBox_VE_01 | 변경한 점은 레이어 변경 | Change layer of modified points |
| ID_CIVIL_CheckBox_WCZ_01 | 5m 단위 높이만 쓰기 | Write only in 5m intervals |
| ID_CIVIL_CheckBox_WCZ_02 | Z값 0 이하 등고선 제외 | Exclude contours with z-value 0 or less |
| ID_CIVIL_CLOTH_A1 | A 값 입력 (계산값 | Enter A Value (calculated value) |
| ID_CIVIL_CLOTH_A2 | 큰 원의 A 값 입력 (계산값 | Enter A value for large circle (calculated value) |
| ID_CIVIL_CLOTH_A3 | 작은 원의 A 값 입력 (계산값 | Enter an A value for a small circle (calculated value |
| ID_CIVIL_CLOTH_Available | 클로소이드를 구할 수 없습니다. | Closoid is not available. |
| ID_CIVIL_CLOTH_Create | 클로소이드가 생성될 수 없습니다 | Closoid could not be created |
| ID_CIVIL_CLOTH_Curve | Curve 객체를 선택하세요. | Select a Curve object. |
| ID_CIVIL_CLOTH_First | 첫번째 객체 선택 | Select the first object |
| ID_CIVIL_CLOTH_Long | 선의 길이가 너무 긴 경우 느려질 수 있습니다. | If the line is too long, it may slow down. |
| ID_CIVIL_CLOTH_Ok | 확인 | Confirm |
| ID_CIVIL_CLOTH_Run | 실행하시겠습니까? | Do you want to run it? |
| ID_CIVIL_CLOTH_Second | 두번째 객체 선택 | Select second object |
| ID_CIVIL_ComboBox_DP_01 | VR | VR pipe |
| ID_CIVIL_ComboBox_DP_02 | Hume | Hume pipe |
| ID_CIVIL_ComboBox_HEVTT_01 | 좌측 상단 | Top left |
| ID_CIVIL_ComboBox_HEVTT_02 | 좌측 중심 | Center left |
| ID_CIVIL_ComboBox_HEVTT_03 | 좌측 하단 | Bottom left |
| ID_CIVIL_ComboBox_HEVTT_04 | 중앙 상단 | Top middle |
| ID_CIVIL_ComboBox_HEVTT_05 | 중앙 중심 | Center middle |
| ID_CIVIL_ComboBox_HEVTT_06 | 중앙 하단 | Bottom middle |
| ID_CIVIL_ComboBox_HEVTT_07 | 우측 상단 | Top right |
| ID_CIVIL_ComboBox_HEVTT_08 | 우측 중심 | Center right |
| ID_CIVIL_ComboBox_HEVTT_09 | 우측 하단 | Bottom right |
| ID_CIVIL_ComboBox_HPTT_01 | 왼쪽 | Left |
| ID_CIVIL_ComboBox_HPTT_02 | 중심 | Center |
| ID_CIVIL_ComboBox_HPTT_03 | 오른쪽 | Right |
| ID_CIVIL_ComboBox_STT_01 | 반올림 | Rounding |
| ID_CIVIL_ComboBox_STT_02 | 올림 | Round Up |
| ID_CIVIL_ComboBox_STT_03 | 내림 | Round Down |
| ID_CIVIL_CORNER_Draw | 가각을 그릴 | To draw street corner, |
| ID_CIVIL_CORNER_First | 첫번째 선 선택 | Select first line |
| ID_CIVIL_CORNER_Inter | 두 선의 교차점을 직접 지정해 주세요. | Specify the intersection of the two lines directly. |
| ID_CIVIL_CORNER_Length | 가각 길이 입력 | Enter length of street corner |
| ID_CIVIL_CORNER_No | 교차점을 찾을 수 없습니다. | No intersections found. |
| ID_CIVIL_CORNER_Second | 두번째 선 선택 | Select second line |
| ID_CIVIL_CSL_Center | 횡단 중심점 지정 | Specify Center of Cross Section |
| ID_CIVIL_CSL_Left | 횡단 좌측 부분 선택 | Select Left side of Cross Section |
| ID_CIVIL_CSL_Point | 횡단면을 입력할 지점 선택 | Select point to input Cross Section |
| ID_CIVIL_CSS_1Berm | 1차 소단 폭을 입력 | Enter 1st berm width |
| ID_CIVIL_CSS_1Slope | 1차 경사를 입력 | Enter 1st Slope |
| ID_CIVIL_CSS_1Soil | 토사 1차 경사를 입력 | Enter 1st Soil Slope |
| ID_CIVIL_CSS_2Berm | 2차 소단 폭을 입력 | Enter 2nd berm width |
| ID_CIVIL_CSS_2Slope | 2차 경사를 입력 | Enter 2nd Slope |
| ID_CIVIL_CSS_2Soil | 토사 2차 경사를 입력 | Enter 2nd Soil Slope |
| ID_CIVIL_CSS_3Berm | 3차 소단 폭을 입력 | Enter 3rd berm width |
| ID_CIVIL_CSS_3Slope | 3차 경사를 입력 | Enter 3rd Slope |
| ID_CIVIL_CSS_4Berm | 4차 소단 폭을 입력 | Enter 4th berm width |
| ID_CIVIL_CSS_4Slope | 4차 경사를 입력 | Enter 4th Slope |
| ID_CIVIL_CSS_5Berm | 5차 소단 폭을 입력 | Enter 5th berm width |
| ID_CIVIL_CSS_5Slope | 5차 경사를 입력 | Enter 5th Slope |
| ID_CIVIL_CSS_A | (A) 토사 1차 경사 | (A) 1st Slope |
| ID_CIVIL_CSS_AbsH | 절대소단 높이를 입력 | Enter Absolute Berm Height |
| ID_CIVIL_CSS_Add | 추가 옵션 | Additional Options |
| ID_CIVIL_CSS_Apply | 3소단마다 소단 측구 적용 | Apply berm side gutter for every 3rd berm |
| ID_CIVIL_CSS_B | (B) 토사 2차 경사 | (B) 2nd Slope |
| ID_CIVIL_CSS_BermSlope | 소단 경사(%) | Berm Slope(%) |
| ID_CIVIL_CSS_Blast | 발파암 경사를 입력 | Enter Blasting Rock Slope |
| ID_CIVIL_CSS_BlastH | 발파암 소단 높이를 입력 | Enter Blasting Rock Berm Height |
| ID_CIVIL_CSS_BlastLine | 발파암 선을 선택(없으면 엔터) or 쌓기부 지반선 선택 | Select Blasting Rock Slope (Enter if none) or Fill Slope Ground Line |
| ID_CIVIL_CSS_BlastW | 발파암 소단 폭을 입력 | Enter Blasting Rock Berm Width |
| ID_CIVIL_CSS_C | (C) 리핑암   경사 | (C) Ripping Rock Slope |
| ID_CIVIL_CSS_C2 | (C) 토사 3차 경사 | (C) 3rd Slope |
| ID_CIVIL_CSS_Com | 깎기, 쌓기 공통 설정 | Common settings for Cut Slope, Fill Slope |
| ID_CIVIL_CSS_Cross | 횡단면도에 쌓기부 및 깎이부 사면을 그린다. | Draw Fill Slope and Cut Slope on Cross Section. |
| ID_CIVIL_CSS_CrossOpt | 횡단면도 그리기 옵션 | Cross Section Drawing Options |
| ID_CIVIL_CSS_CutH | 깎기부 소단 높이를 입력 | Enter Cut Slope Berm Height |
| ID_CIVIL_CSS_CutSet | 깎기부 설정 | Cut Slope Settings |
| ID_CIVIL_CSS_CutW | 깎기부 소단 폭을 입력 | Enter Cut Slope Berm Width |
| ID_CIVIL_CSS_D | (D) 발파암   경사 | (D) Blasting Rock Slope |
| ID_CIVIL_CSS_D2 | (D) 토사 4차 경사 | (D) 4th Slope |
| ID_CIVIL_CSS_Draw | 횡단사면 그리기 | Draw Cross Slope |
| ID_CIVIL_CSS_E | (E) 발파암 소단 높이 | (E) Blasting Rock Berm Height |
| ID_CIVIL_CSS_E2 | (E) 토사 5차 경사 | (E) 5th Slope |
| ID_CIVIL_CSS_F | (F) 발파암 소단 폭 | (F) Blasting Rock Berm Width |
| ID_CIVIL_CSS_F2 | (F) 쌓기부 소단 높이 | (F) Fill Slope Berm Height |
| ID_CIVIL_CSS_FillH | 쌓기부 소단 높이를 입력 | Enter fill slope height |
| ID_CIVIL_CSS_FillMin | 쌓기 최소 높이를 입력 | Enter fill slope minimum height |
| ID_CIVIL_CSS_FillSet | 쌓기부 설정 | Fill Slope Settings |
| ID_CIVIL_CSS_G | (G) 깎기부 소단 높이 | (G) Cut Slope Berm Height |
| ID_CIVIL_CSS_G2 | (G) 1차 소단 폭 | (G) 1st Berm Width |
| ID_CIVIL_CSS_H | (H) 깎기부 소단 폭 | (H) Cut Slope Berm Width |
| ID_CIVIL_CSS_H2 | (H) 2차 소단 폭 | (H) 2nd Berm Width |
| ID_CIVIL_CSS_I | (I) 절대소단 높이 | (I) Absolute Berm Height |
| ID_CIVIL_CSS_I2 | (I) 3차 소단 폭 | (I) 3rd Berm Width |
| ID_CIVIL_CSS_Init | 초기화(Z) | Initialize(Z) |
| ID_CIVIL_CSS_J | (J) 소단 최소 높이 | (J) Minimum Berm Height |
| ID_CIVIL_CSS_J2 | (J) 4차 소단 폭 | (J) 4th Berm Width |
| ID_CIVIL_CSS_K | (K) 소단 폭 3m 측구 | (K) 3m Width Berm Side Gutter |
| ID_CIVIL_CSS_K2 | (K) 5차 소단 폭 | (K) 5th Berm Width |
| ID_CIVIL_CSS_L | (L) 구조물 하단 임시선 작성 | (L) Draw temporary line at the bottom of structure |
| ID_CIVIL_CSS_L2 | (L) 쌓기 최소 높이 | (L) Fill Slope Minimum Height |
| ID_CIVIL_CSS_M | (M) 소단 경사(%) | (M) Berm Slope(%) |
| ID_CIVIL_CSS_M2 | (M) 3소단마다 소단 측구 적용 | (M) Apply Berm Side Gutter for Every 3rd Berm |
| ID_CIVIL_CSS_MinH | 소단 최소 높이를 입력 | Enter the minimum berm height |
| ID_CIVIL_CSS_Opt | 수정할 옵션을 선택 | Select options to modify |
| ID_CIVIL_CSS_PlanBlast | 계획선이 '발파암'선과 만나지 않습니다. | Plan Line does not meet 'Blasting Rock' Line. |
| ID_CIVIL_CSS_PlanGround | 계획선이 '지반'선과 만나지 않습니다. | Plan Line does not meet 'Ground' Line. |
| ID_CIVIL_CSS_PlanGround2 | 계획선이 '지반선'과 만나지 않아 생성할 수 없습니다 | Slope can't be created because Plan Line does not meet 'Ground' Line. |
| ID_CIVIL_CSS_PlanRip | 계획선이 '리핑암'선과 만나지 않습니다. | Plan Line does not meet 'Ripping Rock' Line. |
| ID_CIVIL_CSS_PlanSoil | 계획선이 '토사'선과 만나지 않습니다. | Plan Line does not meet 'Soil' Line. |
| ID_CIVIL_CSS_Rip | 리핑암 경사를 입력 | Enter Ripping Rock Slope |
| ID_CIVIL_CSS_RipLine | 리핑암 선을 선택 (없으면 엔터) | Select Ripping Rock Slope Line (Enter if none) |
| ID_CIVIL_CSS_Side | 소단 폭 3m 측구 | Side Gutter with 3m Width Berm |
| ID_CIVIL_CSS_SoilLine | 토사 선을 선택 (없으면 엔터) | Select Soil Line (enter if none) |
| ID_CIVIL_CSS_Start | 시작점 보다 낮은 위치의 선을 선택하면 '흙 쌓기부'를 그립니다. | If line lower than starting point selected, draw 'Soil Fill Slope'. |
| ID_CIVIL_CSS_Temp | 구조물 하단 임시선 작성 | Draw temporary line at the bottom of structure |
| ID_CIVIL_CSS_X | 닫기(X) | Close(X) |
| ID_CIVIL_CSS_Z | (Z) 옵션 초기화 | (Z) Initialize Options |
| ID_CIVIL_CUT_Draw | 횡단면도에 층따기를 그린다. | Draw bench cut on cross section. |
| ID_CIVIL_CUT_End | 지반선 내부의 층따기 끝점 지정 | Select End point of Bench Cut inside the Ground Line |
| ID_CIVIL_CUT_Start | 지반선 내부의 층따기 시작점 지정 | Select Start point of Bench Cut inside the Ground Line |
| ID_CIVIL_CW_Base | 우측 방향 사각 기준점 지정 | Select base point of right turn square |
| ID_CIVIL_CW_End | 횡단보도 끝점 지정 | Select end point of Crosswalk |
| ID_CIVIL_CW_Start | 횡단보도 시작점 지정 | Select start point of Crosswalk |
| ID_CIVIL_DIVD_NoMatchTag | 선택된 도곽에 지정한 태그 정보가 없습니다. | No matching tag. |
| ID_CIVIL_DIVD_SelectFrame1 | 도곽 블록을 선택하세요. | Select the frame to save. |
| ID_CIVIL_DIVD_SelectFrame2 | 블록인 도곽만 선택할 수 있습니다. | Allow the frame as block. |
| ID_CIVIL_DIVD_SelectOneEdge | 파일 이름으로 사용할 문자 영역의 한쪽 모서리 선택 | Select the Text object area for the file name. |
| ID_CIVIL_DIVD_SelectOppositeEdge | 반대쪽 모서리 선택 | Select opposite edge |
| ID_CIVIL_DL_Cal | 도면에서 도로의 종단 선형을 계산하고 직접 그린다. | Calculate Vertical Alignment of the road in the drawing and draw it directly. |
| ID_CIVIL_DL_Curve | 곡선길이(D) | CurveLength(D) |
| ID_CIVIL_DL_Length | 곡선길이를 입력하세요. | Enter length of the curve. |
| ID_CIVIL_DL_Text | 문자높이를 입력하세요. | Enter text height. |
| ID_CIVIL_DL_Third | 세 번째 점 지정 | Select third point |
| ID_CIVIL_DM_Base | 거리 기준점이 선택되지 않았습니다. | No distance base point is selected. |
| ID_CIVIL_DM_DirectionMark | 표시가 그려진 방향으로 진행하시겠습니까? | Do you want to proceed in the direction marked? |
| ID_CIVIL_DM_Distance | 기준점으로부터의 거리값 입력 | Enter a distance value from the base point |
| ID_CIVIL_DM_Large | 입력한 값이 너무 큽니다. | The entered value is too large. |
| ID_CIVIL_DM_Line | 선 객체 상의 거리 기준점 선택 | Select a distance base point on a line object |
| ID_CIVIL_DM_Mark | 거리를 표시할 선 객체 선택 | Select line object to display distance |
| ID_CIVIL_DM_Not | 입력한 값이 없습니다. | The entered value does not exist. |
| ID_CIVIL_DM_Obj | 선, 아크, 폴리선 객체를 선택해 주세요. | Select line, arc, or polyline objects. |
| ID_CIVIL_EL_Next | 다음 점 지정 | Select next point |
| ID_CIVIL_EL_Undo | 명령취소(U) | Undo(U) |
| ID_CIVIL_ELM_Change | EL값을 변경할 폴리선 선택 | Select polyline to change EL value |
| ID_CIVIL_ELM_New | 폴리선의 새로운 EL값 입력 | Enter new EL value for polyline |
| ID_CIVIL_ELM_No | 입력한 값이 없습니다. | No values entered. |
| ID_CIVIL_EM_Change | Z값을 변경할 객체 선택 | Select object to change its Z value |
| ID_CIVIL_FB_Berm | 소단 선을 모두 선택해주세요. | Select all the berm lines. |
| ID_CIVIL_FB_Draw | 교량 등 구조물의 앞성토 비탈면 그리기 | Draw front fill slope of structure |
| ID_CIVIL_FB_End | 사면 끝 선을 선택해주세요. | Select the slope end line. |
| ID_CIVIL_FB_Even | 짝수개의 선을 선택해주세요. | Select even number of lines. |
| ID_CIVIL_FB_Start | 사면 시작 점을 선택해주세요. | Select start point of the slope. |
| ID_CIVIL_FBEL_End | 끝점 | End point to |
| ID_CIVIL_FBEL_Exit | 종료 | Close |
| ID_CIVIL_FBEL_Find | EL을 구할 점 지정 또는 찾을 EL 값 입력 | Select a point to find EL or enter EL value to find |
| ID_CIVIL_FBEL_Num | EL을 숫자로 입력해 주십시오. | Enter EL as a number. |
| ID_CIVIL_FBEL_Start | 시작점 | Start point to |
| ID_CIVIL_FDL_EL | 지정한 점의 EL 값을 나타낼 문자를 선택 | Select text to display the EL value of the specified point |
| ID_CIVIL_FDL_Enter | 계획고를 알고 싶은 측점 입력 또는 점 지정 | Enter a station or Select a point to know the plan |
| ID_CIVIL_FDL_Report | 종단 선형에서 원하는 측점의 종단 계획고를 알려준다. | Report Profile Plan of the desired station in the Vertical Alignment. |
| ID_CIVIL_FEL_EL | 표시할 E.L 입력 | Enter E.L. to mark |
| ID_CIVIL_FindLevel_BasePoint | 기준점 지정 | Specify a reference point |
| ID_CIVIL_FindLevel_Current | 현재 설정 : 기준 E.L | Current setting : Reference E.L |
| ID_CIVIL_FindLevel_DistanceDisplay | 거리 표시 기준점 지정 | Specify a distance display reference point |
| ID_CIVIL_FindLevel_EnterElValue | E.L값 입력 | Enter E.L Value |
| ID_CIVIL_FindLevel_EnterScale | 축척 입력 | Enter Scale |
| ID_CIVIL_FindLevel_Error | 오류가 발생해 명령이 종료되었습니다. | Current setting : Reference E.L |
| ID_CIVIL_FindLevel_LeaderNextPoint | 지시선 다음 점 지정 | Specify the next point of the leader |
| ID_CIVIL_FindLevel_OnlyText | 문자만 선택이 가능합니다. | Only texts can be selected. |
| ID_CIVIL_FindLevel_PlanPoint | 계획점 지정 | Specify Plan Points |
| ID_CIVIL_FindLevel_SelectBase | 기준점 E.L값 선택 | Select Reference Point E.L Value |
| ID_CIVIL_FindLevel_Setting | 옵션설정(S) | SettingOption(S) |
| ID_CIVIL_FLM_DEFAULTLAYERNAME | 종단_최소_최대점 | Terminal_min_max_point |
| ID_CIVIL_FLM_EL | EL 값 | EL Value |
| ID_CIVIL_FLM_Find | 선택한 종단 선형의 최저/최고점을 찾습니다. | Find the lowest/highest point of the selected Vertical Alignment. |
| ID_CIVIL_FLM_Select | 지정한 점의 EL 값을 나타낼 문자를 선택 | Select text to display the EL value of the specified point |
| ID_CIVIL_FR_Pass | 중심선이 지나갈 점 지정 | Specify the point at which a centerline passes |
| ID_CIVIL_FR_Point | IP 점 지정 | Select a IP point |
| ID_CIVIL_GL_EL | 최저 EL 값 입력 | Enter the lowest EL value |
| ID_CIVIL_GL_Extract | 지형도 및 3차원 도면에서 종단을 추출한다. | Extract Vertical Alignment from topographic maps and three-dimensional drawings. |
| ID_CIVIL_GL_FailedEndPoint | 끝점 추가 실패 | Failed to add endpoint |
| ID_CIVIL_GL_FailedStartPoint | 시작점 추가 실패 | Failed to add starting point |
| ID_CIVIL_GL_Point | 종단선을 그릴 점 선택 | Select a point to draw Vertical Alignment Line |
| ID_CIVIL_GL_VA | 종단선 선택 | Select Vertical Alignment Line |
| ID_CIVIL_GroupName_01 | 설정 | General Settings |
| ID_CIVIL_GroupName_02 | 기본 설정 | General Settings |
| ID_CIVIL_GroupName_03 | 형식 기준 | Type Standards |
| ID_CIVIL_GroupName_04 | 측구 기준 | Ditch Type |
| ID_CIVIL_GroupName_05 | 참고 | Reference |
| ID_CIVIL_GroupName_06 | Grid 설정 | Grid Settings |
| ID_CIVIL_GroupName_07 | 주 Grid | Major Grid |
| ID_CIVIL_GroupName_08 | 보조 Grid | Minor Grid |
| ID_CIVIL_GroupName_09 | 문자 설정 | Text Settings |
| ID_CIVIL_GroupName_10 | 공통 | General |
| ID_CIVIL_GroupName_11 | 깎기부 | Cut Section |
| ID_CIVIL_GroupName_12 | 쌓기부 | Fill Section |
| ID_CIVIL_GroupName_13 | 그리기 설정 | Drawing Settings |
| ID_CIVIL_GroupName_14 | Grid 작성 방법 | Grid Creation Method |
| ID_CIVIL_GroupName_15 | 상세 설정 | Detail Settings |
| ID_CIVIL_GroupName_16 | 레이어 설정 | Layer Settings |
| ID_CIVIL_GroupName_17 | 결과 설정 | Output Settings |
| ID_CIVIL_GroupName_18 | 기본 | Standard |
| ID_CIVIL_GroupName_19 | 수평거리 | Horizontal distance |
| ID_CIVIL_GroupName_20 | 지시선 | Leader |
| ID_CIVIL_GroupName_21 | 표 설정 | General Settings |
| ID_CIVIL_GroupName_22 | 표기 형식 | Display Format |
| ID_CIVIL_GroupName_23 | 표시 형식 | General |
| ID_CIVIL_GroupName_24 | 경사 형식 | Slope format |
| ID_CIVIL_GroupName_25 | 유형 | Type |
| ID_CIVIL_GroupName_26 | 규격 | Pipe Specification |
| ID_CIVIL_GroupName_27 | 일반 설정 | General Settings |
| ID_CIVIL_GroupName_28 | 라운딩 분할 | Rounding Segmentation |
| ID_CIVIL_GroupName_29 | 그리기 방식 | Drawing Method |
| ID_CIVIL_GroupName_30 | 측점 문자 | Station Text |
| ID_CIVIL_GroupName_31 | 인출선 | Leader Line |
| ID_CIVIL_GroupName_32 | 측점 원 및 선 설정 | Station Symbols |
| ID_CIVIL_GroupName_33 | 측점 문자 설정 | Text Settings |
| ID_CIVIL_GroupName_34 | 그리는 형식 | Drawing Method |
| ID_CIVIL_GroupName_35 | 그리기 형식 | Draw Type |
| ID_CIVIL_GroupName_36 | 변화구간 그리기 | Draw Transition Section |
| ID_CIVIL_GroupName_37 | 좌회전 변화구간 그리기 | Draw Left-Turn Lane |
| ID_CIVIL_GroupName_38 | 추가 차로 설정 | Additional Lane Setting |
| ID_CIVIL_GroupName_39 | 설치 기준 | Installation Type |
| ID_CIVIL_GroupName_40 | 설치 장소 | Installation Location |
| ID_CIVIL_HC_Contour | 레이어를 분리할 Z값이 있는 등고선 객체 선택 | Select Contour Line with Z value to separate layers |
| ID_CIVIL_HEVTT_Select | Z 값을 문자로 쓸 객체 선택 | Select object to write Z value to as text |
| ID_CIVIL_HPTT_Create | 개의 문자 생성됨 | texts created. |
| ID_CIVIL_HPTT_Select | 문자를 생성할 Z값이 있는 점 선택 | Select points with Z value to create texts |
| ID_CIVIL_IM_Change | 입니다. Z 값을 바꿀 객체 선택 | . Select object to change Z value |
| ID_CIVIL_IM_Set | 설정할 Z 값은 | The Z value to set is |
| ID_CIVIL_INTER_Create | 등고선 생성 중… | Creating contour lines… |
| ID_CIVIL_INTER_Division | 구간 분할 수 <기본값 : 5> | Number of interval divisions <Default: 5> |
| ID_CIVIL_INTER_DivMsg | 2개의 구간 이상으로 분할되어야 합니다. | Must be divided into two or more intervals. |
| ID_CIVIL_INTER_First | 첫번째 등고선 | First Contour Line |
| ID_CIVIL_INTER_Inter | 등고선 보간 | Contour interpolation |
| ID_CIVIL_INTER_Same | 같은 형식의 선 객체를 선택하세요. | Select line object of the same type. |
| ID_CIVIL_INTER_Second | 두번째 등고선 | Second Contour Line |
| ID_CIVIL_INTER_SelectCreate | 선택된 등고선의 보간(Interpolation)을 작성합니다. 정확성이 낮을 수 있습니다. | Creates an interpolation of the selected contour. It may be less accurate. |
| ID_CIVIL_INTER_SelectFirst | 첫 번째 폴리라인 선택 | Select the first polyline |
| ID_CIVIL_INTER_SelectSecond | 두 번째 폴리라인 선택 | Select the second polyline |
| ID_CIVIL_INTER_Unable | 선 객체를 가져올 수 없습니다. | Unable to get line object. |
| ID_CIVIL_LC_Set | 설정변경(S) | ChangeSettings(S) |
| ID_CIVIL_LC_Thick | 버림두께 | Lean Thickness |
| ID_CIVIL_MC_Base | 갈매기 차로의 기준 선 선택 | Select a baseline for Seagull Road |
| ID_CIVIL_MC_End | 갈매기 노면표시가 그려질 끝 점 지정 | Select the end point to draw Seagull Road Surface Marking. |
| ID_CIVIL_MC_First | 첫번째 차선 선택 | Select first lane |
| ID_CIVIL_MC_Line | 선객체(L) | LineObject(L) |
| ID_CIVIL_MC_Mark | 표시된 점이 선의 시점이 맞습니까? | Is the marked point the start point of the line? |
| ID_CIVIL_MC_Not | 실행 가능한 객체가 아닙니다. | Not executable object. |
| ID_CIVIL_MC_Second | 두번째 차선 선택 | Select second lane |
| ID_CIVIL_MC_Select | 갈매기 차로의 기준 선택 | Select Seagull Road Criteria |
| ID_CIVIL_MC_Start | 갈매기 노면표시가 그려질 시작 점 지정 | Select the start point to draw Seagull Road Surface Marking. |
| ID_CIVIL_MC_Two | 두점(P) | TwoPoints(P) |
| ID_CIVIL_ME_Inter | 교차하는 등고선 객체가 없습니다. | No intersecting contour objects. |
| ID_CIVIL_ME_Reverse | 문자 방향을 반대로 지정할까요? | Do you want to reverse the direction of the text? |
| ID_CIVIL_MEL_Mark | E.L 표기점 지정 | Select E.L. mark point |
| ID_CIVIL_MST_EL2 | 지정한 점의 EL값 문자 선택 또는 | Select EL value text for the point or  |
| ID_CIVIL_MST_FirstPointOnLine | 선 상의 시작 점 지정 | Select the start-point on line |
| ID_CIVIL_MST_Mark | 선택한 객체 및 두 점의 경사를 표시 | Mark the slope of the selected object and two points |
| ID_CIVIL_MST_SecondPointOnLine | 선 상의 끝 점 지정 | Select the end-point on line |
| ID_CIVIL_MST_Select | 경사를 표시할 선, 폴리선을 선택해주세요. | Select a line or polyline to mark the slope. |
| ID_CIVIL_MST_SelectBaseLine | 경사 계산 기준선 선택 | Select the baseline |
| ID_CIVIL_MST_SelectOnPlane | 선 선택(S) | SelectTheLine(S) |
| ID_CIVIL_OBJ_Base | 좌표를 알고 있는 기준 점 지정 | Specify a base point with the known coordinates |
| ID_CIVIL_OBJ_North | 기준점에서 북쪽 방향으로 아무점이나 지정 | Specify any point north of the base point |
| ID_CIVIL_OBJ_Poly | 폴리선을 선택해 주십시오 | Select a polyline. |
| ID_CIVIL_OBJ_Select | 폐합된 폴리선 객체 선택 | Select closed polyline object |
| ID_CIVIL_OBJ_X | 지정한 점의 X좌표 입력 | Enter the X coordinate for the specified point |
| ID_CIVIL_OBJ_Y | 지정한 점의 Y좌표 입력 | Enter the Y coordinate for the specified point |
| ID_CIVIL_PL_Obj | 수직선을 그릴 객체 | Select object to draw a perpendicular line |
| ID_CIVIL_PL_Point | 수직을 그릴 점 지정 | Specify the point to draw a perpendicular line to |
| ID_CIVIL_RadioButton_CLOTHOID_01 | 자동 | Automatic |
| ID_CIVIL_RadioButton_CLOTHOID_02 | 직접 입력 | Manual input |
| ID_CIVIL_RadioButton_CLOTHOID_03 | A값 동일 | Same A-value |
| ID_CIVIL_RadioButton_CLOTHOID_04 | L값 동일 | Same L-value |
| ID_CIVIL_RadioButton_CLOTHOID_05 | 선 | Line |
| ID_CIVIL_RadioButton_CLOTHOID_06 | 원 | Circle |
| ID_CIVIL_RadioButton_CLOTHOID_07 | 큰 원 | Large circle |
| ID_CIVIL_RadioButton_CLOTHOID_08 | 작은 원 | Small circle |
| ID_CIVIL_RadioButton_CRN_01 | 표시간격으로 그리기 | By interval |
| ID_CIVIL_RadioButton_CRN_02 | 점선 형태로 그리기 | Dashed line |
| ID_CIVIL_RadioButton_CSR_01 | 수평거리 1.0m | Horizontal dist. on ground (1m) |
| ID_CIVIL_RadioButton_CSR_02 | 사거리 1.0m | Slope dist. on ground (1m) |
| ID_CIVIL_RadioButton_CSR_03 | 거리 맞춤 | Specify rounding distance |
| ID_CIVIL_RadioButton_CSS_01 | 국토부 2008 | MOLIT (2008) |
| ID_CIVIL_RadioButton_CSS_02 | 국토부 2005 | MOLIT (2005) |
| ID_CIVIL_RadioButton_CSS_03 | 국토부 2004 | MOLIT (2004) |
| ID_CIVIL_RadioButton_CSS_04 | 국토부 2003 | MOLIT (2003) |
| ID_CIVIL_RadioButton_CSS_05 | 도로공사 2011 | KEC (2011) |
| ID_CIVIL_RadioButton_CSS_06 | 도로공사 2008 | KEC (2008) |
| ID_CIVIL_RadioButton_CSS_07 | 도로공사 2006 | KEC (2006) |
| ID_CIVIL_RadioButton_CSS_08 | 도로공사 2004 | KEC (2004) |
| ID_CIVIL_RadioButton_CSS_09 | 도로공사 2003 | KEC (2003) |
| ID_CIVIL_RadioButton_CSS_10 | 도로공사 2001 | KEC (2001) |
| ID_CIVIL_RadioButton_DCG_01 | 폐합된 폴리선 객체 선택 그리기 | Select closed polyline |
| ID_CIVIL_RadioButton_DCG_02 | 사각 영역 지정 그리기 | Specify rectangular area |
| ID_CIVIL_RadioButton_DCG_03 | 고정 크기 그리기 | Draw fixed size |
| ID_CIVIL_RadioButton_DGR_01 | 영역 지정 | Specify area |
| ID_CIVIL_RadioButton_DGR_02 | 객체 선택 | Select object |
| ID_CIVIL_RadioButton_DGR_03 | 회전된 좌표 | Rotated coord |
| ID_CIVIL_RadioButton_DIVD_02 | 도곽 이름 | Frame name |
| ID_CIVIL_RadioButton_DIVD_03 | 도곽 태그 값 | Tag value within a frame |
| ID_CIVIL_RadioButton_DIVD_04 | 사용자 지정 | User defined |
| ID_CIVIL_RadioButton_DP_01 | 횡단면 | Profile section |
| ID_CIVIL_RadioButton_DP_02 | 단면 | Cross section |
| ID_CIVIL_RadioButton_DP_03 | 표준 레이어에 그리기 | Draw on standard layer |
| ID_CIVIL_RadioButton_DP_04 | 현재 레이어에 그리기 | Drow on current layer |
| ID_CIVIL_RadioButton_DSLO_01 | 그리기 | Draw |
| ID_CIVIL_RadioButton_DSLO_02 | 두 선으로 그리기 | Draw with two lines |
| ID_CIVIL_RadioButton_DSLO_03 | 쌓기부 | Cut |
| ID_CIVIL_RadioButton_DSLO_04 | 깎기부 | Fill |
| ID_CIVIL_RadioButton_DSLO_05 | 시·종점 구간 등분 | Divide between start and end point |
| ID_CIVIL_RadioButton_DSLO_06 | 표시간격/개수 분할 | Divide by interval and number |
| ID_CIVIL_RadioButton_DTA_01 | 변화 구간 | Transition section |
| ID_CIVIL_RadioButton_DTA_02 | 좌회전차로 | Left-Turn lane |
| ID_CIVIL_RadioButton_DTA_03 | 오른쪽 | Right |
| ID_CIVIL_RadioButton_DTA_04 | 왼쪽 | Left |
| ID_CIVIL_RadioButton_DTA_05 | 양쪽 | Both |
| ID_CIVIL_RadioButton_DTA_06 | 정방향 | Forward |
| ID_CIVIL_RadioButton_DTA_07 | 역방향 | Reverse |
| ID_CIVIL_RadioButton_DVB1_01 | 국토부 | MOLIT |
| ID_CIVIL_RadioButton_DVB1_02 | 도로공사 | EX |
| ID_CIVIL_RadioButton_DVB1_03 | 형식 1 | Type 1 |
| ID_CIVIL_RadioButton_DVB1_04 | 형식 2 | Type 2 |
| ID_CIVIL_RadioButton_DVB1_05 | 형식 3-1 | Type 3-1 |
| ID_CIVIL_RadioButton_DVB1_06 | 형식 3-2 | Type 3-2 |
| ID_CIVIL_RadioButton_DVB1_07 | 사면 끝에 맞춤 | Align to slope |
| ID_CIVIL_RadioButton_DVB1_08 | 지반에 측구 맞춤 | Align to ground |
| ID_CIVIL_RadioButton_DVB1_09 | 답외구간 | Non-agricultural |
| ID_CIVIL_RadioButton_DVB1_10 | 답구간 | Agricultural |
| ID_CIVIL_RadioButton_DVB2_01 | 국토부 | MOLIT |
| ID_CIVIL_RadioButton_DVB2_02 | 도로공사 | EX |
| ID_CIVIL_RadioButton_DVB2_03 | 형식 1 | Type 1 |
| ID_CIVIL_RadioButton_DVB2_04 | 형식 2 | Type 2 |
| ID_CIVIL_RadioButton_DVB2_05 | 형식 3-1 | Type 3-1 |
| ID_CIVIL_RadioButton_DVB2_06 | 형식 3-2 | Type 3-2 |
| ID_CIVIL_RadioButton_DWC_01 | 일방향 | One-way |
| ID_CIVIL_RadioButton_DWC_02 | 양방향 | Two-way |
| ID_CIVIL_RadioButton_DWC_03 | 직각 | Perp. |
| ID_CIVIL_RadioButton_DWC_04 | 사각 | Skew |
| ID_CIVIL_RadioButton_FEL_01 | 지시선 표시 | Leader |
| ID_CIVIL_RadioButton_FEL_02 | 가로선 표시 | Horizontal |
| ID_CIVIL_RadioButton_FINDLEVEL_01 | 선택 점 위 | Above selected point |
| ID_CIVIL_RadioButton_FINDLEVEL_02 | 선택 점 아래 | Below selected point |
| ID_CIVIL_RadioButton_FINDLEVEL_03 | 지시선 길이 사용자 지정 | Custom leader length |
| ID_CIVIL_RadioButton_FINDLEVEL_04 | 지시선 길이 고정 크기 | Fixed leader length |
| ID_CIVIL_RadioButton_FLM_01 | 최저점 찾기 | Lowest point |
| ID_CIVIL_RadioButton_FLM_02 | 최고점 찾기 | Highest point |
| ID_CIVIL_RadioButton_FLM_03 | 최저, 최고점 모두 찾기 | Min & Max points |
| ID_CIVIL_RadioButton_GEL_01 | 3D 거리 | 3D distance |
| ID_CIVIL_RadioButton_GEL_02 | 2D 거리 | 2D distance |
| ID_CIVIL_RadioButton_GRP_02 | NO. | NO |
| ID_CIVIL_RadioButton_GRP_03 | 표준 레이어에 그리기 | CALS layer |
| ID_CIVIL_RadioButton_GRP_04 | 현재 레이어에 그리기 | Current layer |
| ID_CIVIL_RadioButton_GSE_02 | NO. | No. |
| ID_CIVIL_RadioButton_GSE_03 | 찾은 값 명령창에 표시 | Display searched values ??in command window |
| ID_CIVIL_RadioButton_GSE_04 | 찾은 값 도면에 표시 | Display the searched values ??on the drawing |
| ID_CIVIL_RadioButton_SLL_01 | 1:n | 1:n (Scale Ratio) |
| ID_CIVIL_RadioButton_SLL_02 | % | % (Percentage) |
| ID_CIVIL_RadioButton_SLT_01 | 두 점 | 2p |
| ID_CIVIL_RadioButton_SLT_02 | 객체 | Object |
| ID_CIVIL_RadioButton_SLT_03 | 평면 두 점 | Two points on plane |
| ID_CIVIL_RadioButton_STT_03 | 선형 중심에서 거리 | Offset from center |
| ID_CIVIL_RadioButton_STT_04 | 인출선 끝에서 거리 | Offset from leader end |
| ID_CIVIL_RadioButton_TLC_01 | 공통 외접선 | Common external |
| ID_CIVIL_RadioButton_TLC_02 | 공통 내접선 | Common internal |
| ID_CIVIL_RadioButton_TLC_03 | 두 원 선택 방향 접선 | Two circles tangent |
| ID_CIVIL_RadioButton_TLC_04 | 한점과 원의 접선 | Point and circle tangent |
| ID_CIVIL_RadioButton_ZVL_01 | 선(Line)으로 그리기 | Draw as line |
| ID_CIVIL_RadioButton_ZVL_02 | 3D 폴리선으로 그리기 | Draw as 3d polyline |
| ID_CIVIL_ROUND_Distance | Rounding 거리 첫번째 점 지정 또는 값 입력 | Select a first point or enter the value of Rounding distance. |
| ID_CIVIL_ROUND_Distance2 | Rounding 거리 두번째 점 지정 | Select a second point of Rounding distance. |
| ID_CIVIL_ROUND_Draw | 깎기부 사면부의 라운딩을 작도한다. | Draw the Rounding of Cut Slope. |
| ID_CIVIL_ROUND_Result | Rounding 거리 | Rounding Distance |
| ID_CIVIL_SL_Enter | 경사 입력 | Enter slope |
| ID_CIVIL_SL_EnterSlopeAngle | 사면 경사(각도) 입력 | Enter slope (angle) |
| ID_CIVIL_SL_EnterSlopePer | 사면 경사(%) 입력 | Enter slope (%) |
| ID_CIVIL_SL_Next | 다음점 방향 지정 | Specify direction of the next point |
| ID_CIVIL_SM_All | 소단선을 모두 선택(없으면 '엔터') | Select all the berm lines (if none, 'Enter') |
| ID_CIVIL_SM_Center | 중심선 선택 | Select centerline |
| ID_CIVIL_SM_CenterEnd | 중심선에 사면 표기가 종료될 점 지정 | Specify end point to mark slope on the centerline |
| ID_CIVIL_SM_CenterStart | 중심선에 사면 표기가 시작될 점 지정(중심선 전체는 '엔터') | Specify start point to mark slope on the centerline (To select the centerline overall, 'Enter') |
| ID_CIVIL_SM_Draw | 평면도에 표시되는 계획사면 그리기 | Draw plan slope marked on a floor plan |
| ID_CIVIL_SM_End | 사면 끝선 선택 | Select slope end line |
| ID_CIVIL_SM_EndPoint | 사면 끝점 지정 | Select slope end point |
| ID_CIVIL_SM_Even | 짝수 개의 소단선을 선택해주세요. | Select an even number of berm lines. |
| ID_CIVIL_SM_Start | 사면 시작선 선택 | Select slope start line |
| ID_CIVIL_STA_Equal | 주 측점 간격을 보조 측점 간격과 같거나 배수로 입력해 주십시오. | Enter the main station spacing equal to or multiple of the secondary station spacing. |
| ID_CIVIL_STA_InputZero | 측점 간격과 측점 선의 길이는 0 이상이어야 합니다. | Station interval and symbol line's length must be greater than or equal to 0. |
| ID_CIVIL_STA_Less | 주 측점 간격이 보조 측점 간격보다 작습니다. | Main station spacing is less than the secondary station spacing. |
| ID_CIVIL_STA_Start | 선형의 시점 쪽 선택 | Select side of the start point of alignment |
| ID_CIVIL_STA_Warn | 경고 | Warning |
| ID_CIVIL_STT_All | 모두(A) | All(A) |
| ID_CIVIL_STT_Base | [시작 측점] 기준 점 지정 | [Start station point] Specify the reference point |
| ID_CIVIL_STT_Direction | 선형 진행 방향이 맞습니까? | Is the linear progress direction correct? |
| ID_CIVIL_STT_Enter | 인출선을 표기할 점 지정 또는 측점 입력 | Specify a point or enter a station to mark the withdrawal line |
| ID_CIVIL_STT_EnterValue | [시작 측점] 지정한 점의 측점 값 입력 | [Start station point] Enter the station value of the specified point |
| ID_CIVIL_STT_InputZero | 측점 간격은 0 이상이어야 합니다. | Station interval must be greater than or equal to 0. |
| ID_CIVIL_STT_Left | 좌(L) | Left(L) |
| ID_CIVIL_STT_Mark | 평면도 등에 표기하는 측점 문자를 표기 | Mark the Station text on the floor plan |
| ID_CIVIL_STT_MarkDirection | 인출선 표기 방향 | Lead Track line marking direction |
| ID_CIVIL_STT_Measurement | 측점 | Station |
| ID_CIVIL_STT_Num | 숫자를 입력해주세요 | Enter a number |
| ID_CIVIL_STT_Right | 우(R) | Right(R) |
| ID_CIVIL_STT_Select | 선형 객체 선택 | Linear object selection |
| ID_CIVIL_TAP_Enter | Z값 입력 | Enter Z Value |
| ID_CIVIL_TAPER_AT1 | AT 길이 입력 | Enter AT Length |
| ID_CIVIL_TAPER_AT2 | AT 길이를 입력해 주세요. | Enter AT length. |
| ID_CIVIL_TAPER_BT1 | BT 길이 입력 | Enter BT Length |
| ID_CIVIL_TAPER_BT2 | BT 길이를 입력해 주세요. | Enter BT length. |
| ID_CIVIL_TAPER_Center | 선형 중심선 선택 | Select Linear Centerline |
| ID_CIVIL_TAPER_CenterStart | 선형 중심선의 테이퍼 시작 점 지정 | Specify the taper start point of the alignment centerline |
| ID_CIVIL_TAPER_Direction | 선형 진행 방향이 맞습니까? | Is the linear progress direction correct? |
| ID_CIVIL_TAPER_Draw | 도로 테이퍼 그리기 | Draw Road Taper |
| ID_CIVIL_TAPER_End1 | 변화 종점 폭 입력 | Enter Width of End Point of Change |
| ID_CIVIL_TAPER_End2 | 변화 종점의 폭을 입력해 주세요. | Enter the width of the last point of change. |
| ID_CIVIL_TAPER_Inter1 | 변화구간 길이 입력 | Enter Length of Changing Section |
| ID_CIVIL_TAPER_Inter2 | 변화구간의 길이를 입력해 주세요. | Enter the length of the changing section. |
| ID_CIVIL_TAPER_Lane1 | 대기차로 폭 입력 | Enter Waiting Lane Width |
| ID_CIVIL_TAPER_Lane2 | 대기차로 폭을 입력해 주세요. | Enter the width of the waiting lane. |
| ID_CIVIL_TAPER_Median1 | 중앙분리대 폭 입력 | Enter Median Strip Width |
| ID_CIVIL_TAPER_Median2 | 중앙분리대 폭을 입력해 주세요. | Enter the width of median strip. |
| ID_CIVIL_TAPER_Short1 | 중심선 길이가 변화구간 길이보다 짧습니다. | Centerline length is shorter than the length of the changing section. |
| ID_CIVIL_TAPER_Short2 | 중심선 길이가 AT + BT 길이보다 짧습니다. | Centerline length is shorter than AT + BT length. |
| ID_CIVIL_TAPER_Start1 | 변화 시점 폭 입력 | Enter Width of Start Point of Change  |
| ID_CIVIL_TAPER_Start2 | 변화 시점의 폭을 입력해 주세요. | Enter the width of the start point of change. |
| ID_CIVIL_TAPER_Strip1 | 대기분리대 폭 입력 | Enter Waiting Strip Width |
| ID_CIVIL_TAPER_Strip2 | 대기분리대 폭을 입력해 주세요. | Enter the width of the waiting strip. |
| ID_CIVIL_TC_Obj | 접하는 원을 그릴 객체 | Select object to draw a tangent circle |
| ID_CIVIL_TC_Point | 접하는 원을 그릴 점 지정 | Specify the point to draw a tangent circle |
| ID_CIVIL_TextBlock_BENCHCUT_01 | 층따기 높이 | Bench height |
| ID_CIVIL_TextBlock_BENCHCUT_02 | 최소 높이 | Min. height |
| ID_CIVIL_TextBlock_BENCHCUT_03 | 배수 경사 | Drain. slope    1: |
| ID_CIVIL_TextBlock_BENCHCUT_04 | 제외 경사 | Exclude slope |
| ID_CIVIL_TextBlock_BENCHCUT_05 | 이하 | Less than |
| ID_CIVIL_TextBlock_BENCHCUT_06 | 횡단 축척 | Scale |
| ID_CIVIL_TextBlock_CFM_01 | 문자 소수점 | Precision |
| ID_CIVIL_TextBlock_CFM_02 | 측점, 지반고 문자 높이 | T-height (Station, GL) |
| ID_CIVIL_TextBlock_CFM_03 | 정점 표기 문자 높이 | T-height (Vertax) |
| ID_CIVIL_TextBlock_CFM_04 | 구조물 표기 문자 높이 | T-height (Structure) |
| ID_CIVIL_TextBlock_CLOTHOID_01 | 클로소이드 값 찾기 | Find Clothoid Parameters |
| ID_CIVIL_TextBlock_CLOTHOID_02 | 기본형 | Basic |
| ID_CIVIL_TextBlock_CLOTHOID_03 | 난형 | Egg-shaped |
| ID_CIVIL_TextBlock_CLOTHOID_04 | S형 | S-curve |
| ID_CIVIL_TextBlock_CLOTHOID_05 | 복합 난형 | Compound Egg-shaped |
| ID_CIVIL_TextBlock_CLOTHOID_06 | 그리기 방식 | Drawing Method |
| ID_CIVIL_TextBlock_CLOTHOID_07 | 이동할 객체 | Move Objects |
| ID_CIVIL_TextBlock_CLOTHOID_08 | 원두개 | Two circles |
| ID_CIVIL_TextBlock_CLOTHOID_09 | (첫번째 원) | (1st circle) |
| ID_CIVIL_TextBlock_CLOTHOID_10 | (두번째 원) | (2nd circle) |
| ID_CIVIL_TextBlock_CLOTHOID_11 | 기본형 클로소이드 그리기 | Draw Basic Clothoid |
| ID_CIVIL_TextBlock_CLOTHOID_12 | 기본형 (선-점) | Basic (Line-Point) |
| ID_CIVIL_TextBlock_CLOTHOID_13 | 기본형 (선-선) | Basic (Line-Line) |
| ID_CIVIL_TextBlock_CLOTHOID_14 | 제원 입력 | Parameters |
| ID_CIVIL_TextBlock_CORNER_01 | 스케일 | Scale |
| ID_CIVIL_TextBlock_CORNER_02 | 도로의 구조, 시설 기준에 관한 규칙 | Rules on The Road Structures and Facilities Standards |
| ID_CIVIL_TextBlock_CRN_01 | 설치 형태 | Installation |
| ID_CIVIL_TextBlock_CRN_02 | 스케일 | Scale |
| ID_CIVIL_TextBlock_CRN_03 | 차로유도선 폭 | Line width |
| ID_CIVIL_TextBlock_CRN_04 | 갈매기 표시간격 | Chevron interval |
| ID_CIVIL_TextBlock_CRN_05 | 도색 길이 | Painting length |
| ID_CIVIL_TextBlock_CRN_06 | 점선 빈 길이 | Gap length |
| ID_CIVIL_TextBlock_CRN_07 | 레이어 | Layer |
| ID_CIVIL_TextBlock_CSR_01 | 라운딩 방식 | Rounding Method |
| ID_CIVIL_TextBlock_CSR_02 | 횡단면도 축척 | Scale |
| ID_CIVIL_TextBlock_CSR_03 | 분할 간격 | Interval |
| ID_CIVIL_TextBlock_CSS_01 | 소단 경사(%) | Bench slope (%) |
| ID_CIVIL_TextBlock_CSS_02 | 측구 구조물 | Gutter structure |
| ID_CIVIL_TextBlock_CSS_03 | 높이 | H = |
| ID_CIVIL_TextBlock_CSS_04 | 폭 | W = |
| ID_CIVIL_TextBlock_CSS_05 | 문자 글꼴 | Text style |
| ID_CIVIL_TextBlock_CSS_06 | 토사 1차 경사 | Soil 1st slope |
| ID_CIVIL_TextBlock_CSS_07 | 토사 2차 경사 | Soil 2nd slope |
| ID_CIVIL_TextBlock_CSS_08 | 리핑암 경사 | Ripping slope |
| ID_CIVIL_TextBlock_CSS_09 | 발파암 경사 | Blasting slope |
| ID_CIVIL_TextBlock_CSS_10 | 발파암 소단 높이 | Blast. berm H |
| ID_CIVIL_TextBlock_CSS_11 | 발파암 소단 폭 | Blast. berm W |
| ID_CIVIL_TextBlock_CSS_12 | 깎기부 소단 높이 | Cut berm H |
| ID_CIVIL_TextBlock_CSS_13 | 깎기부 소단 폭 | Cut berm W |
| ID_CIVIL_TextBlock_CSS_14 | 절대 소단 높이 | Max berm H |
| ID_CIVIL_TextBlock_CSS_15 | 소단 최소 높이 | Min berm H |
| ID_CIVIL_TextBlock_CSS_16 | 1차 경사 | 1st slope |
| ID_CIVIL_TextBlock_CSS_17 | 2차 경사 | 2nd slope |
| ID_CIVIL_TextBlock_CSS_18 | 3차 경사 | 3rd slope |
| ID_CIVIL_TextBlock_CSS_19 | 4차 경사 | 4th slope |
| ID_CIVIL_TextBlock_CSS_20 | 5차 경사 | 5th slope |
| ID_CIVIL_TextBlock_CSS_21 | 1차 소단 폭 | 1st berm W |
| ID_CIVIL_TextBlock_CSS_22 | 2차 소단 폭 | 2nd berm W |
| ID_CIVIL_TextBlock_CSS_23 | 3차 소단 폭 | 3rd berm W |
| ID_CIVIL_TextBlock_CSS_24 | 4차 소단 폭 | 4th berm W |
| ID_CIVIL_TextBlock_CSS_25 | 5차 소단 폭 | 5th berm W |
| ID_CIVIL_TextBlock_CSS_26 | 쌓기 소단 높이 | Fill berm H |
| ID_CIVIL_TextBlock_CSS_27 | 쌓기 최소 높이 | Min fill H |
| ID_CIVIL_TextBlock_CSS_28 | 소단 경사(%) | Berm slope (%) |
| ID_CIVIL_TextBlock_CSS_29 | 측구 구조물 | Gutter structure |
| ID_CIVIL_TextBlock_DCG_01 | 상 | Top |
| ID_CIVIL_TextBlock_DCG_02 | 하 | Btm |
| ID_CIVIL_TextBlock_DCG_03 | 좌 | Left |
| ID_CIVIL_TextBlock_DCG_04 | 우 | Right |
| ID_CIVIL_TextBlock_DCG_05 | 횡단면도 축척 | Cross section scale |
| ID_CIVIL_TextBlock_DCG_06 | 간격(m) | Gap(m) |
| ID_CIVIL_TextBlock_DCG_07 | 선 축척 | L-scale |
| ID_CIVIL_TextBlock_DCG_08 | 주 레이어 | Layer |
| ID_CIVIL_TextBlock_DCG_09 | 보조 레이어 | Layer |
| ID_CIVIL_TextBlock_DCG_10 | 문자 글꼴 | Text style |
| ID_CIVIL_TextBlock_DCG_11 | 높이 | Height |
| ID_CIVIL_TextBlock_DCG_12 | 폭 | Width |
| ID_CIVIL_TextBlock_DCG_13 | 문자 레이어 | Layer |
| ID_CIVIL_TextBlock_DCON_01 | 레이어 분리 높이 기준 | Layer separation interval |
| ID_CIVIL_TextBlock_DCON_02 | 레이어 분리 머리말 | Layer name prefix |
| ID_CIVIL_TextBlock_DFB_01 | 표시 간격 | Interval |
| ID_CIVIL_TextBlock_DFB_02 | 주 눈금 개수: | Main scale |
| ID_CIVIL_TextBlock_DFB_03 | 보조 눈금 개수: | Sub scale |
| ID_CIVIL_TextBlock_DGR_01 | Grid 기준 | Grid criteria |
| ID_CIVIL_TextBlock_DGR_02 | 그리드 간격 | Grid interval |
| ID_CIVIL_TextBlock_DGR_03 | 문자 글꼴 | Text style |
| ID_CIVIL_TextBlock_DGR_04 | 높이 | H= |
| ID_CIVIL_TextBlock_DGR_05 | 폭 | W= |
| ID_CIVIL_TextBlock_DGR_06 | Offset X | Offset X= |
| ID_CIVIL_TextBlock_DGR_07 | Y | Y= |
| ID_CIVIL_TextBlock_DGR_08 | 소수점 | Decimals |
| ID_CIVIL_TextBlock_DIVD_01 | 분할 파일 이름 | File name format |
| ID_CIVIL_TextBlock_DIVD_02 | 파일 형식 | File Format |
| ID_CIVIL_TextBlock_DLG_01 | V 축척 | V-Scale : |
| ID_CIVIL_TextBlock_DLG_02 | Grid 세로 간격 | L-Spacing : |
| ID_CIVIL_TextBlock_DLG_03 | Grid 선 축척 | Line type scale |
| ID_CIVIL_TextBlock_DLS_01 | H 축척 | H Scale |
| ID_CIVIL_TextBlock_DLS_02 | V 축척 | V Scale |
| ID_CIVIL_TextBlock_DLS_03 | 곡선 길이 | Curve length |
| ID_CIVIL_TextBlock_DLS_04 | 문자 높이 | Text height |
| ID_CIVIL_TextBlock_DLS_05 | 소수 자리 | Decimal places |
| ID_CIVIL_TextBlock_DM_01 | 반복 횟수 | Repeat count |
| ID_CIVIL_TextBlock_DM_02 | 표시 길이 | Disp. length |
| ID_CIVIL_TextBlock_DM_03 | 문자 높이 | Text height |
| ID_CIVIL_TextBlock_DM_04 | 소수점 | Precision |
| ID_CIVIL_TextBlock_DM_05 | 문자 표시 | Text display |
| ID_CIVIL_TextBlock_DNL_01 | 갈매기 차선 간격 | Chevron spacing |
| ID_CIVIL_TextBlock_DP_01 | 관 종류 | Type |
| ID_CIVIL_TextBlock_DP_02 | 관경 | Diameter |
| ID_CIVIL_TextBlock_DP_03 | 보강 여부 | Reinforce |
| ID_CIVIL_TextBlock_DP_04 | 토피 | Earth cover |
| ID_CIVIL_TextBlock_DP_05 | 스케일 | Scale |
| ID_CIVIL_TextBlock_DP_06 | Hidden 선 축척 | Hidden line scale |
| ID_CIVIL_TextBlock_DP_07 | 레이어 설정 | Layer settings |
| ID_CIVIL_TextBlock_DRL_01 | 스케일 | Scale |
| ID_CIVIL_TextBlock_DRL_02 | 버림 두께 | Blind thick. (m) |
| ID_CIVIL_TextBlock_DSLO_01 | 사면 종류 | Slope Type |
| ID_CIVIL_TextBlock_DSLO_02 | 표시 간격 | Interval |
| ID_CIVIL_TextBlock_DSLO_03 | 쌓기부 레이어 | Fill layer |
| ID_CIVIL_TextBlock_DSLO_04 | 깎기부 레이어 | Cut layer |
| ID_CIVIL_TextBlock_DSLO_05 | 주 눈금 간격 : | Main interval |
| ID_CIVIL_TextBlock_DSLO_06 | 보조 눈금 개수 : | Sub scale count |
| ID_CIVIL_TextBlock_DSLO_07 | 주 등분 | Main Division |
| ID_CIVIL_TextBlock_DSLO_08 | 보조 등분 | Sub Division |
| ID_CIVIL_TextBlock_DSTA_01 | 표기 형식 | Format |
| ID_CIVIL_TextBlock_DSTA_02 | 시작 측점 | Start STA. |
| ID_CIVIL_TextBlock_DSTA_03 | 측점 간격 | Interval |
| ID_CIVIL_TextBlock_DSTA_04 | 주 측점 | Major |
| ID_CIVIL_TextBlock_DSTA_05 | 보조 측점 | Minor |
| ID_CIVIL_TextBlock_DSTA_06 | 측점 선의 길이 | Tick length |
| ID_CIVIL_TextBlock_DSTA_07 | 선형 Offset | Text offset |
| ID_CIVIL_TextBlock_DSTA_08 | 문자 글꼴 | Text style |
| ID_CIVIL_TextBlock_DSTA_09 | 높이 | H = |
| ID_CIVIL_TextBlock_DSTA_10 | 폭 | W = |
| ID_CIVIL_TextBlock_DSTA_11 | 정체인 소수점 | Decimals(STA) |
| ID_CIVIL_TextBlock_DSTA_12 | 종점 소수점 | Decimals(EP) |
| ID_CIVIL_TextBlock_DTA_01 | 변화 구간표시 | Trans. display |
| ID_CIVIL_TextBlock_DTA_02 | 변화 구간 길이 | Trans. length(m) |
| ID_CIVIL_TextBlock_DTA_03 | 변화 시점 폭 | Start width(m) |
| ID_CIVIL_TextBlock_DTA_04 | 변화 종점 폭 | End width(m) |
| ID_CIVIL_TextBlock_DTA_05 | 방향 기준 | Direction ref. |
| ID_CIVIL_TextBlock_DTA_06 | AT 길이 | Approach L(m) |
| ID_CIVIL_TextBlock_DTA_07 | BT 길이 | Bay L(m) |
| ID_CIVIL_TextBlock_DTA_08 | 중앙분리대 폭 | Median width(m) |
| ID_CIVIL_TextBlock_DTA_09 | 대기차로 폭 | Storage width(m) |
| ID_CIVIL_TextBlock_DTA_10 | 대기분리대 폭 | Separator w.(m) |
| ID_CIVIL_TextBlock_DTA_11 | 차로폭 1 | Lane width 1 |
| ID_CIVIL_TextBlock_DTA_12 | 차로폭 2 | Lane width 2 |
| ID_CIVIL_TextBlock_DTA_13 | 차로폭 3 | Lane width 3 |
| ID_CIVIL_TextBlock_DTA_14 | 차로폭 4 | Lane width 4 |
| ID_CIVIL_TextBlock_DTA_15 | 차로폭 5 | Lane width 5 |
| ID_CIVIL_TextBlock_DTA_16 | 차로폭 6 | Lane width 6 |
| ID_CIVIL_TextBlock_DTA_17 | 계산간격(m) | Interval(m) |
| ID_CIVIL_TextBlock_DVB2_01 | 설치 이격 거리 | Installation spacing |
| ID_CIVIL_TextBlock_DWC_01 | 설치 형태 | Type |
| ID_CIVIL_TextBlock_DWC_02 | 설치 방향 | Alignment |
| ID_CIVIL_TextBlock_DWC_03 | 스케일 | Scale |
| ID_CIVIL_TextBlock_DWC_04 | 횡단보도 폭 | Crosswalk width |
| ID_CIVIL_TextBlock_DWC_05 | 도색 두께 | Marking width (B) |
| ID_CIVIL_TextBlock_DWC_06 | 도색 사이 간격 | Marking gap factor |
| ID_CIVIL_TextBlock_DWC_07 | 양방향 사이 간격 | Median spacing |
| ID_CIVIL_TextBlock_DWC_08 | 배 | x (B) |
| ID_CIVIL_TextBlock_EM_01 | 사칙연산 | Arithmetic |
| ID_CIVIL_TextBlock_EM_02 | 시작값 | Starting value |
| ID_CIVIL_TextBlock_FEL_01 | EL 표시 설정 | EL Display Mode |
| ID_CIVIL_TextBlock_FEL_02 | 지시선 길이 | Leader length |
| ID_CIVIL_TextBlock_FEL_03 | 가로선 길이 | Line length |
| ID_CIVIL_TextBlock_FEL_05 | 스케일 | Scale |
| ID_CIVIL_TextBlock_FEL_06 | 문자 높이 | Height |
| ID_CIVIL_TextBlock_FEL_07 | 소수점 | Precision |
| ID_CIVIL_TextBlock_FEL_08 | 머리말 | Prefix |
| ID_CIVIL_TextBlock_FEL_09 | 꼬리말 | Suffix |
| ID_CIVIL_TextBlock_FINDLEVEL_02 | 문자높이 | Text (H) |
| ID_CIVIL_TextBlock_FINDLEVEL_03 | 소수자리 | Decimals |
| ID_CIVIL_TextBlock_FINDLEVEL_04 | 머리말 | Prefix |
| ID_CIVIL_TextBlock_FINDLEVEL_05 | 꼬리말 | Suffix |
| ID_CIVIL_TextBlock_FINDLEVEL_06 | 소수자리 | Decimal places |
| ID_CIVIL_TextBlock_FINDLEVEL_07 | 길이 : 문자 높이 X | Length = Text height x |
| ID_CIVIL_TextBlock_FINDLEVEL_08 | 지시선 각도 | Leader angle |
| ID_CIVIL_TextBlock_FLM_01 | 측점 구분 | Find mode |
| ID_CIVIL_TextBlock_FLM_02 | H 축척 | H-Scale |
| ID_CIVIL_TextBlock_FLM_03 | V 축척 | V-Scale |
| ID_CIVIL_TextBlock_FLM_04 | 표시선 길이 | Marker length |
| ID_CIVIL_TextBlock_FLM_05 | 표기 형식 | Format |
| ID_CIVIL_TextBlock_FLM_06 | 시작 거리 | Start sta. |
| ID_CIVIL_TextBlock_FLM_07 | 측점 간격 | Interval |
| ID_CIVIL_TextBlock_FLM_08 | 문자 높이 | Text height |
| ID_CIVIL_TextBlock_FLM_09 | 소수 자리 | Precision |
| ID_CIVIL_TextBlock_FW_01 | 선 레이어 | Leader |
| ID_CIVIL_TextBlock_FW_02 | 문자 레이어 | Text |
| ID_CIVIL_TextBlock_FW_03 | 문자 높이 | Height |
| ID_CIVIL_TextBlock_FW_04 | 문자 폭 | Width |
| ID_CIVIL_TextBlock_FW_05 | 소수점 | Precision |
| ID_CIVIL_TextBlock_FW_06 | 머리말 | Prefix |
| ID_CIVIL_TextBlock_FW_07 | 꼬리말 | Suffix |
| ID_CIVIL_TextBlock_FW_08 | 지시선 길이 | L-Scale |
| ID_CIVIL_TextBlock_FW_09 | 스케일 | Scale |
| ID_CIVIL_TextBlock_GEL_01 | 스케일 | Scale |
| ID_CIVIL_TextBlock_GEL_02 | EL 표시 문자 | Prefix |
| ID_CIVIL_TextBlock_GEL_03 | 소수점 | Precision |
| ID_CIVIL_TextBlock_GEL_04 | 문자 높이 | Text height |
| ID_CIVIL_TextBlock_GEL_05 | EL 표시 설정 | Measure Method |
| ID_CIVIL_TextBlock_GEL_06 | 문자 레이어 | Text |
| ID_CIVIL_TextBlock_GEL_07 | 점 레이어 | Point |
| ID_CIVIL_TextBlock_GRP_01 | 측점 표기 형식 | Station Format |
| ID_CIVIL_TextBlock_GRP_02 | 선형 시작 거리 | Starting station |
| ID_CIVIL_TextBlock_GRP_03 | 종단 측점 간격 | Station interval |
| ID_CIVIL_TextBlock_GRP_04 | 종단 H 축척: | H-Scale : |
| ID_CIVIL_TextBlock_GRP_05 | 종단 V 축척: | V-Scale : |
| ID_CIVIL_TextBlock_GRP_06 | 표 한 칸 높이 | Band height |
| ID_CIVIL_TextBlock_GRP_07 | 지반고 소수 자리 | Ground EL Precision |
| ID_CIVIL_TextBlock_GRP_08 | 표 문자 높이 | Text height |
| ID_CIVIL_TextBlock_GRP_09 | 표 타이틀 문자 높이 | Title text height |
| ID_CIVIL_TextBlock_GRP_10 | 표와 문자 간격 | Text offset |
| ID_CIVIL_TextBlock_GSE_01 | 측점 구분 | Station division |
| ID_CIVIL_TextBlock_GSE_02 | 시작 거리 | Starting distance |
| ID_CIVIL_TextBlock_GSE_03 | 측점 간격 | Station spacing |
| ID_CIVIL_TextBlock_GSE_04 | H 축척 | H scale |
| ID_CIVIL_TextBlock_GSE_05 | V 축척 | V scale |
| ID_CIVIL_TextBlock_GSE_06 | 소수 자리 | Decimal place |
| ID_CIVIL_TextBlock_GSE_08 | 표시선 길이 | Marking line length |
| ID_CIVIL_TextBlock_GSE_09 | 표시 문자 높이 | Marking text height |
| ID_CIVIL_TextBlock_HEVTT_01 | 문자 글꼴 | Text style |
| ID_CIVIL_TextBlock_HEVTT_02 | 높이 | H = |
| ID_CIVIL_TextBlock_HEVTT_03 | 폭 | W = |
| ID_CIVIL_TextBlock_HEVTT_04 | 정렬 | Alignment |
| ID_CIVIL_TextBlock_HEVTT_06 | 소수점 | Precis. |
| ID_CIVIL_TextBlock_HPTT_01 | 문자 글꼴 | Text style |
| ID_CIVIL_TextBlock_HPTT_02 | 높이 | H = |
| ID_CIVIL_TextBlock_HPTT_03 | 폭 | W = |
| ID_CIVIL_TextBlock_HPTT_04 | 정렬 | Align |
| ID_CIVIL_TextBlock_HPTT_05 | X 이격 거리 | X offset |
| ID_CIVIL_TextBlock_HPTT_06 | Y 이격 거리 | Y offset |
| ID_CIVIL_TextBlock_HPTT_07 | 문자 소수자리 | Decimals |
| ID_CIVIL_TextBlock_IM_01 | 시작값 | Stat value |
| ID_CIVIL_TextBlock_IM_02 | 증분값 | Increment |
| ID_CIVIL_TextBlock_LAYER | 레이어 | Layer |
| ID_CIVIL_TextBlock_PL_01 | 수직선 길이 | Line length |
| ID_CIVIL_TextBlock_SLL_01 | 도면 축척 | Scale |
| ID_CIVIL_TextBlock_SLL_02 | 경사 종류 | Grade |
| ID_CIVIL_TextBlock_SLL_03 | 사각 적용 | Apply skew |
| ID_CIVIL_TextBlock_SLL_04 | H Scale : | H : |
| ID_CIVIL_TextBlock_SLL_05 | V Scale : | V : |
| ID_CIVIL_TextBlock_SLT_01 | 적용 방식 | Method |
| ID_CIVIL_TextBlock_SLT_02 | 문자 글꼴 | Text style |
| ID_CIVIL_TextBlock_SLT_03 | 문자 높이 | H = |
| ID_CIVIL_TextBlock_SLT_04 | 소수점 | Decimals |
| ID_CIVIL_TextBlock_SLT_06 | H 축척 | H scale |
| ID_CIVIL_TextBlock_SLT_07 | V 축척 | V scale |
| ID_CIVIL_TextBlock_STT_01 | 측점 간격 | Interval |
| ID_CIVIL_TextBlock_STT_02 | 축척 | Scale |
| ID_CIVIL_TextBlock_STT_03 | 시작 거리 | Start STA |
| ID_CIVIL_TextBlock_STT_04 | 선 | Line |
| ID_CIVIL_TextBlock_STT_05 | 문자 | Text |
| ID_CIVIL_TextBlock_STT_06 | 높이 | Height |
| ID_CIVIL_TextBlock_STT_07 | 폭 | Width |
| ID_CIVIL_TextBlock_STT_08 | 소수점 | Preci. |
| ID_CIVIL_TextBlock_STT_10 | 측점 표기 소수 자리수 | Round |
| ID_CIVIL_TextBlock_STT_11 | 중심 ~ 인출 시작 거리 | Leader start offset |
| ID_CIVIL_TextBlock_STT_12 | 중심 ~ 인출 끝 거리 | Leader end offset |
| ID_CIVIL_TextBlock_STT_13 | 직경 | Dot dia. |
| ID_CIVIL_TextBlock_TAP_01 | 문자 글꼴 | Text style |
| ID_CIVIL_TextBlock_TAP_02 | 높이 | H = |
| ID_CIVIL_TextBlock_TAP_03 | 폭 | W = |
| ID_CIVIL_TextBlock_TAP_04 | 지정 점과 문자 이격 거리 | Offset from point |
| ID_CIVIL_TextBlock_TAP_05 | X 이격 거리 | X offset |
| ID_CIVIL_TextBlock_TAP_06 | Y 이격 거리 | Y offset |
| ID_CIVIL_TextBlock_TAP_07 | 문자 소수자리 | Decimals |
| ID_CIVIL_TextBlock_TAP_08 | 문자 레이어 | Text Layer |
| ID_CIVIL_TextBlock_TAP_09 | 점 레이어 | Point Layer |
| ID_CIVIL_TextBlock_TC_01 | 반지름 | Radius |
| ID_CIVIL_TextBlock_TL_01 | 접선 길이 | Line length |
| ID_CIVIL_TextBlock_TTP1_01 | X 이격 거리 | X offset |
| ID_CIVIL_TextBlock_TTP1_02 | Y 이격 거리 | Y offset |
| ID_CIVIL_TextBlock_TTP1_03 | 레이어 | Layer |
| ID_CIVIL_TextBlock_VE_01 | 문자 삽입점부터 점 검색 범위 | Search range from text insertion point |
| ID_CIVIL_TextBlock_VE_02 | X 검색 범위 | X Range |
| ID_CIVIL_TextBlock_VE_03 | Y 검색 범위 | Y Range |
| ID_CIVIL_TextBlock_WCZ_01 | 문자 높이 | Text height |
| ID_CIVIL_TextBlock_WCZ_02 | 문자 폭 | Text width |
| ID_CIVIL_TextBlock_WCZ_03 | 소수 자리 | Decimals |
| ID_CIVIL_TextBlock_WCZ_04 | 문자 글꼴 | Text style |
| ID_CIVIL_TextBlock_ZVL_01 | 그리는 객체 선택 | Select drawing object |
| ID_CIVIL_TL_Obj | 접선을 그릴 객체 | Select object to draw a tangent line |
| ID_CIVIL_TL_Point | 접선을 그릴 점 지정 | Specify the point on which to draw a tangent line |
| ID_CIVIL_TLC_CircleArc | 원 또는 호를 선택해 주십시오. | Select a circle or arc. |
| ID_CIVIL_TLC_Contain | 원 안에 원이 포함될 수 없습니다. | Circle cannot contain circle. |
| ID_CIVIL_TLC_First | 접선을 그릴 첫 번째 원, 호 선택 | Select the first circle, arc to draw tangent line |
| ID_CIVIL_TLC_Out | 선택한 점이 원 밖에 있어야 합니다. | The selected point must be outside the circle. |
| ID_CIVIL_TLC_Over | 두 원이 겹쳐있을 수 없습니다. | Two circles cannot overlap. |
| ID_CIVIL_TLC_Same | 같은 객체를 선택할 수 없습니다. | You cannot select the same object. |
| ID_CIVIL_TLC_Second | 접선을 그릴 두 번째 원, 호 선택 | Select the second circle, arc to draw tangent line |
| ID_CIVIL_TLC_Select | 접선을 그릴 원, 호 선택 | Select Circle or Arc to draw a tangent line |
| ID_CIVIL_TLC_SelectPoint | 접선을 그릴 점 지정 | Select Point to draw a tangent line |
| ID_CIVIL_TTP_Create | 개의 점이 생성됨 | points created. |
| ID_CIVIL_TTP_Select | Z값 점을 생성할 문자 선택 | Select texts to create Z value points |
| ID_CIVIL_VD_Ditch | v형 측구를 생성한다. | Create a v-type Ditch. |
| ID_CIVIL_VE_Change | 개의 점 Z값 변경 완료 | points completed changing Z values. |
| ID_CIVIL_VE_No | 근처에 점 객체가 없습니다. | No point objects nearby. |
| ID_CIVIL_VE_Select | 주변 점의 Z값을 생성할 문자 선택 | Select texts to create Z values for nearby points |
| ID_CIVIL_VG_Draw | 종단면도에 모눈(Grid)을 그린다. | Draw Grid on the ProfileDWG. |
| ID_CIVIL_VG_End | 종단 최하단 Grid 끝점을 선택해주세요. | Select Grid endpoint of the bottom of Vertical Alignment. |
| ID_CIVIL_VG_First | 첫번째 점을 선택해주세요. | Select the first point. |
| ID_CIVIL_VG_Top | 종단 상단점을 선택해주세요. | Select the top point of the Vertical Alignment. |
| ID_COM_Button_Apply | 적용 | Apply |
| ID_COM_Button_Close | 닫기 | Close |
| ID_COM_Button_Draw | 그리기 | Draw |
| ID_COM_Button_Ok | 확인 | Apply |
| ID_COM_Button_Reset | 초기화 | Reset |
| ID_COM_Button_Run | 실행 | Apply |
| ID_COM_RadioButton_BySelection | 선택 순 | By Pick |
| ID_COMMAND_ATTEDIT_NOTSELECTION | 블록 참조를 선택하세요. 객체가 속성블록이 아닙니다. | Select a block reference. Object is not a attribute block. |
| ID_COMMAND_CREATEBLOCK_EXPLODEINSERT | 삽입 시 블록 분해 허용 | Allow block exploding on insertion |
| ID_COMMAND_CREATEBLOCK_HASATTRIBUTE | 속성 문자가 포함된 블록은 속성 블록으로 생성됩니다. | A block containing attribute definition is created as a attribute block. |
| ID_COMMAND_CREATEBLOCK_HASLOCKEDLAYER | 선택된 객체 중 하나 이상이 잠긴 도면층에 있습니다. 잠금 해제된 도면층의 객체만 블록에 포함됩니다. | One or more of the selected objects are in a locked layer. Only objects from unlocked layers are included in the block. |
| ID_COMMAND_CREATEBLOCK_UNIT | 블록 단위 | Block unit |
| ID_COMMAND_CREATEBLOCK_VIEWPORTSCALE | 뷰포트 축척에 맞게 스케일 조정 | Scale to match viewport scale |
| ID_COMMAND_HATCHSETBOUNDARY_CANCEL | 경계에 해치를 적용할 수 없습니다. | Unable to apply hatch to boundary |
| ID_COMMAND_HATCHSETBOUNDARY_DELETEBOUNDARY | 선택한 라인워크를 지우시겠습니까? | Do you want to clear the selected linework? |
| ID_COMMAND_HATCHSETBOUNDARY_SELECTHATCH | 해치 객체 선택 | Select Hatch Object |
| ID_COMMAND_HATCHSETBOUNDARY_SELECTNEWBOUNDARY | 새 경계에 사용할 객체 선택 | Select object to use for new boundary |
| ID_COMMAND_HATCHSETORIGIN_NEWORIGIN | 새 해치 원점 선택 | Select new hatch origin |
| ID_COMMAND_MREDO_HASNONEREDO | 복구할 명령이 없습니다. | There are no commands to recover. |
| ID_COMMAND_MREDO_INPUTMREDO | 복구할 명령의 수 입력 또는 | Enter the number of commands to recover or |
| ID_COMMAND_MREDO_MREDOALL | 전체({0}) | All({0}) |
| ID_COMMAND_MREDO_MREDOLAST | 최종({0}) | Last({0}) |
| ID_COMMAND_NO | 아니오 | No |
| ID_COMMAND_YES | 예 | Yes |
| ID_DIM_APDT_Bottom | 아래 문자 | Bottom text |
| ID_DIM_APDT_BottomOpt | 아래문자(B) | BottomText(B) |
| ID_DIM_APDT_Center | 중앙 문자 | Center text |
| ID_DIM_APDT_CenterOpt | 중앙(C) | CenterText(C) |
| ID_DIM_APDT_ChangeOpt | 문자 변경 옵션 | Text Change Options |
| ID_DIM_APDT_ChangeText | 문자변경(O) | ChangeText(O) |
| ID_DIM_APDT_Input | 입력(X) | Input(X) |
| ID_DIM_APDT_InputBottom | 아래 문자 값을 입력 | Input bottom text |
| ID_DIM_APDT_InputBottomOpt | 하단입력(B) | InputBottom(B) |
| ID_DIM_APDT_InputCenter | 중앙 문자 값을 입력 | Input center text |
| ID_DIM_APDT_InputLeft | 머리말 문자 값을 입력 | Input left text |
| ID_DIM_APDT_InputOr | 입력된 값을 입력 또는 | Input the entered value or |
| ID_DIM_APDT_InputRight | 꼬리말 문자 값을 입력 | Input right text |
| ID_DIM_APDT_InputTop | 위 문자 값을 입력 | Input top text |
| ID_DIM_APDT_InputTopOpt | 상단입력(T) | InputTop(T) |
| ID_DIM_APDT_Left | 머리말 문자 | Left text |
| ID_DIM_APDT_LeftOpt | 머리말(L) | LeftText(L) |
| ID_DIM_APDT_Mark | 선택한 치수의 위, 아래, 머리말, 꼬리말에 입력한 문자를 표기합니다. | Mark text on the top, bottom, left, right of the selected dimension. |
| ID_DIM_APDT_Modify | 값을 수정할 치수 선택 | Select dimension to modify value |
| ID_DIM_APDT_Option | 치수 문자표기 옵션 | Dimension text mark options |
| ID_DIM_APDT_Right | 꼬리말 문자 | Right text |
| ID_DIM_APDT_RightOpt | 꼬리말(R) | RightText(R) |
| ID_DIM_APDT_Top | 위 문자 | Top text |
| ID_DIM_APDT_TopOpt | 위문자(T) | TopText(T) |
| ID_DIM_CDS_Area | 치수선 축척 변경 영역 선택 | Select dimension line scale change area |
| ID_DIM_CDS_Base | 기준 축척 값 입력 | Enter base scale value |
| ID_DIM_CDS_Change | 축척 비율 변경 값 입력 | Enter scale value to change |
| ID_DIM_CDS_Multi | 여러 스타일을 동시에 수정할 수 없습니다. | Cannot modify multiple styles at the same time. |
| ID_DIM_CheckBox_DEXL_01 | 원점에서 간격 0으로 설정 | Set origin offset to '0' |
| ID_DIM_CT_Area | 변경 영역 선택 | Select change area |
| ID_DIM_DDM_ChangeLine | 치수 값의 줄을 바꾸시겠습니까? | Do you want to change the line of dimension value? |
| ID_DIM_DDM_Divide | 등분치수 형태로 바꿔준다. | Change dimension to divided dimension. |
| ID_DIM_DDM_Invalid | 잘못된 치수 문자 입력입니다. 치수 측정값으로 대체합니다. | Invalid dimension text input. Replaced with dimension measurement. |
| ID_DIM_DDM_Length | 치수값을 나눌 길이를 입력하세요. | Enter length to divide dimension value. |
| ID_DIM_DDM_Modify | 값을 수정할 치수 선택 | Select dimension to modify value |
| ID_DIM_DEX_Align | 치수 보조선의 시작점을 정렬한다. | Align start point of the extension line. |
| ID_DIM_DEX_Select | 보조선 시작점을 변경할 치수 객체 선택 | Select dimension object to change extension line start point |
| ID_DIM_DEX_Start | 치수 보조선 시작점 위치 지정 | Select start point of extension line |
| ID_DIM_DEXL_Apply | 적용(O) | Apply(O) |
| ID_DIM_DEXL_Change | 보조선 길이 변경 시 | When you change the length of the auxiliary line |
| ID_DIM_DEXL_ChangeAuxiliaryMove | 보조선 길이 변경할 때 이동 | Move when changing the auxiliary line length |
| ID_DIM_DEXL_Enter | 보조선 길이 입력 | Enter the length of the auxiliary line |
| ID_DIM_DEXL_Move | 치수선 이동 | Move dimension line |
| ID_DIM_DEXL_NoGap | 간격없음(X) | No spacing(X) |
| ID_DIM_DEXL_Offset | 치수 보조선 시작점 간격 띄우기 | Offset Witness Line Start Point |
| ID_DIM_DEXL_Select | 치수 객체 선택 | Select a dimension object |
| ID_DIM_DEXL_Start | 보조선 시작 점 이동 | Move auxiliary line start point |
| ID_DIM_DID_Divide | 선택한 치수를 선택점을 기준으로 나눕니다. | Divide dimension by the selected point. |
| ID_DIM_DID_Point | 치수를 나눌 점 지정 | Select point to divide dimension |
| ID_DIM_DID_Select | 나눌 치수 선택 | Select dimension to divide |
| ID_DIM_DID_Support | 지원하지 않는 치수입니다. | Not supported dimension. |
| ID_DIM_DIDE_Divide | 선택한 치수를 등분합니다. | Divide the selected dimension equally. |
| ID_DIM_DIDE_Division | 등분 개수 입력 | Enter number of division |
| ID_DIM_DIDE_Select | 나눌 치수 선택 | Select dimension to divide |
| ID_DIM_DIDE_Support | 지원하지 않는 치수입니다. | Not supported dimension. |
| ID_DIM_DIJ_Merge | 선택된 치수를 합칩니다. | Merge the selected dimensions. |
| ID_DIM_DIJ_Select | 합치려는 치수 객체 선택 | Select dimension objects to be joined |
| ID_DIM_DIMBREAK_Intersection | 교차부의 치수선을 끊는다. | Disconnect the dimension line at the intersection. |
| ID_DIM_DIS_Adjust | 선형 치수 또는 각도 치수 사이의 간격을 조정합니다. | Adjust the space between linear or angular dimensions. |
| ID_DIM_DIS_Base | 기본 치수 선택 | Select base dimension |
| ID_DIM_DIS_Or | 간격 입력 또는 | Enter space distance or |
| ID_DIM_DIS_Space | 간격을 둘 치수 선택 | Select dimension to be spaced |
| ID_DIM_DLP_Explain | 치수 선의 위치를 변경한다. | Change the position of the dimension line. |
| ID_DIM_DLP_Pick | 치수 선 기준점 위치 지정 | Select a base point for dimension line |
| ID_DIM_DLP_Select | 치수 선을 정렬할 치수 객체 선택 | Select dimension objects to align dimension lines |
| ID_DIM_EXL_Base | 기준 객체를 선택하세요. | Select criteria object. |
| ID_DIM_EXL_Mark | 기준 객체에 맞게 지시선 위치를 수정합니다. | Modify the leader position to according to criteria object. |
| ID_DIM_EXL_Modify | 값을 수정할 지시선 선택 | Select leader to modify value |
| ID_DIM_GroupName_01 | 설정 | Settings |
| ID_DIM_MDIM_Aligned | 정렬치수입력(A) | AlignedDimension(A) |
| ID_DIM_MDIM_D1 | 거리1 입력 | Input Distance 1 |
| ID_DIM_MDIM_D2 | 거리2 입력 | Input Distance 2 |
| ID_DIM_MDIM_D3 | 거리3 입력 | Input Distance 3 |
| ID_DIM_MDIM_DimDirection | 치수 입력 방향 지정 | Specify dimension input direction |
| ID_DIM_MDIM_Point | 치수 점 지정(완료 후 엔터) | Select dimension point(Enter After Completion) |
| ID_DIM_MDIM_Rotated | 회전치수입력(R) | RotatedDimension(R) |
| ID_DIM_MDTH_Direction | 방향 선택 | Select direction |
| ID_DIM_MDTH_Left | 좌(L) | Left(L) |
| ID_DIM_MDTH_Location | 문자 위치를 좌, 우로 이동할 치수 선택 | Select dimension to move text location left or right |
| ID_DIM_MDTH_Move | 치수 문자를 좌, 우로 이동합니다. | Move dimension text left or right. |
| ID_DIM_MDTH_Right | 우(R) | Right(R) |
| ID_DIM_MDTO_Explain | 치수 문자를 외측으로 이동합니다. | Moves the dimension texts outward. |
| ID_DIM_MDTO_Select | 문자 위치를 외각으로 이동할 치수 선택 | Select dimensions to move position of texts to the outer side |
| ID_DIM_MDTV_Location | 문자 위치를 위, 아래로 이동할 치수 선택 | Select dimension to move text location up or down |
| ID_DIM_MDTV_Move | 치수 문자를 위, 아래로 이동합니다. | Move dimension text up or down. |
| ID_DIM_POLY_Cannot | 그릴 수 없는 지점입니다. | Cannot be drawn at this point. |
| ID_DIM_POLY_Merged | 전체 치수선 위치 선택 | Select point to draw merged dimension |
| ID_DIM_POLY_Polyline | 폴리선을 선택하시오. | Select polyline. |
| ID_DIM_POLY_Select | 치수를 그릴 폴리선을 선택하시오. | Select polyline to draw dimension. |
| ID_DIM_POLY_Start | 치수 보조선 발 시작위치 선택 | Select start point to draw extension line |
| ID_DIM_POLY_Unclosed | 닫히지 않은 폴리선을 선택하시오. | Select unclosed polyline. |
| ID_DIM_POLY_Vertex | 정점별 치수선 위치 선택 | Select point to draw dimension line per vertex |
| ID_DIM_QDIM_GenerateDim | 치수를 생성할 객체들을 선택하세요. | Select object to generate dimensions for. |
| ID_DIM_QDIM2_Distance | 전체 치수와 치수 사이 거리 입력 | Input distance from dimension to merged dimension |
| ID_DIM_QDIM2_DistanceOpt | 거리(D) | Distance(D) |
| ID_DIM_QDIM2_Intersect | 두 점을 잇는 선과 교차하는 부분의 치수를 생성한다. | Produce dimension of the intersection of line connecting two points. |
| ID_DIM_RadioButton_CHDIMSCALE_01 | 새 스타일로 적용 | Apply to new style |
| ID_DIM_RadioButton_CHDIMSCALE_02 | 속성값에서 변경 | Change in properties |
| ID_DIM_RadioButton_DEXL_01 | 보조선 시작 점 고정, 치수선 이동 | Fix origin, move dimline |
| ID_DIM_RadioButton_DEXL_02 | 치수선 고정, 보조선 시작 점 이동 | Fix dimline, move origin |
| ID_DIM_RadioButton_MDT_01 | 무조건 치수 문자의 위치를 이동 | Force move Dim text position |
| ID_DIM_RadioButton_MDT_02 | \x로 옮길 수 있는건 \x 사용 | Use＼X for applicable text segments |
| ID_DIM_RadioButton_POLYDIM_01 | 정점별 치수 생성 | Individual+Overall |
| ID_DIM_RadioButton_POLYDIM_02 | 전체 치수만 생성 | Overall only |
| ID_DIM_RDT_Move | 치수 문자를 제자리로 이동합니다. | Move dimension text back to its original place. |
| ID_DIM_RDT_Restore | 문자 위치를 원래대로 설정할 치수 선택 | Select dimension to restore text location |
| ID_DIM_RDV_Change | 치수 문자를 측정값으로 변경합니다. | Change dimension text to measurement. |
| ID_DIM_RDV_Restore | 치수 값을 원래대로 복원할 치수 선택 | Select dimension to restore dimension value |
| ID_DIM_SLT_Leader | 지시선 선택 | Select leader |
| ID_DIM_SLT_Separate | 지시선의 선과 문자를 분리한다. | Separate line and text of the leader. |
| ID_DIM_TextBlock_CHDIMSCALE_01 | 변경 유형 | Change type |
| ID_DIM_TextBlock_DEXL_01 | 이동 대상 선택 | Select Moving Object |
| ID_DIM_TextBlock_MDT_01 | 문자 이동 방식 | Text Moving Method |
| ID_DIM_TextBlock_POLYDIM_01 | 생성 방식 | Dimension Creation |
| ID_DRAW_CheckBox_CIM_IsCivil | X,Y 좌표 바꿔서 가져오기 | Swap X, Y |
| ID_DRAW_CheckBox_CIM_IsInsert | 정점 객체 삽입 | Insert Object |
| ID_DRAW_CheckBox_CIM_IsRotate | 문자를 현재 뷰에 맞춰 회전 | Rotate text to view |
| ID_DRAW_CheckBox_CIM_IsText1 | 문자1 표기 | Text 1 Notation |
| ID_DRAW_CheckBox_CIM_IsText2 | 문자2 표기 | Text 2 Notation |
| ID_DRAW_CheckBox_CIM_IsZ | Z값 표기 | Z-Value Notation |
| ID_DRAW_CheckBox_DRAR_01 | 화살표 선 두께 지정 | Specify arrow line thickness |
| ID_Draw_CheckBox_JMP_Arc | 호 | Arc |
| ID_Draw_CheckBox_JMP_Circle | 원 | Circle |
| ID_Draw_CheckBox_JMP_Ellipse | 타원 | Ellipse |
| ID_Draw_CheckBox_JMP_Line | 선 | Line |
| ID_Draw_CheckBox_JMP_Polyline | 폴리선 | PolyLine |
| ID_Draw_CheckBox_JMP_Spline | 스플라인 | Spline |
| ID_Draw_CheckBox_LBT_01 | 명령 실행 중 등분 개수 입력 | Enter segment number while dividing the space |
| ID_DRAW_CheckBox_PEL_01 | 시작점 오프셋 | Spacing at start point |
| ID_DRAW_CUTCSE_LineCenter | 중심선 | Center line |
| ID_DRAW_CUTCSE_LineContinuous | 실선 | Continuous line |
| ID_DRAW_CUTCSE_LineDouble | 이중선 | Double |
| ID_DRAW_CUTCSE_LineDoubleDisplay | 이중선(D) | Double(D) |
| ID_DRAW_CUTCSE_LineSingle | 단일선 | Single |
| ID_DRAW_CUTCSE_LineSingleDisplay | 단일선(S) | Single(S) |
| ID_DRAW_CUTCSE_LineSpacingRange | 선 간격이 범위를 벗어납니다. | Line spacing is out of range. |
| ID_DRAW_CUTCSE_SelectDoubleSpacing | 이중선 간격 지정 | Select double line spacing |
| ID_DRAW_CUTCSE_SelectMarkLength | 마크 길이 지정 | Select mark length |
| ID_DRAW_CUTCSE_SelectSingleDouble | 이중선 지정 | Select Single line or Double line |
| ID_DRAW_CUTCYL_ReverseDirection | 방향을 반대로 지정할까요? | Do you want to reverse the direction? |
| ID_DRAW_DRAWARROW_LineDrawArrow | 화살표를 그릴 선 | Line to draw arrow |
| ID_DRAW_DRAWCURVEUSINGTANGENT_BaseOne | 첫 번째 기준 선 선택 | Select the first baseline |
| ID_DRAW_DRAWCURVEUSINGTANGENT_BaseTwo | 두 번째 기준 선 선택 | Select the second baseline |
| ID_DRAW_GroupName_01 | 기본 설정 | General Settings |
| ID_DRAW_GroupName_02 | 그리기 설정 | Draw Settings |
| ID_DRAW_IMPORTCOORDINATES_BlockError | 블록 오류 | Block Error |
| ID_DRAW_IMPORTCOORDINATES_BlockNotExist | 해당 블록이 존재하지 않습니다. | The block does not exist. |
| ID_DRAW_IMPORTCOORDINATES_ColumnSelected | 개의 열을 선택하셨습니다. | Columns have been selected. |
| ID_DRAW_IMPORTCOORDINATES_CoordinateError | 좌표 오류 | Coordinate Error |
| ID_DRAW_IMPORTCOORDINATES_CoordinateSelectionError | 좌표 선택 오류 | Coordinate selection Error |
| ID_DRAW_IMPORTCOORDINATES_CurrentOption | 현재 옵션 | Current Options |
| ID_DRAW_IMPORTCOORDINATES_ObjectImport | 가져올 대상 | Object to import |
| ID_DRAW_IMPORTCOORDINATES_SelectColumn | 개의 열을 선택해주세요. | Columns should be selected. |
| ID_DRAW_IMPORTCOORDINATES_SelectCoordinate | 1개 이상의 좌표 정보를 선택해주세요. | Select one or more coordinate information. |
| ID_DRAW_IMPORTCOORDINATES_SelectionInvalid | 선택 범위에 올바르지 않은 값이 있습니다. | Selection range contains invalid values. |
| ID_DRAW_IMPORTCOORDINATES_SelectRange | 영역 선택 | Select range |
| ID_DRAW_IMPORTCOORDINATES_SelectRangeCoordinate | 좌표가 입력된 셀 번위 선택 | Select a range of cells with coordinates entered |
| ID_DRAW_IMPORTCOORDINATES_TextError | 문자 오류 | Text Error |
| ID_DRAW_IMPORTCOORDINATES_TXYColumn | 문자, X, Y (3열) | Text, X, Y (3Columns) |
| ID_DRAW_IMPORTCOORDINATES_TXYZColumn | 문자, X, Y, Z (4열) | Text, X, Y, Z (4Columns) |
| ID_DRAW_IMPORTCOORDINATES_TXYZTColumn | 문자1, X, Y, Z, 문자2 (5열) | Text, X, Y, Z, Text2 (5Columns) |
| ID_DRAW_IMPORTCOORDINATES_XYColumn | X, Y (2열) | X, Y (2Columns) |
| ID_DRAW_IMPORTCOORDINATES_XYZColumn | X, Y, Z (3열) | X, Y, Z (3Columns) |
| ID_DRAW_JMP_Base | 점프선을 그릴 기준 선 선택 | Select a base line to draw a jump line. |
| ID_DRAW_JMP_Circle | 원이 끝점을 벗어나 그릴 수 없습니다. | The circle cannot be drawn outside the endpoint. |
| ID_DRAW_JMP_Convex | 볼록 방향 설정 | Set convex orientation |
| ID_DRAW_JMP_Not | 그릴 게 없습니다. | There's nothing to draw. |
| ID_DRAW_JMP_Pick | 점프선 삽입점 선택 | Select a point to insert the jump line |
| ID_DRAW_JMP_Ref | 점프선을 참고할 객체들 선택 | Select objects to reference a jump line. |
| ID_DRAW_JMP_Select | 선, 호, 폴리선, 스플라인만 선택이 가능합니다. | Select lines, arcs, polylines, or splines. |
| ID_DRAW_JMP_Unable | 반지름이 커서 그릴 수 없습니다. | Unable to draw due to large radius. |
| ID_DRAW_LBTLINE_DivisionCount | 등분 개수 | Division count |
| ID_DRAW_LBTLINE_EnterDivisionCount | 등분 개수 입력 | Enter division count |
| ID_DRAW_LBTLINE_SelectedPolylineVertexThree | 선택한 객체 중 정점이 3개 이상인 폴리선이 있습니다. | Selected objects have polyline with three or more vertexes. |
| ID_DRAW_LBTLINE_SelectTwoLine | 두개의 선을 선택해 주십시오. | Select two lines. |
| ID_DRAW_LBTLINE_SelectTwoLineObject | 두 개의 선 객체 선택 | Select two line objects |
| ID_DRAW_MPERPENDICULAR_BasePointDistance | 기준점거리 | BasePointDistance |
| ID_DRAW_MPERPENDICULAR_BasePointDistanceDisplay | 기준점거리(S) | BasePointDistance(S) |
| ID_DRAW_MPERPENDICULAR_Block | 블록 | Block |
| ID_DRAW_MPERPENDICULAR_BlockDisplay | 블록(B) | Block(B) |
| ID_DRAW_MPERPENDICULAR_BlockNotExist | 입력하신 이름의 블록이 도면에 없습니다. | There is no block with that name in the drawing. |
| ID_DRAW_MPERPENDICULAR_Both | 양쪽 | Both |
| ID_DRAW_MPERPENDICULAR_BothDisplay | 양쪽(B) | Both(B) |
| ID_DRAW_MPERPENDICULAR_DistanceCriteria | 거리기준 | DistanceCriteria |
| ID_DRAW_MPERPENDICULAR_DistanceCriteriaDisplay | 거리기준(D) | DistanceCriteria(D) |
| ID_DRAW_MPERPENDICULAR_DistanceOut | 입력한 거리가 객체를 벗어납니다. | The distance entered is out of object. |
| ID_DRAW_MPERPENDICULAR_EditedObject | 표기객체 | Marked Object |
| ID_DRAW_MPERPENDICULAR_EditedObjectDisplay | 표기객체(E) | Marked Object(E) |
| ID_DRAW_MPERPENDICULAR_EnterBlockScale | 블록 축척 입력 | Enter block scale |
| ID_DRAW_MPERPENDICULAR_EnterLength | 길이 입력 | Enter length |
| ID_DRAW_MPERPENDICULAR_EnterRotaionValue | 회전값 입력 | Enter rotation value |
| ID_DRAW_MPERPENDICULAR_FromPreviousPoint | 이전 점으로부터 | from the previous point |
| ID_DRAW_MPERPENDICULAR_IncrementalDistance | 증분거리 | IncrementalDistance |
| ID_DRAW_MPERPENDICULAR_IncrementalDistanceDisplay | 증분거리(I) | IncrementalDistance(I) |
| ID_DRAW_MPERPENDICULAR_Left | 왼쪽 | Left |
| ID_DRAW_MPERPENDICULAR_LeftDisplay | 왼쪽(L) | Left(L) |
| ID_DRAW_MPERPENDICULAR_Length | 길이 | Length |
| ID_DRAW_MPERPENDICULAR_LengthDisplay | 길이(T) | Length(T) |
| ID_DRAW_MPERPENDICULAR_Line | 선 | Line |
| ID_DRAW_MPERPENDICULAR_LineDisplay | 선(L) | Line(L) |
| ID_DRAW_MPERPENDICULAR_Location | 위치 | Location |
| ID_DRAW_MPERPENDICULAR_LocationDisplay | 위치(C) | Location(C) |
| ID_DRAW_MPERPENDICULAR_NoBlockCurrent | 현재 도면에 블록 객체가 없습니다. | No block objects in the current drawing. |
| ID_DRAW_MPERPENDICULAR_NotBlockSelect | 선택한 객체는 블록이 아닙니다. 블록을 선택해주세요. | The selected object is not a block. Select a block. |
| ID_DRAW_MPERPENDICULAR_Right | 오른쪽 | Right |
| ID_DRAW_MPERPENDICULAR_RightDisplay | 오른쪽(R) | Right(R) |
| ID_DRAW_MPERPENDICULAR_Rotation | 회전 | Rotation |
| ID_DRAW_MPERPENDICULAR_RotationDisplay | 회전(R) | Rotation(R) |
| ID_DRAW_MPERPENDICULAR_Scale | 축척 | Scale |
| ID_DRAW_MPERPENDICULAR_ScaleDisplay | 축척(S) | Scale(S) |
| ID_DRAW_MPERPENDICULAR_SelectBasePoint | 기준점 지정 | Select base point |
| ID_DRAW_MPERPENDICULAR_SelectBlockPlace | 선분 위에 배치할 블록 선택 | Select blocks to place above line |
| ID_DRAW_MPERPENDICULAR_SelectDistanceCriteria | 거리기준 선택 | Select distance criteria |
| ID_DRAW_MPERPENDICULAR_SelectEditedObject | 표기객체 선택 | Select marked object |
| ID_DRAW_MPERPENDICULAR_SelectLinePlace | 을 배치할 선분 객체 선택 |  is to be placed, select line object |
| ID_DRAW_MPERPENDICULAR_SelectLocation | 위치 선택 | Select location |
| ID_DRAW_MPERPENDICULAR_SelectPointDirection | 진행할 방향으로 아무 점이나 지정 | Select any point in the direction you want to proceed |
| ID_DRAW_MULTIINSERTDWG_Click | 블록 입력 시작점 클릭 | Click the block enter start point |
| ID_DRAW_MULTIINSERTDWG_Not | 불러온 도면이 없습니다 | No drawings were loaded |
| ID_DRAW_MULTIINSERTDWG_Select | 개의 도면을 선택했습니다. | Selected the drawing. |
| ID_DRAW_RadioButton_CCE_01 | 실선 | Continuous |
| ID_DRAW_RadioButton_CCE_02 | 중심선 | Center |
| ID_DRAW_RadioButton_CCE_03 | 단일선 | Single line |
| ID_DRAW_RadioButton_CCE_04 | 이중선 | Double line |
| ID_DRAW_RadioButton_CIM_Block | 블록 | Block |
| ID_DRAW_RadioButton_CIM_Circle | 원 | Circle |
| ID_DRAW_RadioButton_CIM_Point | 점 | Dot |
| ID_DRAW_RadioButton_CIM_TargetTXY | 문자, X, Y (3열) | Text, X, Y |
| ID_DRAW_RadioButton_CIM_TargetTXYZ | 문자, X, Y, Z (4열) | Text, X, Y, Z |
| ID_DRAW_RadioButton_CIM_TargetTXYZT | 문자1, X, Y, Z, 문자2 (5열) | Text 1, X, Y, Z, Text 2 |
| ID_DRAW_RadioButton_CIM_TargetXY | X, Y (2열) | X,Y |
| ID_DRAW_RadioButton_CIM_TargetXYZ | X, Y, Z (3열) | X, Y, Z |
| ID_DRAW_RadioButton_DCUT_01 | 원(Circle) | Circle |
| ID_DRAW_RadioButton_DCUT_02 | 호(Arc) | Arc |
| ID_DRAW_RadioButton_DRAR_01 | 선 양쪽 끝 모두 화살표 | Create at both ends |
| ID_DRAW_RadioButton_DRAR_02 | 선 한쪽 끝만 화살표 | Create at one end |
| ID_DRAW_RadioButton_DRAR_03 | 단일 선택 | Single |
| ID_DRAW_RadioButton_DRAR_04 | 다중 선택 | Multiple |
| ID_DRAW_RadioButton_DRAR_05 | 선 시작 | Line start |
| ID_DRAW_RadioButton_DRAR_06 | 선 끝 | Line end |
| ID_Draw_RadioButton_JMP_01 | 기준선과 교차하는 선 선택해 그리기 | Draw by selecting lines intersecting the baseline |
| ID_Draw_RadioButton_JMP_02 | 기준선과 교차되는 모든 선에 그리기 | Draw on all intersections with the baseline |
| ID_Draw_RadioButton_JMP_03 | 선택한 한 점에 그리기 | Draw on a selected point |
| ID_DRAW_RadioButton_PEL_01 | 증분 거리 | Incremental |
| ID_DRAW_RadioButton_PEL_02 | 기준점부터의 거리 | from ref. point |
| ID_DRAW_RadioButton_PEL_03 | 선 | Line |
| ID_DRAW_RadioButton_PEL_04 | 블록 | Block |
| ID_DRAW_RadioButton_PEL_05 | 선(Line) | Line |
| ID_DRAW_RadioButton_PEL_06 | 폴리선 | PolyLine |
| ID_DRAW_RadioButton_PEL_07 | 양쪽 | Both |
| ID_DRAW_RadioButton_PEL_08 | 왼쪽 | Left |
| ID_DRAW_RadioButton_PEL_09 | 오른쪽 | Right |
| ID_DRAW_REVCLOUDWITHOPTION_PointNeeded | 포인트가 필요합니다. 다시 시도하십시오. | A point is needed. Please try again. |
| ID_DRAW_RHB_SelectHatchBoundary | 경계를 재생성할 해치 선택 | Select Hatch to regenerate boundaries |
| ID_DRAW_SKETCHWITHOPTION_UnableRecognizeEntry | 항목을 인식할 수 없습니다. 다시 시도하십시오. | Unable to recognize entry. Please try again. |
| ID_DRAW_SUPERHATCH_AreaNotDetected | 영역이 감지되지 않습니다. | Area not detected. |
| ID_DRAW_SUPERHATCH_ClickInsideBorder | 경계선 내부 점 클릭 | Click a point inside the border |
| ID_DRAW_SUPERHATCH_EnterXscale | X축척 비율 입력 | Enter the X-scale ratio |
| ID_DRAW_SUPERHATCH_EnterYscale | Y축척 비율 입력 | Enter the Y-scale ratio |
| ID_DRAW_SUPERHATCH_HatchBlockImage | 블록 및 이미지로 해치넣기 | Draw Hatch with Block or Image |
| ID_DRAW_SUPERHATCH_NotValidObject | 올바른 객체가 아닙니다. | Invalid object. |
| ID_DRAW_SUPERHATCH_ScaleChange | 스케일 변경 | Change scale |
| ID_DRAW_SUPERHATCH_SelectedArea | 이 영역은 이미 지정되었습니다. | This area has already been selected. |
| ID_DRAW_SUPERHATCH_SelectInsertionPoint | 삽입점 지정 | Select the insertion point |
| ID_DRAW_SUPERHATCH_SelectRotationAngle | 회전 각도 지정 | Select rotation angle |
| ID_DRAW_TextBlock_CCE_01 | 선 스타일 | Line |
| ID_DRAW_TextBlock_CCE_02 | 절단선 표시 형식 | Cutting Line |
| ID_DRAW_TextBlock_CCE_03 | 마크 길이 설정 | Mark Length |
| ID_DRAW_TextBlock_CCE_04 | 이중선 간격 | Line Spacing |
| ID_DRAW_TextBlock_CIM_Diameter | 지름 | Diameter |
| ID_DRAW_TextBlock_CIM_Digit | 소수점 | Precision |
| ID_DRAW_TextBlock_CIM_IsPolyline | 좌표 연결선 | Line Type |
| ID_DRAW_TextBlock_CIM_Target | 가져올 대상 | Import data from EXCEL (columns) |
| ID_DRAW_TextBlock_CIM_TextHeight | 크기 | Text height |
| ID_DRAW_TextBlock_DRAR_01 | 화살촉 모양 | Arrowhead Shape |
| ID_DRAW_TextBlock_DRAR_02 | 화살표 크기 | Arrow Size |
| ID_DRAW_TextBlock_DRAR_04 | 길이 | Length |
| ID_DRAW_TextBlock_DRAR_05 | 폭 | Width |
| ID_DRAW_TextBlock_DRAR_06 | 화살표 선 두께 | Arrow line thickness |
| ID_DRAW_TextBlock_DRAR_07 | 방식 | Select options |
| ID_DRAW_TextBlock_DRAR_08 | 위치 | Insert arrow |
| ID_Draw_TextBlock_JMP_02 | 설정 | Settings |
| ID_Draw_TextBlock_JMP_03 | 교차선 필터 | Intersection line filter |
| ID_Draw_TextBlock_JMP_Radius | 반지름 | Radius |
| ID_DRAW_TextBlock_Layer | 레이어 | Layer |
| ID_Draw_TextBlock_LBT_02 | 등분 개수 입력 | Set segment number |
| ID_DRAW_TextBlock_PEL_01 | 선 표기 설정 | Line Notation Settings |
| ID_DRAW_TextBlock_PEL_02 | 블록 표기 설정 | Block Notation Settings |
| ID_DRAW_TextBlock_PEL_03 | 거리 기준 | Distance |
| ID_DRAW_TextBlock_PEL_04 | 표기 객체 | Object |
| ID_DRAW_TextBlock_PEL_05 | 선 종류 | Line type |
| ID_DRAW_TextBlock_PEL_06 | 선 길이 | Length |
| ID_DRAW_TextBlock_PEL_07 | 선 표시 | Display |
| ID_DRAW_TextBlock_PEL_08 | 축척 | Scale |
| ID_DRAW_TextBlock_PEL_09 | 회전 | Rotate |
| ID_EDIT_ADDPVE_PickWhereVertexAdded | 폴리선에 정점이 추가될 부분 지정 | Select where vertices will be added to the polyline |
| ID_EDIT_ADDPVE_SelectLinePolyline | 선, 폴리선을 선택해 주십시오. | Select line, polyline. |
| ID_EDIT_ADDPVE_SelectPolylineAddVertex | 정점을 추가할 폴리선 선택 | Select polyline to add vertices |
| ID_EDIT_ALLZVALUECHANGE_AllPointType | 객체 모든점 이동 | Move all points of the object |
| ID_EDIT_ALLZVALUECHANGE_CenterPoint | 중심점 | Center Point |
| ID_EDIT_ALLZVALUECHANGE_CenterPointType | 객체 중심점 이동 | Move the object center point. |
| ID_EDIT_ALLZVALUECHANGE_EnterZValue | Z값 입력 | Enter the Z Value |
| ID_EDIT_ALLZVALUECHANGE_NoSelectObject | 선택 대상 객체가 없습니다 | There are no objects to be selected |
| ID_EDIT_ALLZVALUECHANGE_SelectAllObjects | 모든객체선택(A) | Select all objects(A) |
| ID_EDIT_ALLZVALUECHANGE_SelectObjectToChangeZValue | Z값을 변경할 객체 선택 혹은 | Select the object to change the Z value or |
| ID_EDIT_ALLZVALUECHANGE_Total | 개 | Total Count |
| ID_EDIT_BREAKALL_NoIntersection | 선택한 객체사이에 교차점이 없습니다. | No intersections between the selected objects. |
| ID_EDIT_BREAKALL_NoObjectToBreak | 선택된 끊을 객체가 없습니다. | No selected objects to break. |
| ID_EDIT_BREAKALL_SelectObjectBreakIntersection | 교차점에서 끊을 객체 선택 | Select objects to break at intersection |
| ID_EDIT_BREINDIST_BreakDistanceCurrent | 끊을 거리 입력 (현재 전체 길이 | Enter break distance (Current full length |
| ID_EDIT_BREINDIST_BreakDistanceRemaining | 끊을 거리 입력 (남은 전체 길이 | Enter break distance (Remaining full length |
| ID_EDIT_BREINDIST_LessLength | 객체 길이보다 작게 입력해 주십시오. | Enter less than object length. |
| ID_EDIT_BREINDIST_NoObjectToBreak | 선택된 끊을 객체가 없습니다. | No selected objects to break. |
| ID_EDIT_BREINDIST_SelectAlignmentObject | 선, 폴리선, 호, 타원, 스플라인 등 선형 객체를 선택해 주십시오. | Select alignment objects such as lines, polylines, arcs, ellipses, splines, etc. |
| ID_EDIT_BREINDIST_StartPoint | 객체의 끊기 시작할 부분 | Start point to break object |
| ID_EDIT_BREIPOINT_NoIntersection | 선택한 객체사이에 교차점이 없습니다. | No intersections between the selected objects. |
| ID_EDIT_BREIPOINT_NoObjectToBreak | 선택된 끊을 객체가 없습니다. | No selected object to break. |
| ID_EDIT_BREIPOINT_NoSelectedBaselineObject | 선택된 기준 객체가 없습니다. | No selected object for baseline. |
| ID_EDIT_BREIPOINT_SelectObjectBreakBaseline | 끊을 기준이 되는 객체 선택 | Select object for break baseline |
| ID_EDIT_BREIPOINT_SelectObjectBreakIntersection | 기준선과 교차점에서 끊을 객체 선택 | Select object to break at intersection with baseline |
| ID_EDIT_BREIPOINT_SelectObjectIntersecting | 교차하는 객체를 선택해주세요. | Select intersecting object. |
| ID_EDIT_BREONEPOINT_PickBreakPoint | 끊을 점 지정 | Select break point |
| ID_EDIT_BREONEPOINT_SelectObjects | 호, 선, 폴리선, 스플라인, Ray, Xline 객체를 선택해 주십시오. | Select Arc, Line, Polyline, Spline, Ray, Xline object. |
| ID_EDIT_BREONEPOINT_SelectObjectToBreak | 한점에서 끊을 객체 선택 | Select object to break at one point |
| ID_EDIT_BREONEPOINT_StartEndSame | 시작점과 끝점이 같습니다. | Start point and End point are the same. |
| ID_EDIT_BRESDIST_BreakDistance | 지정 거리마다 끊을 객체 선택 | Select objects to break every specified distance |
| ID_EDIT_BRESDIST_NoObjectToBreak | 선택된 끊을 객체가 없습니다. | No selected objects to break. |
| ID_EDIT_BRESPOINT_CanNotBreakOnePoint | 닫힌 객체는 한 점에서 끊을 수 없습니다. | Closed objects can not be broken at one point. |
| ID_EDIT_BRESPOINT_NoSelectPoint | 선택한 점이 없습니다. | No points were selected. |
| ID_EDIT_BRESPOINT_NotSelectable | 선택 가능한 객체가 아닙니다. | Not a selectable object. |
| ID_EDIT_BRESPOINT_NotViable | 실행 가능한 객체가 아닙니다. | Not a executable object. |
| ID_EDIT_BRESPOINT_SelectBreakMultiplePoints | 여러 점에서 끊을 객체 선택 | Select objects to break at multiple points |
| ID_EDIT_BRESPOINT_SelectBreakPoint | 끊을 점 지정 | Select break point |
| ID_EDIT_Button_DDE_01 | 모두 선택 | Select all |
| ID_EDIT_Button_DDE_02 | 모두 해제 | Deselect all |
| ID_EDIT_Button_DDE_03 | 선택 | Select |
| ID_EDIT_Button_DDE_04 | 생성 | Make |
| ID_EDIT_Button_FSE_01 | 기준 객체 선택 | Select ref object |
| ID_EDIT_Button_FSE_02 | 객체 종류 선택 | Select entity type |
| ID_EDIT_Button_FSE_03 | 패턴 선택 | Select pattern |
| ID_EDIT_Button_XYB_01 | 참조 | Ref. |
| ID_EDIT_CHCOLOR_ColorInput | 색상 입력 (0 ~ 256) | Enter Color (0 to 256) |
| ID_EDIT_CHCOLOR_EnterInteger | 0과 256사이의 정수를 입력해 주세요. | Enter an integer between 0 and 256. |
| ID_EDIT_CHCOLOR_SelectObjectChangeColor | 색상을 변경할 객체 선택 | Select object to change color |
| ID_EDIT_CheckBox_BRA_01 | 끊은 후, 길이가 여유 간격 이하 삭제 | Delete segments shorter than offset distance |
| ID_EDIT_CheckBox_BRA_02 | 끊은 후, 길이가 지정 값 이하 삭제 | Delete segments shorter than |
| ID_EDIT_CheckBox_BRA_03 | Z 값이 다르면 끊지 않음 | Do not break if Z values differ |
| ID_EDIT_CheckBox_BRD_01 | 끊은 후, 길이가 여유 간격 이하 삭제 | Delete segments shorter than offset distance |
| ID_EDIT_CheckBox_BRD_02 | 끊은 후, 길이가 지정 값 이하 삭제 | Delete segments shorter than |
| ID_EDIT_CheckBox_BRE_01 | 끊은 후, 길이가 여유 간격 이하 삭제 | Delete segments shorter than offset distance |
| ID_EDIT_CheckBox_BRE_02 | 끊은 후, 길이가 지정 값 이하 삭제 | Delete segments shorter than |
| ID_EDIT_CheckBox_BRI_01 | 끊은 후, 길이가 여유 간격 이하 삭제 | Delete segments shorter than offset distance |
| ID_EDIT_CheckBox_BRI_02 | 끊은 후, 길이가 지정 값 이하 삭제 | Delete segments shorter than |
| ID_EDIT_CheckBox_BRI_03 | Z 값이 다르면 끊지 않음 | Do not break if Z values differ |
| ID_EDIT_CheckBox_CPL_01 | 변환 후, 원본 삭제 | Delete source object after conversion |
| ID_EDIT_CheckBox_CPL_02 | 변환 후, 레이어 변경 | Change layer after conversion |
| ID_EDIT_CheckBox_DDE_01 | 점 | Point |
| ID_EDIT_CheckBox_DDE_02 | 원 | Circle |
| ID_EDIT_CheckBox_DDE_03 | 속성 | Attribute |
| ID_EDIT_CheckBox_DDE_04 | 해치 | Hatch |
| ID_EDIT_CheckBox_DDE_05 | 선 | Line |
| ID_EDIT_CheckBox_DDE_06 | 호 | Arc |
| ID_EDIT_CheckBox_DDE_07 | 블록 | Block |
| ID_EDIT_CheckBox_DDE_08 | 치수 | Dim |
| ID_EDIT_CheckBox_DDE_09 | 폴리선 | Pline |
| ID_EDIT_CheckBox_DDE_10 | 문자 | Text |
| ID_EDIT_CheckBox_DDE_11 | 솔리드 | Solid |
| ID_EDIT_CheckBox_DDE_12 | 레이어가 다른 경우 제외 | Ignore different layers |
| ID_EDIT_CheckBox_DDE_13 | Z 값이 다른 경우 제외 | Ignore different Z-values |
| ID_EDIT_CheckBox_DDE_14 | 삭제 하지 않고 레이어만 변경 | Change layer instead of deleting |
| ID_EDIT_CheckBox_EC_01 | 블록 내부 객체 | Objects inside block |
| ID_EDIT_CheckBox_EC_02 | 해치 제외 | Hatch |
| ID_EDIT_CheckBox_EC_03 | 특정 레이어 개체 제외 | Specific layer objects |
| ID_EDIT_CheckBox_EES_01 | 선 | Line |
| ID_EDIT_CheckBox_EES_02 | 폴리선 | PolyLine |
| ID_EDIT_CheckBox_EES_03 | 호 | Arc |
| ID_EDIT_CheckBox_EES_04 | 원 | Circle |
| ID_EDIT_CheckBox_EES_05 | 타원 | Ellipse |
| ID_EDIT_CheckBox_EES_06 | 블록 | Block |
| ID_EDIT_CheckBox_EES_07 | 문자 | Text |
| ID_EDIT_CheckBox_FSE_01 | 모두 | All |
| ID_EDIT_CheckBox_FSE_02 | 선택 완료 후 창 다시 보이기 | Redisplay dialog after selection |
| ID_EDIT_CheckBox_FSE_03 | 현재 선택 세트에 추가 | Add to current selection set |
| ID_EDIT_CheckBox_FSE_04 | 같은 값 찾을 때 소수 범위 오차 적용 | Apply decimal tolerance for matches |
| ID_EDIT_CheckBox_FSE_05 | 선 종류 | L-type |
| ID_EDIT_CheckBox_FSE_06 | 선 축척 | L-scale |
| ID_EDIT_CheckBox_FSE_07 | 선 가중치 | L-weight |
| ID_EDIT_CheckBox_FSE_08 | 투명도 | Transp. |
| ID_EDIT_CheckBox_FSE_09 | Z 값 | Z-value |
| ID_EDIT_CheckBox_FSE_10 | 폴리선 두께 | Global width |
| ID_EDIT_CheckBox_FSE_11 | 반지름 | Radius |
| ID_EDIT_CheckBox_FSE_12 | 해치 패턴 | Pattern |
| ID_EDIT_CheckBox_FSE_13 | 객체 길이 | Object length |
| ID_EDIT_CheckBox_FSE_14 | 문자 스타일 | Text style |
| ID_EDIT_CheckBox_FSE_15 | 문자 높이 | Text height |
| ID_EDIT_CheckBox_FSE_16 | 문자 폭 | Text width |
| ID_EDIT_CheckBox_FSE_17 | 문자 내용 | Text content |
| ID_EDIT_CheckBox_FSE_18 | 문자 회전 | Text rotation |
| ID_EDIT_CheckBox_FSE_19 | 문자 개수 | Text length |
| ID_EDIT_CheckBox_FSE_20 | 공백 포함 | Count blank |
| ID_EDIT_CheckBox_FSE_21 | 치수 스타일 | Dim style |
| ID_EDIT_CheckBox_FSE_22 | 치수 값 | Dim value |
| ID_EDIT_CheckBox_FSE_23 | 블록 이름 | Block name |
| ID_EDIT_CheckBox_FSE_24 | 블록 회전 | Bock rotation |
| ID_EDIT_CheckBox_FSE_25 | 블록 축척 | Block scale |
| ID_EDIT_CheckBox_OTL_01 | Offset 완료 후 현재 레이어로 변경 | Change to current layer |
| ID_EDIT_CheckBox_OTL_02 | Offset 선타입을 ByLayer로 변경 | Change line type to ByLayer |
| ID_EDIT_CheckBox_OTL_03 | Offset 완료 후 원본 삭제 | Delete origin after offset |
| ID_EDIT_CheckBox_OTP_01 | 변환 후, 원본 삭제 | Delete source object after conversion |
| ID_EDIT_CheckBox_OTP_02 | 변환 후, 레이어 변경 | Change layer after conversion |
| ID_EDIT_CheckBox_QSEL_01 | 점 | Point |
| ID_EDIT_CheckBox_QSEL_02 | 선 | Line |
| ID_EDIT_CheckBox_QSEL_03 | 폴리선 | PolyLine |
| ID_EDIT_CheckBox_QSEL_04 | 원 | Circle |
| ID_EDIT_CheckBox_QSEL_05 | 호 | Arc |
| ID_EDIT_CheckBox_QSEL_06 | 문자 | Text |
| ID_EDIT_CheckBox_QSEL_07 | 속성 | Properties |
| ID_EDIT_CheckBox_QSEL_08 | 블록 | Block |
| ID_EDIT_CheckBox_QSEL_09 | 솔리드 | Solid |
| ID_EDIT_CheckBox_QSEL_10 | 해치 | Hatch |
| ID_EDIT_CheckBox_QSEL_11 | 치수 | Dim |
| ID_EDIT_CheckBox_RF_01 | 회전 후, 이동 | Move after rotate |
| ID_EDIT_CheckBox_RZV_01 | 변경한 객체의 레이어 변경 | Change layer of modified object |
| ID_EDIT_CheckBox_XYB_01 | 삽입점 사용자가 직접 지정 | User specifies insertion point |
| ID_EDIT_CheckBox_XYB_02 | 변환 후, Explode 하지 않음 | Do not explode after conversion |
| ID_EDIT_CheckBox_ZTZ_01 | 선 | Line |
| ID_EDIT_CheckBox_ZTZ_02 | 폴리선 | PolyLine |
| ID_EDIT_CheckBox_ZTZ_03 | 호 | Arc |
| ID_EDIT_CheckBox_ZTZ_04 | 원 | Circle |
| ID_EDIT_CheckBox_ZTZ_05 | 타원 | Ellipse |
| ID_EDIT_CheckBox_ZTZ_06 | 블록 | Block |
| ID_EDIT_CheckBox_ZTZ_07 | 문자 | Text |
| ID_EDIT_CheckBox_ZTZ_08 | 치수 | Dimension |
| ID_EDIT_CheckBox_ZTZ_09 | 해치 | Hatch |
| ID_EDIT_CheckBox_ZTZ_10 | 스플라인 | Spline |
| ID_EDIT_ComboBox_FSE_Comparison_01 | = 같음 | = Same |
| ID_EDIT_ComboBox_FSE_Comparison_02 | <> 다름 | <> Other |
| ID_EDIT_ComboBox_FSE_Comparison_03 | > 큼 | > Larger |
| ID_EDIT_ComboBox_FSE_Comparison_04 | < 작음 | < Smaller |
| ID_EDIT_ComboBox_FSE_FilterTarget_01 | 도면 전체 | Entire drawing |
| ID_EDIT_ComboBox_FSE_FilterTarget_02 | 모형 | Model |
| ID_EDIT_ComboBox_FSE_FilterTarget_03 | 배치 | Layout |
| ID_EDIT_ComboBox_FSE_LineWeight_03 | 기본값 | Default |
| ID_EDIT_CPLINE_NotConverted | Polyline이 아닌 객체는 변환되지 않았습니다. | Non-Polyline objects are not converted. |
| ID_EDIT_CPLINE_SelectPolylineConvert | 변환할 폴리선 선택 | Select polyline to convert |
| ID_EDIT_DELETEDUPLICATEENTITIES_DuplicateObjectChange | 중복된 객체 변경/제거하였습니다 | Duplicate object(s) changed/removed |
| ID_EDIT_DELETEDUPLICATEENTITIES_Error | DDE 명령 처리 중 오류가 발생 하였습니다. | Error processing DDE command |
| ID_EDIT_DELETEDUPLICATEENTITIES_SelectAreaToDeleteDuplicateObjects | 중복 객체를 삭제할 영역 선택 | Select an area to delete duplicate objects |
| ID_EDIT_DELPVE_NoVertex3DPolyline | 선택한 3D 폴리선은 더 이상 삭제할 정점이 없습니다. | Selected 3D polyline no longer has vertex to delete. |
| ID_EDIT_DELPVE_NoVertexPolyline | 선택한 폴리선은 더 이상 삭제할 정점이 없습니다. | Selected polyline no longer has vertex to delete. |
| ID_EDIT_DELPVE_PickPoint | 정점을 삭제할 점 지정 | Select point to delete vertex |
| ID_EDIT_DELPVE_SelectPolyline | 폴리선을 선택해 주십시오. | Select a polyline. |
| ID_EDIT_DELPVE_SelectPolylineDeleteVertex | 정점을 삭제할 폴리선 선택 | Select a polyline to delete vertex |
| ID_EDIT_DIRECTIONREVERSE_Complete | 완료 | Complete |
| ID_EDIT_DIRECTIONREVERSE_SelectChangeDirection | 방향을 바꿀 선, 폴리선, 호 선택 | Select line, polyline, arc to change direction |
| ID_EDIT_EBBOUNDARY_DeleteCriteriaBoundary | 삭제 기준 경계(폴리선, 원, 타원) 객체 선택 | Select deletion criteria boundary (polyline, circle, ellipse) object |
| ID_EDIT_EBBOUNDARY_DeleteInOutBoundary | 경계 내, 외부 삭제 | Delete Inside, Outside boundary |
| ID_EDIT_EBBOUNDARY_Inside | 내부 | Inside |
| ID_EDIT_EBBOUNDARY_InsideDisplay | 내부(I) | Inside(I) |
| ID_EDIT_EBBOUNDARY_NoBoundaryObject | 경계가 되는 객체가 선택되지 않았습니다. | No boundary objects were selected. |
| ID_EDIT_EBBOUNDARY_NoSupport | 잘린 타원은 지원하지 않습니다. | No support for Truncated ellipse  |
| ID_EDIT_EBBOUNDARY_Outside | 외부 | Outside |
| ID_EDIT_EBBOUNDARY_OutsideDisplay | 외부(O) | Outside(O) |
| ID_EDIT_EBBOUNDARY_SelectBoundaryObject | 경계가 되는 폴리선, 원, 타원을 선택해 주십시오. | Select a polyline, circle, or ellipse for boundary. |
| ID_EDIT_EBBOUNDARY_SelectCut | 잘라내는 부분 선택 | Select a part to be cut |
| ID_EDIT_EDITENTITYSCALE_SelectEntity | 객체 선택 | Select Entity |
| ID_EDIT_EXTENDTRIM_DeleteInOutBoundary | 객체 기준 잘라내기 | Cut based on the object criteria |
| ID_EDIT_EXTENDTRIM_NoBoundary | 경계가 되는 객체가 선택되지 않았습니다. | No boundary objects were selected. |
| ID_EDIT_EXTENDTRIM_NoSupport | 잘린 타원은 지원하지 않습니다. | No support for Truncated ellipse  |
| ID_EDIT_EXTENDTRIM_PickPointInsert | 삽입할 점 지정 | Select point to insert |
| ID_EDIT_EXTENDTRIM_SelectBoundary | 경계가 되는 폴리선, 원, 타원을 선택해 주십시오. | Select a polyline, circle, or ellipse for boundary. |
| ID_EDIT_EXTENDTRIM_SelectClosedObject | 경계 외부를 잘라낼 닫힌 객체(폴리선, 원, 타원) 선택 | Select closed objects (polylines, circles, ellipses) to clip outside the boundary |
| ID_EDIT_EXTENDTRIM_SolidException | 결과물을 옮기거나 복사하는 경우, 블록으로 만든 후 실행하세요. | If you perform to move or copy the result, run after to make block |
| ID_EDIT_EXTR_CheckBox_01 | 블록으로 삽입 | Insert as block |
| ID_EDIT_EXTR_CheckBox_02 | 실행 반복 | Repeat execution |
| ID_EDIT_EXTR_RadioButton_01 | 객체 | Select object  |
| ID_EDIT_EXTR_RadioButton_02 | 영역 지정 | Rectangular area |
| ID_EDIT_EXTR_RadioButton_03 | 무시 | Ignore |
| ID_EDIT_EXTR_RadioButton_04 | 폭파 후 XClip | Explode and XClip |
| ID_EDIT_EXTR_RadioButton_06 | 폭파 후 Trim | Explode and Trim |
| ID_EDIT_EXTR_RadioButton_07 | 현재 도면에 삽입 | Insert into current drawing |
| ID_EDIT_EXTR_RadioButton_08 | 자르기 | Boundary Clip |
| ID_EDIT_EXTR_RadioButton_10 | 파일로 저장 | Save to file |
| ID_EDIT_EXTR_TextBlock_01 | 자를 방식 | Trim Method  |
| ID_EDIT_EXTR_TextBlock_02 | 경계 : | Select Boundary : |
| ID_EDIT_EXTR_TextBlock_03 | 솔리드 해치 : | Solid hatch : |
| ID_EDIT_EXTR_TextBlock_04 | 기타 해치 : | Other hatches : |
| ID_EDIT_EXTR_TextBlock_05 | 잘라낸 도면 설정 | Trimmed Drawing Settings |
| ID_EDIT_EXTR_TextBlock_06 | 저장 경로 : | Save path : |
| ID_EDIT_EXTR_TextBlock_07 | 기타 설정 | Other Settings |
| ID_EDIT_FILTERSELECT_BtnSelect | 선택 | OK |
| ID_EDIT_FILTERSELECT_ErrorBlockRotation | 블록 회전 값 설정에 실패하였습니다. | Failed to set block rotation value. |
| ID_EDIT_FILTERSELECT_ErrorBlockScale | 블록 축척 값 설정에 실패하였습니다. | Failed to set block scale value. |
| ID_EDIT_FILTERSELECT_ErrorDecimalRange | 소수 범위 오차 적용 값 설정에 실패하였습니다. | Failed to set decimal range error applied value. |
| ID_EDIT_FILTERSELECT_ErrorDim | 치수 값 설정에 실패하였습니다. | Dimension value setting failed. |
| ID_EDIT_FILTERSELECT_ErrorLineScale | 선 축척 값 설정에 실패하였습니다. | Failed to set line scale value. |
| ID_EDIT_FILTERSELECT_ErrorPolylineThickness | 폴리선 두께 값 설정에 실패하였습니다. | Failed to set polyline thickness value. |
| ID_EDIT_FILTERSELECT_ErrorRadius | 반지름 값 설정에 실패하였습니다. | Failed to set radius value. |
| ID_EDIT_FILTERSELECT_ErrorTextCount | 문자 개수 값 설정에 실패하였습니다. | Failed to set text count value. |
| ID_EDIT_FILTERSELECT_ErrorTextHeight | 문자 높이 값 설정에 실패하였습니다. | Failed to set text height value. |
| ID_EDIT_FILTERSELECT_ErrorTextRotation | 문자 회전 값 설정에 실패하였습니다. | Failed to set text rotation value. |
| ID_EDIT_FILTERSELECT_ErrorTextWidth | 문자 폭 값 설정에 실패하였습니다. | Failed to set text width value. |
| ID_EDIT_FILTERSELECT_ErrorTransparency | 투명도 값 설정에 실패하였습니다. | Transparency value setting failed. |
| ID_EDIT_FILTERSELECT_ErrorZValue | Z 값 설정에 실패하였습니다. | Z value setting failed. |
| ID_EDIT_FILTERSELECT_FilterTargetObject | 필터 대상 객체 | Filter target object |
| ID_EDIT_FILTERSELECT_ListOfGrimiObjects | 그리미 객체 목록 | List of Grimi objects. |
| ID_EDIT_FILTERSELECT_SelectAllObjects | 모든 객체 선택 | Select all objects |
| ID_EDIT_FILTERSELECT_SelectClosedRegions | 폴리선, 원, 타원의 폐합된 영역 선택 | Select closed regions of polylines, circles, and ellipses |
| ID_EDIT_FILTERSELECT_SelectFilterTarget | 필터 대상 객체를 선택하세요. | Please select a filter target object. |
| ID_EDIT_FILTERSELECT_SelectObject | 객체 선택 | Select Object |
| ID_EDIT_FILTERSELECT_SelectOneEdge | 영역의 한쪽 모서리 선택 | Select one edge of the area |
| ID_EDIT_FILTERSELECT_SelectOppositeEdge | 반대쪽 모서리 선택 | Select opposite edge |
| ID_EDIT_GroupName_01 | 설정 | Settings |
| ID_EDIT_GroupName_02 | 선택 대상 객체 | Select Target Object |
| ID_EDIT_GroupName_03 | 제외 객체 설정 | Exclude Objects Setting |
| ID_EDIT_GroupName_04 | 다음으로 변환 | Conversion to |
| ID_EDIT_GroupName_05 | 삭제할 객체 | Object to Delete |
| ID_EDIT_GroupName_06 | 삭제 제외 설정 | Exclusions |
| ID_EDIT_GroupName_07 | 삭제 객체 변경 | Change Options |
| ID_EDIT_GroupName_08 | 중복 기준 | Coordinate-based Overlap Criteria |
| ID_EDIT_GroupName_09 | 잘라내는 부분 선택 | Select area to trim |
| ID_EDIT_GroupName_10 | 경계에서 잘라낼 수 없는 객체 처리 | Handling On-boundary Objects |
| ID_EDIT_GroupName_11 | 대상 설정 | Target Settings |
| ID_EDIT_GroupName_12 | 스케일 설정 | Scale Settings |
| ID_EDIT_GroupName_13 | 선택 유형 | Selection Type |
| ID_EDIT_GroupName_14 | 필터 기준 | Filter Criteria |
| ID_EDIT_GroupName_15 | 기타 옵션 | Other Options |
| ID_EDIT_GroupName_16 | 객체 일반 | General properties |
| ID_EDIT_GroupName_17 | 문자/치수/블록 | Text/Dimension/Block |
| ID_EDIT_GroupName_19 | 객체 선택 | Select Object |
| ID_EDIT_GroupName_20 | 선택 옵션 | Select options |
| ID_EDIT_GroupName_21 | 축척 설정 | Scale Settings |
| ID_EDIT_GroupName_22 | 객체 설정 | Object Settings |
| ID_EDIT_HIDEOBJECTS_SelectHideObject | 숨길 객체 선택 | Select an object to hide |
| ID_EDIT_ICO_BasePoint | 복사할 기준 점 지정 | Select base point to copy |
| ID_EDIT_ICO_Criteria | 증분복사 길이의 기준 선택 | Select criteria for incremental copy length |
| ID_EDIT_ICO_Direction | 복사 방향 점 지정 | Select copy direction point |
| ID_EDIT_ICO_Distance | 복사할 증분 거리 지정 | Specify incremental distance to copy |
| ID_EDIT_ICO_Length | 실제길이(D) | ActualLength(D) |
| ID_EDIT_ICO_Object | 증분 복사할 객체 선택 | Select object to incremental copy |
| ID_EDIT_ICO_Xaxis | X축길이(X) | XAxisLength(X) |
| ID_EDIT_ICO_YAxis | Y축길이(Y) | YAxisLength(Y) |
| ID_EDIT_INOFFSET_3DPolylineNotOffset | 3D 폴리선은 Offset할 수 없습니다. | 3D polylines cannot be offset. |
| ID_EDIT_INOFFSET_EnterOffsetDistance | Offset 증분 거리 입력  | Enter Offset incremental distance |
| ID_EDIT_INOFFSET_ObjectOffset | 증분 Offset할 객체 | Object to Incremental Offset |
| ID_EDIT_INOFFSET_PickPointOffset | Offset할 쪽으로 점 지정 | Select point to offset |
| ID_EDIT_INOFFSET_ValuePositive | 값은 반드시 양수여야 함. | Value must be positive. |
| ID_EDIT_ISOLATEOBJECTS_SelectHideExcludeObject | 숨기기 제외 객체 선택 | Select Hide Exclude Object |
| ID_EDIT_MJOIN_EnterMaximumSeparation | 최대 이격거리 값을 입력하시오 | Enter a maximum separation value. |
| ID_EDIT_MJOIN_LessObject | 해당되는 객체가 2개 미만입니다. | Less than two corresponding objects. |
| ID_EDIT_MJOIN_SelectObjectConnect | 연결할 객체를 선택하시오 | Select object to connect to. |
| ID_EDIT_OFFSETTOLAYER_DirectionPoint | 방향점 지정 | Specify Direction Point |
| ID_EDIT_OFFSETTOLAYER_EnterBothOffsetDistance | 양쪽 Offset 증분 거리 입력 | Enter both Offset Incremental Distance |
| ID_EDIT_OFFSETTOLAYER_OffsetCountOfNumber | Offset 개수를 숫자로 입력해 주십시오. | Please enter the number of offsets as a number. |
| ID_EDIT_OFFSETTOLAYER_OffsetCountOrStartPoint | Offset 개수 입력 또는 두 점의 시작 점  | Enter Offset Count or Start Point of Two Points |
| ID_EDIT_OFFSETTOLAYER_OffsetEndPoint | Offset 종료점 지정 | Specify Offset End Point |
| ID_EDIT_OFFSETTOLAYER_SelectBothObjectsOffset | 양쪽 Offset할 객체들 선택 | Select objects to offset both sides |
| ID_EDIT_OFFSETTOLAYER_SelectBothOffset | 양쪽 증분 Offset할 객체들 선택 | Select objects to be both incremental offsets |
| ID_EDIT_OFFSETTOLAYER_SelectObjectOffset | Offset할 객체 선택 | Select the object to offset |
| ID_EDIT_OTPLINE_Converted | 개의 객체가 폴리선으로 변환되었습니다. |  Objects converted to polylines. |
| ID_EDIT_OTPLINE_Convertible | 변환 가능 객체: 원, 호, 타원, 3D 면, 선, 솔리드, 스플라인 | Convertible objects: circle, arc, ellipse, 3D face, line, solid, spline |
| ID_EDIT_OTPLINE_SelectConvertPolyline | 폴리선으로 변환할 객체 선택 | Select objects to convert to polylines |
| ID_EDIT_PWCHANGE_LineThickness | 선 두께 입력 | Enter Line Thickness |
| ID_EDIT_PWCHANGE_RequireNumerical | 수치값을 요구함. | Requires numerical value. |
| ID_EDIT_PWCHANGE_SelectObjectChangeThickness | 선 두께를 변경할 객체 선택 | Select object to change the line thickness |
| ID_EDIT_QSELECT2_Error | 영역 선택에 실패하였습니다. 폐합된 Polyline을 선택하세요. | Failed to select zone. Select a closed polyline. |
| ID_EDIT_QSELECT2_SelectObject | 객체 선택 | Select an object |
| ID_EDIT_RadioButton_CPL_01 | 폴리선 | PolyLine |
| ID_EDIT_RadioButton_CPL_02 | 3D 폴리선 | 3D PolyLine |
| ID_EDIT_RadioButton_EBB_01 | 경계 내부 | Inside |
| ID_EDIT_RadioButton_EBB_02 | 경계 외부 | Outside |
| ID_EDIT_RadioButton_EBB_03 | 무시 | Ignore |
| ID_EDIT_RadioButton_EBB_04 | 폭파 후 처리 | Explode & trim |
| ID_EDIT_RadioButton_EBB_05 | 경계 내부 | Inside |
| ID_EDIT_RadioButton_EBB_06 | 경계 외부 | Outside |
| ID_EDIT_RadioButton_EC_01 | 솔리드만 제외 | Solid only |
| ID_EDIT_RadioButton_EC_02 | 모든 해치 제외 | All hatches |
| ID_EDIT_RadioButton_EES_01 | 선택 객체만 | Selected only |
| ID_EDIT_RadioButton_EES_02 | 도면 전체 | All |
| ID_EDIT_RadioButton_EES_03 | 비율로 변경 | Ratio |
| ID_EDIT_RadioButton_EES_04 | 크기 고정 변경 | Fixed |
| ID_EDIT_RadioButton_FSE_01 | 도면 전체 선택 | Select all |
| ID_EDIT_RadioButton_FSE_02 | 영역 선택 | Window selection |
| ID_EDIT_RadioButton_FSE_03 | 울타리 선 선택 | Fence selection |
| ID_EDIT_RadioButton_FSE_04 | 객체 선택 | Select entities |
| ID_EDIT_RadioButton_FSE_05 | 그려진 영역 선택 | Select by closed b'dry |
| ID_EDIT_RadioButton_OTL_01 | 일반 Offset | Standard |
| ID_EDIT_RadioButton_OTL_02 | 여러번 Offset | Multiple |
| ID_EDIT_RadioButton_OTL_03 | 증분 Offset | Incremental |
| ID_EDIT_RadioButton_OTL_04 | 양쪽 증분 Offset | Incremental(both) |
| ID_EDIT_RadioButton_OTL_05 | 양쪽 Offset | Both sides |
| ID_EDIT_RadioButton_OTP_01 | 폴리선 | PolyLine |
| ID_EDIT_RadioButton_OTP_02 | 3D 폴리선 | 3D PolyLine |
| ID_EDIT_RadioButton_QSEL_01 | 객체 | Object |
| ID_EDIT_RadioButton_QSEL_02 | 영역 | Region |
| ID_EDIT_RadioButton_QSEL_03 | 내부 | Inside |
| ID_EDIT_RadioButton_QSEL_04 | 외부 | Outside |
| ID_EDIT_RadioButton_QSEL_05 | 선택 | Select |
| ID_EDIT_RadioButton_QSEL_06 | 미선택 | Deselect |
| ID_EDIT_RadioButton_RF_01 | 새로 지정 | Redefine |
| ID_EDIT_RadioButton_RF_02 | 객체 기준점을 이동 기준점으로 사용 | Use object base point |
| ID_EDIT_RadioButton_RF_03 | 참조 첫 점으로 바로 이동 | Move to first reference point |
| ID_EDIT_RadioButton_ZTZ_01 | 객체 모든점 이동 | Move all points of the object |
| ID_EDIT_RadioButton_ZTZ_02 | 객체 중심점 이동 | Move object center point |
| ID_EDIT_REFROTATE_PickBasePointRotateObject | 회전할 객체의 기준점 선택 | Select basepoint of object to rotate |
| ID_EDIT_REFROTATE_PickFirstPointRotateObject | 참조할 객체의 첫번째 점 선택 | Select the first point of object to reference |
| ID_EDIT_REFROTATE_PickSecondPointReferenceObject | 참조할 객체의 두번째 점 선택 | Select the second point of object to reference |
| ID_EDIT_REFROTATE_PickSecondPointRotateObject | 회전할 객체의 두번째 점 선택 | Select the second point of object to rotate |
| ID_EDIT_REFROTATE_SelectRotateObject | 회전할 객체 선택 | Select object to rotate |
| ID_EDIT_REFROTATE_UseRotateObjectBasePoint | 회전 객체 기준점 사용(F) | Use rotation object basepoint(F) |
| ID_EDIT_REOFFSET_3DPolylineNoOffset | 3D 폴리선은 Offset할 수 없습니다. | 3D polylines cannot be offset. |
| ID_EDIT_REOFFSET_AsNumber | 개수를 숫자로 입력해 주십시오. | Enter the number as a number. |
| ID_EDIT_REOFFSET_ObjectOffset | 증분 Offset할 객체 | Object to Incremental Offset |
| ID_EDIT_REOFFSET_OffsetDistance | Offset 거리 입력 | Enter Offset distance |
| ID_EDIT_REOFFSET_OffsetNumberOrStartPoint | Offset 개수 입력 또는 두 점의 시작 점 지정 | Enter the number of Offset or Select a starting point for two points |
| ID_EDIT_REOFFSET_PickEndPoint | Offset 종료점 지정 | Select Offset end point |
| ID_EDIT_REOFFSET_PickPointOffset | Offset할 쪽으로 점 지정 | Select point to Offset |
| ID_EDIT_REOFFSET_ValuePositive |  값은 반드시 양수여야 함. | Value must be positive. |
| ID_EDIT_REZELEV_ElevationValue | 고도값을 입력 | Enter elevation value |
| ID_EDIT_REZELEV_NoValue | 입력한 값이 없습니다. | No value entered. |
| ID_EDIT_REZELEV_SelectObjectChangeElevation | 고도값을 변경할 객체 선택 | Select an object to change its elevation value |
| ID_EDIT_TextBlock_BRA_01 | 끊어지는 점에서 여유 간격 | Offset distance at break point |
| ID_EDIT_TextBlock_BRD_01 | 객체를 끊을 거리 지정 | Set break length for object |
| ID_EDIT_TextBlock_BRD_02 | 끊어지는 점에서 여유 간격 | Offset distance at break point |
| ID_EDIT_TextBlock_BRE_01 | 끊어지는 점에서 여유 간격 | Offset distance at break point |
| ID_EDIT_TextBlock_BRI_01 | 끊어지는 점에서 여유 간격 | Offset distance at break point |
| ID_EDIT_TextBlock_CPL_01 | 변환 후, 폴리선 형식 | PolyLine format |
| ID_EDIT_TextBlock_DDE_01 | 레이어 명 : | Layer name |
| ID_EDIT_TextBlock_DDE_02 | 중복 판단 기준 좌표 소수 자리 | Precision |
| ID_EDIT_TextBlock_EBB_01 | 블록 | Block |
| ID_EDIT_TextBlock_EBB_02 | 치수 | Dim. |
| ID_EDIT_TextBlock_EBB_03 | 해치 | Hatch |
| ID_EDIT_TextBlock_EES_01 | 변경 대상 | Target Selection |
| ID_EDIT_TextBlock_EES_02 | 스케일 변경 방식 | Scale Method |
| ID_EDIT_TextBlock_EES_03 | Ratio | Set Ratio |
| ID_EDIT_TextBlock_EES_04 | 선 길이 | Line length |
| ID_EDIT_TextBlock_EES_05 | 블록 축척 | Block scale |
| ID_EDIT_TextBlock_EES_06 | 원 반지름 | Circle radius |
| ID_EDIT_TextBlock_EES_07 | 호 반지름 | Arc radius |
| ID_EDIT_TextBlock_EES_08 | 타원 장축 | Ellipse long |
| ID_EDIT_TextBlock_EES_09 | 폴리선 가로 | Pline hor. |
| ID_EDIT_TextBlock_EES_10 | 타원 단축 | Ellipse short |
| ID_EDIT_TextBlock_EES_11 | 폴리선 세로 | Pline ver. |
| ID_EDIT_TextBlock_EES_12 | 문자 높이 | Text height |
| ID_EDIT_TextBlock_FSE_01 | 그리미 객체 목록 | Object List |
| ID_EDIT_TextBlock_FSE_02 | 필터 대상 객체 | Target Object |
| ID_EDIT_TextBlock_FSE_03 | 2D 솔리드 | 2D solid |
| ID_EDIT_TextBlock_FSE_04 | 3D 면 | 3D face |
| ID_EDIT_TextBlock_FSE_05 | 3D 솔리드 | 3D solid |
| ID_EDIT_TextBlock_FSE_06 | 2D/3D 폴리선 | 2D/3D polyline |
| ID_EDIT_TextBlock_FSE_07 | 객체 가리기 | Hide object |
| ID_EDIT_TextBlock_FSE_08 | 광선(RAY) | Ray |
| ID_EDIT_TextBlock_FSE_09 | X선(XLINE) | Xline |
| ID_EDIT_TextBlock_FSE_10 | 다중선 | Multi line |
| ID_EDIT_TextBlock_FSE_11 | 다중 지시선 | Multi leader |
| ID_EDIT_TextBlock_FSE_12 | 다중행 문자 | Multi line text |
| ID_EDIT_TextBlock_FSE_13 | 래스터 이미지 | Raster image |
| ID_EDIT_TextBlock_FSE_14 | 문자 | Text |
| ID_EDIT_TextBlock_FSE_15 | 블록 | Block |
| ID_EDIT_TextBlock_FSE_16 | 선 | Line |
| ID_EDIT_TextBlock_FSE_17 | 속성 | Properties |
| ID_EDIT_TextBlock_FSE_18 | 스플라인 | Spline |
| ID_EDIT_TextBlock_FSE_19 | 영역 | Region |
| ID_EDIT_TextBlock_FSE_20 | 원 | Circle |
| ID_EDIT_TextBlock_FSE_21 | 점 | Point |
| ID_EDIT_TextBlock_FSE_22 | 지시선 | Leader |
| ID_EDIT_TextBlock_FSE_23 | 치수 | Dimension |
| ID_EDIT_TextBlock_FSE_24 | 타원 | Ellipse |
| ID_EDIT_TextBlock_FSE_25 | 테이블 | Table |
| ID_EDIT_TextBlock_FSE_26 | 폴리선 | PolyLine |
| ID_EDIT_TextBlock_FSE_27 | 해치 | Hatch |
| ID_EDIT_TextBlock_FSE_28 | 호 | Arc |
| ID_EDIT_TextBlock_Layer | 레이어 | Layer |
| ID_EDIT_TextBlock_OTL_01 | Offset 방식 | Offset |
| ID_EDIT_TextBlock_OTP_01 | * 3D 폴리선 변환은 선과 페이스 객체만 가능 | * 3D polyline conversion is only possible for line and face objects. |
| ID_EDIT_TextBlock_OTP_02 | 변환 후, 폴리선 형식 | PolyLine format |
| ID_EDIT_TextBlock_QSEL_01 | 선택 유형 | Type |
| ID_EDIT_TextBlock_QSEL_02 | 선택 영역 | Region |
| ID_EDIT_TextBlock_QSEL_03 | 교차 영역 | Intersection |
| ID_EDIT_TextBlock_QSEL_04 | 경계선 선택 | Select b'dry |
| ID_EDIT_TextBlock_RF_01 | 이동 기준 점 설정 | Set base point to move |
| ID_EDIT_TextBlock_RF_02 | 이동할 점 | Destination point |
| ID_EDIT_TextBlock_XYB_01 | X 축척 | X-Scale |
| ID_EDIT_TextBlock_XYB_02 | Y 축척 | Y-Scale |
| ID_EDIT_TextBlock_ZTZ_01 | Z값 | Z value |
| ID_EDIT_TextBlock_ZTZ_02 | 변경 방식 | Mode |
| ID_EDIT_VIEWSELECTIONCOLOR_Informations | 도면에 객체가 많으면 시간이 약간 소요됩니다. | If there are many objects in the drawing  it will take some time. |
| ID_EDIT_VIEWSELECTIONCOLOR_SelectedColor | 선택한 색상 | Selected color is |
| ID_EDIT_VIEWSELECTIONCOLOR_SelectObject | 보여질 색상의 객체 선택 | Select the object to show. |
| ID_EDIT_XYBSCALE_ExistSameName | 같은 이름의 블록이 존재합니다. | A block with the same name exists. |
| ID_EDIT_XYBSCALE_MadeBlock | 블록이 생성되었습니다. | A block has been created. |
| ID_EDIT_XYBSCALE_MakeBlock | 블록으로 만드시겠습니까? | Do you want to make it into a block? |
| ID_EDIT_XYBSCALE_MinScale | 스케일은 0보다 커야합니다. | Scale must be greater than zero. |
| ID_EDIT_XYBSCALE_PickScaleTranformationBasePoint | 스케일 변환 기준점 선택 | Select scale transformation base point |
| ID_EDIT_XYBSCALE_ReceiveObjectScale | 스케일 조절할 객체 받기 | Receive object to scale |
| ID_EDIT_XYBSCALE_ReceiveRef | 참조받기(R) | Receive Reference(R) |
| ID_EDIT_XYBSCALE_Xaxis | X축 축척 입력 또는 | Enter the X-axis scale or |
| ID_EDIT_XYBSCALE_Yaxis | Y축 축척 입력 또는 | Enter the Y-axis scale or |
| ID_HAS_PROMPT_Inheritance | 해치 객체 선택 | Select Hatch Object |
| ID_HAS_PROMPT_Inheritance_Reject | 선택된 객체가 해치 객체 또는 연관 해치 블록이어야 합니다. | The selected object must be a hatch object or associated hatch block. |
| ID_LAYER_Button_ULAYERS_01 | 검색 | Search |
| ID_LAYER_Button_ULAYERS_02 | 레이어 켜기 | Layer on |
| ID_LAYER_Button_ULAYERS_03 | 레이어 끄기 | Layer off |
| ID_LAYER_CheckBox_DFO_01 | 사용하지 않는 레이어 | Unused layers |
| ID_LAYER_CheckBox_DFO_02 | 동결된 레이어 | Frozen layers |
| ID_LAYER_CheckBox_DFO_03 | 꺼진 레이어 | Turned off layers |
| ID_LAYER_CheckBox_DFO_04 | 사용자 지정 레이어 | User selection |
| ID_LAYER_CheckBox_LP_01 | 특성 변경없이 아래 레이어에 병합 | Merge to lower layer without changing properties |
| ID_LAYER_CheckBox_LP_02 | 레이어 퍼지 | Purge Layers |
| ID_LAYER_CheckBox_MLAY_01 | 머리말 | Header |
| ID_LAYER_ComboBox_MDLA_ChLayer_01 | 레이어 끄기 | Turn Off Layer |
| ID_LAYER_ComboBox_MDLA_ChLayer_02 | 레이어 동결 | Freeze layer |
| ID_LAYER_ComboBox_MDLA_ChLayer_03 | 처리 안 함 | Do nothing |
| ID_LAYER_ComboBox_REL_Location_01 | 앞 | Front |
| ID_LAYER_ComboBox_REL_Location_02 | 뒤 | Back |
| ID_LAYER_ComboBox_REL_Location_03 | 앞+뒤 | Front +Back |
| ID_LAYER_ComboBox_REL_Location_04 | 중간 | Middle |
| ID_LAYER_CTL_Change | 현재 레이어로 변경하여 복사할 객체 선택 | Select object to be changed to and copied to current layer |
| ID_LAYER_CTL_Replicate | 선택한 객체의 현재 레이어로 변경하여 객체를 복제한다. | Replicate object by changing to current layer of the selected object. |
| ID_LAYER_DFO_Current | 현재 레이어는 지울 수 없습니다. | Current layer cannot be erased. |
| ID_LAYER_DFO_Delete | 꺼지거나 동결된 레이어의 객체와 레이어를 모두 삭제하거나, 사용되지 않은 레이어를 삭제합니다. | Delete all objects and layers of turned off or frozen layers, or delete unused layers. |
| ID_LAYER_DFO_SelectDeleteObjects | 삭제할 레이어에 속한 객체 선택 | Select objects belonging to the layer you want to delete |
| ID_LAYER_DFO_SelectMoveBlock | 블록 객체를 이동시킬 레이어에 속한 객체 선택 | Select an object belonging to the layer to move the block object |
| ID_LAYER_FLO_OnOff | 현재 도면의 동결된 레이어만 켜고 다른 레이어는 끕니다. | Turn on only frozen layers in the current drawing and turn off the other layers. |
| ID_LAYER_FOO_OnOff | 현재 도면의 동결되거나 꺼진 레이어만 켜고 다른 레이어는 끕니다. | Turn on only frozen or turned off layers in the current drawing, and turn off other layers. |
| ID_LAYER_GroupName_01 | 설정 | Settings |
| ID_LAYER_GroupName_02 | 삭제될 레이어 설정 | Delete Layer Settings |
| ID_LAYER_GroupName_03 | 삭제 레이어의 블록 처리 | Block Process |
| ID_LAYER_GroupName_04 | 병합할 레이어 선택 | Select Layers to Merge |
| ID_LAYER_GroupName_05 | 레이어 동결 설정 | Selection Method |
| ID_LAYER_GroupName_06 | 레이어 | Layers |
| ID_LAYER_GroupName_07 | 객체 삭제가 안될 경우 | If Objects Cannot Be Deleted |
| ID_LAYER_GroupName_08 | 문자 대체 | Replace Text |
| ID_LAYER_GroupName_09 | 문자 삭제 | Delete Text |
| ID_LAYER_GroupName_10 | 대/소문자 변경 | Change Case |
| ID_LAYER_GroupName_12 | 문자 추가 | Add Text |
| ID_LAYER_GroupName_13 | 레이어 특성 | Layer properties |
| ID_LAYER_GroupName_14 | 변경 후 처리 | Process after modify |
| ID_LAYER_GroupName_15 | 설정 | Settings |
| ID_LAYER_LAYERLISTMERGE | 기본 레이어, 현재 레이어 및 잠긴 레이어는 병합되지 않습니다. | The base layer, the current layer, and the locked layer are not merged. |
| ID_LAYER_LAYERP_Print | 선택한 객체의 인쇄를 켭니다. | Turn on printing of the selected object. |
| ID_LAYER_LAYFRZ_Cancel | 취소되었습니다. | Canceled. |
| ID_LAYER_LAYFRZ_Confirm | 도면층 동결 확인 | Layer freeze confirmed |
| ID_LAYER_LAYFRZ_Current | 도면층은 현재 도면층이므로 동결할 수 없습니다. | The layer cannot be frozen because it is the current layer. |
| ID_LAYER_LAYFRZ_Freeze | 도면층을 동결하시겠습니까? | Do you want to freeze the layer? |
| ID_LAYER_LAYFRZ_Frozen | 도면층을 동결했습니다. | The layer has been frozen. |
| ID_LAYER_LAYFRZ_Invalid | 잘못된 입력입니다. | Invalid input. |
| ID_LAYER_LAYFRZ_Name | 동결할 레이어 이름을 입력하시오. 이름이 여러개면 ,로 구분해 입력합니다. | Enter name of layer to freeze. Separate multiple names by ' |
| ID_LAYER_LAYFRZ_NoLayer | 해당 문자가 포함되어 있는 레이어가 없습니다. | No layers containing that text. |
| ID_LAYER_LAYFRZ_Select | 동결할 레이어 객체 선택 | Select object to freeze the layer |
| ID_LAYER_LAYMRG_AnotherLayer | 선택한 객체의 현재 레이어를 다른 레이어와 병합한다. | Merge current layer of the selected object with another layer. |
| ID_LAYER_LAYMRG_Merge | 레이어 병합 | Merge Layers2 |
| ID_LAYER_LAYMRG_Name | 병합할 레이어 이름 | Name of layer to merge |
| ID_LAYER_LAYMRG_Open | 레이어 열기 | Open Layers |
| ID_LAYER_LAYMRG_PickEntity | 레이어 이름 입력 | Input the layer name. |
| ID_LAYER_LAYMRG_Proceed | 잠긴 레이어를 제외하고 진행하시겠습니까? | Do you want to proceed except for the locked layer? |
| ID_LAYER_LAYMRG_Q1 |  | Do you want to merge  |
| ID_LAYER_LAYMRG_Q2 | 레이어를 | layer into |
| ID_LAYER_LAYMRG_Q3 | 레이어로 합치겠습니까? | layer? |
| ID_LAYER_LAYMRG_Release | 잠긴 레이어를 해제하시겠습니까? | Are you sure you want to release the locked layer? |
| ID_LAYER_LAYMRG_SelectMerge | 다른 레이어로 병합할 객체 선택 | Select a object to merge into different layer |
| ID_LAYER_LAYMRG_SelectNewLayer | 병합할 레이어에 속해있는 객체 선택 | Select a object belonging to layers to merge |
| ID_LAYER_LAYOFF_CurrentLayerTurnOff | 도면층은 현재 도면층입니다. 끄시겠습니까? | The layer is the current layer. Do you want to turn it off? |
| ID_LAYER_LAYOFF_SelectDragLayer | 끌 도면층의 객체 선택 | Select an object for a drag layer |
| ID_LAYER_LAYOFF_TurnOffLayer | 도면층을 껐습니다. | Layer turned off. |
| ID_LAYER_LAYUNISO_NoLayersToRestore | 복원할 도면층이 없습니다. | There are no layers to restore. |
| ID_LAYER_LAYVPI_Detach | 뷰포트에서 분리할 도면층의 객체 선택 | Select object in layer to detach from viewport |
| ID_LAYER_LAYVPI_Disconnect | 현재 활성화된 뷰포트 외의 다른 뷰포트의 도면층을 분리한다 | Disconnect layers of viewports other than those currently active. |
| ID_LAYER_LAYVPI_Possible | [TILEMODE]가 0인 경우에만 가능합니다. | Only possible if [TILEMODE] is 0. |
| ID_LAYER_MDLA_Processed | 개의 레이어가 처리되었습니다. | Layers have been processed. |
| ID_LAYER_MDLA_SelectLayer | 블록을 이동시킬 레이어 선택 | Select a layer to move the block |
| ID_LAYER_MDLA_SelectLayerToMoveUndelete | 삭제되지 않은 객체를 이동시킬 레이어 선택 | Select a layer to move an undeleted object |
| ID_LAYER_MLAY_FailedToCreateLayer | 새 레이어를 생성하지 못했습니다. | Failed to create new layer. |
| ID_LAYER_MLAY_NoTextObject | 텍스트 객체(DBText, MText)가 선택되지 않았습니다. | No text object (DBText, MText) is selected. |
| ID_LAYER_MLAY_SelectTextThenAnother | 문자 객체 1개와 이동할 객체를 선택하세요. | Select one text object and the other objects you want to move. |
| ID_LAYER_MOLAYPROP_Default | 기본 레이어는 지울 수 없습니다. | Default layer cannot be deleted. |
| ID_LAYER_MOLAYPROP_SelectFromImportSettings | 설정을 가져올 객체 선택 | Select the object from which to import settings |
| ID_LAYER_MOLAYPROP_SelectLayer | 특성을 변경할 레이어의 객체 선택 | Select an object for the layer whose attributes you want to change |
| ID_LAYER_MOLAYPROP_SelectObject | 객체를 선택해 주세요. | Please select an object. |
| ID_LAYER_OLO_OnOff | 켜져있는 레이어는 끄고 꺼져있는 레이어는 켭니다. | Turn off on-layer and turn on off-layer. |
| ID_LAYER_PLF_Off | 선택한 객체의 인쇄를 끕니다. | Turn off printing of the selected object. |
| ID_LAYER_PLF_Select | 인쇄 레이어를 끌 객체 선택 | Select object to turn off print layer |
| ID_LAYER_PLO_On | 선택한 객체의 인쇄를 켭니다. | Turn on printing of the selected object. |
| ID_LAYER_PLO_Select | 인쇄 레이어를 켤 객체 선택 | Select object to turn on print layer |
| ID_LAYER_RadioButton_DFO_01 | 블록 삭제 | Delete blocks |
| ID_LAYER_RadioButton_DFO_02 | 블록 삭제 안함 | Do not delete blocks |
| ID_LAYER_RadioButton_DFO_03 | 블록 레이어 변경 | Change block layer |
| ID_LAYER_RadioButton_LF_01 | 개별 선택 | Select individually |
| ID_LAYER_RadioButton_LF_02 | 다중 선택 | Select multiple |
| ID_LAYER_RadioButton_LF_03 | 특정 이름 입력 | By layer name |
| ID_LAYER_RadioButton_MDLA_01 | 다른 레이어로 이동 | Move to other layer |
| ID_LAYER_RadioButton_MDLA_02 | 블록 삭제 | Delete block |
| ID_LAYER_RadioButton_MDLA_03 | 아래 [변경할 레이어]로 변경 | Move to [Change layer to*] on below |
| ID_LAYER_RadioButton_REL_01 | 변경 안함 | Do not change |
| ID_LAYER_RadioButton_REL_02 | 모두 대문자 | All uppercase |
| ID_LAYER_RadioButton_REL_03 | 모두 소문자 | All lowercase |
| ID_LAYER_RadioButton_REL_04 | 앞글자만 대문자 | Capitalize first letter |
| ID_LAYER_RENAMELAY_AlreadyExists | 이름의 레이어가 이미 존재합니다. | Layer of the name already exists. |
| ID_LAYER_RENAMELAY_InvalidChar | 다음 문자는 도면층 이름에 사용할 수 없습니다:<>/\"""":;?*|",='. | The following characters cannot be used in layer names:<>/\"""":;?*|",='. |
| ID_LAYER_RENAMELAY_LayerNameChanged | 개의 레이어 이름이 변경되었습니다. | Layer name has been changed. |
| ID_LAYER_RENAMELAY_NoSpace | 공백은 레이어 이름으로 설정할 수 없습니다. | Spaces cannot be set as layer names. |
| ID_LAYER_TextBlock_COPYTOLAYER_01 | 새 레이어 명 | Set layer name |
| ID_LAYER_TextBlock_LAYER | 레이어 | Layer |
| ID_LAYER_TextBlock_LAYERNAME | 레이어명 | Layer Name |
| ID_LAYER_TextBlock_LP_01 | 이름 :  | Name: |
| ID_LAYER_TextBlock_LP_02 | 상태 :  | State: |
| ID_LAYER_TextBlock_LP_03 | 색상 :  | Color: |
| ID_LAYER_TextBlock_LP_04 | VP 색상 :  | VP Color: |
| ID_LAYER_TextBlock_LP_05 | 선 종류 :  | Line style: |
| ID_LAYER_TextBlock_LP_06 | 선 가중치 :  | Line weight: |
| ID_LAYER_TextBlock_LP_07 | 투명도 :  | Transparency: |
| ID_LAYER_TextBlock_LP_08 | 설명 :  | Description: |
| ID_LAYER_TextBlock_MDLA_01 | 이동할 레이어:  | Layer to move |
| ID_LAYER_TextBlock_MDLA_02 | 변경할 레이어 | Change layer to* |
| ID_LAYER_TextBlock_MDLA_03 | 변경할 레이어 설정 | Changed layer options |
| ID_LAYER_TextBlock_MLAY_01 | 레이어 색상 | Layer color |
| ID_LAYER_TextBlock_REL_01 | 찾는 문자:  | Find text |
| ID_LAYER_TextBlock_REL_02 | 변경할 문자:  | Change text |
| ID_LAYER_TextBlock_REL_03 | 지정 문자:  | From text |
| ID_LAYER_TextBlock_REL_04 | 이 문자만:  | Del text |
| ID_LAYER_TextBlock_REL_05 | 앞에서:  | Del front |
| ID_LAYER_TextBlock_REL_06 | 뒤에서:  | Del back |
| ID_LAYER_TextBlock_REL_07 | 중간:  | Del from |
| ID_LAYER_TextBlock_REL_08 | 부터:  | Del count |
| ID_LAYER_TextBlock_REL_09 | 방식:  | Place |
| ID_LAYER_TextBlock_REL_10 | 위치:  | Index |
| ID_LAYER_TextBlock_REL_11 | 시작:  | From start |
| ID_LAYER_TextBlock_REL_12 | 증분:  | Incr. |
| ID_LAYER_TextBlock_REL_13 | 자리수:  | Digits |
| ID_LAYER_TextBlock_REL_14 | 덧붙일 문자:  | Text to add |
| ID_LAYER_TextBlock_REL_15 | 머리말:  | Prefix : |
| ID_LAYER_TextBlock_REL_16 | 중간말:  | Mid : |
| ID_LAYER_TextBlock_REL_17 | 중간말 삽입 위치:  | Insert position : |
| ID_LAYER_TextBlock_REL_18 | 꼬리말:  | Suffix : |
| ID_LAYER_TextBlock_SELECT | 선택 | Select |
| ID_LAYER_TextBlock_ULAYERS_01 | 참조 이름 | Ref. Name |
| ID_LAYER_TextBlock_ULAYERS_02 | 상태 | State |
| ID_LAYER_TextBlock_ULAYERS_03 | 레이어 명 | Layer Name |
| ID_LAYER_TextBlock_ULAYERS_Search | 검색 | Search |
| ID_LAYER_TextBox_MDLA_01 | 임시 | Temporary |
| ID_LIB_ALLFILES | 모든파일 | All Files |
| ID_MEASURE_ARET_AreaOuput | 면적산출 옵션 | Area output option |
| ID_MEASURE_ARET_BoundaryNot | 경계를 찾을 수 없습니다 | Boundary not found |
| ID_MEASURE_ARET_CalculateArea | 면적을 산출할 객체 선택 | Select object to calculate area |
| ID_MEASURE_ARET_CalculatedValue | 산출된 면적 값을 도형에 입력하시겠습니까? | Do you want to input the calculated area value into the shape? |
| ID_MEASURE_ARET_Click | 전체 면적을 생성할 점 클릭 또는 | Click on the point to create the entire area or |
| ID_MEASURE_ARET_DecimalOutput | 소수점자리(산출값) | Decimal place(Output) |
| ID_MEASURE_ARET_DecimalSum | 소수점자리(합계) | Decimal place(Sum) |
| ID_MEASURE_ARET_EnterOutputDecimal | 산출값의 소수점 자리 입력 | Enter decimal place for output |
| ID_MEASURE_ARET_EnterSumDecimal | 합계의 소수점 자리 입력 | Enter decimal places for the sum |
| ID_MEASURE_ARET_Entity | 객체선택(E) | SelectEntity(E) |
| ID_MEASURE_ARET_ErrorCreateHatch | 해치 생성에 오류가 발생했습니다 | Error creating hatch |
| ID_MEASURE_ARET_FooterCurrent | 꼬리말을 입력해주세요. 현재 | Enter footer. Current |
| ID_MEASURE_ARET_FooterOpt | 꼬리말(F) | Footer(F) |
| ID_MEASURE_ARET_HeaderCurrent | 머리말을 입력해주세요. 현재 | Enter header. Current |
| ID_MEASURE_ARET_HeaderOpt | 머리말(P) | Header(H) |
| ID_MEASURE_ARET_IndividualArea | 개별면적입력 | Enter individual area |
| ID_MEASURE_ARET_IndividualAreaOpt | 개별면적입력(W) | WriteIndividualArea(W) |
| ID_MEASURE_ARET_Internal | 면적을 구할 내부 점 지정 또는 | Specify internal point to find area or |
| ID_MEASURE_ARET_LengthUnit | 길이 단위 선택 | Select length unit |
| ID_MEASURE_ARET_No | 아니오(X) | No(X) |
| ID_MEASURE_ARET_Options | 현재옵션 | Current options |
| ID_MEASURE_ARET_OutputDecimal | 산출값소수점(D) | OutputDecimalPoint(D) |
| ID_MEASURE_ARET_Scale | 축척 | Scale |
| ID_MEASURE_ARET_SelectedArea | 선택 부분 면적 | Selected partial area |
| ID_MEASURE_ARET_SumDecimal | 합계소수점(M) | SumDecimalPoint(M) |
| ID_MEASURE_ARET_TextObject | 문자 객체 선택 | Select text object |
| ID_MEASURE_ARET_TextSelection | 문자선택(S) | TextSelection(S) |
| ID_MEASURE_ARET_TotalArea | 면적 합계 | Total area |
| ID_MEASURE_ARET_UnitOpt | 단위설정(U) | UnitSetting(U) |
| ID_MEASURE_ARET_UnitSetting | 단위설정 | Unit Setting |
| ID_MEASURE_ARET_Yes | 예(O) | Yes(O) |
| ID_MEASURE_Button_CAL2_03 | 문자 선택 | Pick Text |
| ID_MEASURE_Button_CAL2_04 | 치수 선택 | Pick Dim |
| ID_MEASURE_Button_CAL2_05 | 객체 선택 | Pick Object |
| ID_MEASURE_Button_CAL2_06 | 거리 지정 | Pick Dist |
| ID_MEASURE_Button_CAL2_07 | 수식 선택 | Pick Formula |
| ID_MEASURE_Button_CAL2_08 | 면적 지정 | Pick Point |
| ID_MEASURE_Button_CAL2_09 | 문자/길이/거리 ◀ | Text/L/Dist   ◀ |
| ID_MEASURE_Button_CAL2_10 | 문자/길이/거리 ▶ | Text/L/Dist   ▶ |
| ID_MEASURE_Button_CAL2_11 | 면적/기타 ◀ | Area/Others ◀ |
| ID_MEASURE_Button_CAL2_12 | 면적/기타 ▶ | Area/Others ▶ |
| ID_MEASURE_Button_CAL2_13 | 문자 수정 | Edit Existing Text |
| ID_MEASURE_Button_CAL2_14 | 문자 쓰기 | Write Text |
| ID_MEASURE_Button_CAL2_15 | 문자 설정 | Text Settings |
| ID_MEASURE_Button_CCI_01 | 경로 선택 | Folder |
| ID_MEASURE_Button_INQUIRECOLOR_01 | 객체 선택 | Select object |
| ID_MEASURE_Button_INQUIRECOLOR_02 | Xref, Block 내부객체 선택 | Select in Xref/Block |
| ID_MEASURE_Button_SELECTHATCH | 해치 선택 | Select hatch |
| ID_MEASURE_CALC_ClickNextPoint | [거리] 다음 점 클릭 | [Distance] Click on the next point |
| ID_MEASURE_CALC_ClickStartPoint | [거리] 시작점 클릭 | [Distance] Click on start point |
| ID_MEASURE_CALC_InsertPoint | 문자를 삽입할 점 지정 | Specify a point to insert texts |
| ID_MEASURE_CALC_ObjectToCalcLength | 길이를 계산할 객체 선택 | Select an object to calculate its length |
| ID_MEASURE_CALC_SelectDim | 계산할 치수 선택 | Select dimensions to calculate |
| ID_MEASURE_CALC_SelectExpression | 계산할 문자 식 선택 | Select a text expression to calculate |
| ID_MEASURE_CALC_SelectImportSettings | 설정을 가져올 문자 선택 | Select texts to import settings |
| ID_MEASURE_CALC_SelectObject | 면적을 구할 객체 선택 | Select the object for which you want to save |
| ID_MEASURE_CALC_SelectPoint | 면적을 구할 지점 선택 | Select the point where you want to find the area |
| ID_MEASURE_CALC_SelectText | 계산할 문자 선택 | Select texts to calculate |
| ID_MEASURE_CALC_SelectTextToModify | 수정 할 문자들 선택 | Select texts to modify |
| ID_MEASURE_CCI_CopyToClipboard | 클립보드에 객체가 복사 되었습니다. | Object copied to clipboard successfully to the clipboard. |
| ID_MEASURE_CCI_DeleteBoundary | 경계 내, 외부 삭제 | Delete Inside, Outside |
| ID_MEASURE_CCI_NoContentSelected | 선택된 내용이 없습니다. | No content is selected. |
| ID_MEASURE_CCI_NoObjectSelected | 클립보드에 복사할 객체가 선택되지 않았습니다. | No object selected to copy to clipboard. |
| ID_MEASURE_CCI_NoObjectSelectedBoundary | 경계가 되는 객체가 선택되지 않았습니다. | No objects were selected for the boundary. |
| ID_MEASURE_CCI_NoSupported | 잘린 타원은 지원하지 않습니다. | Truncated ellipse is not supported. |
| ID_MEASURE_CCI_ObjectExtractionTime | 객체 추출에 다소 시간이 소요될 수 있습니다. | Object extraction may take some time. |
| ID_MEASURE_CCI_SelectBound | 경계가 되는 폴리선, 원, 타원을 선택해 주십시오. | Please select a polyline, circle, or ellipse that is bound. |
| ID_MEASURE_CCI_SelectClosedObject | 경계 외부를 잘라낼 닫힌 객체(폴리선, 원, 타원) 선택 | Select a closed object (polyline, circle, ellipse) to cut outside the boundary |
| ID_MEASURE_CD_MeasureDistance | 거리를 측정할 점 선택 | Select point to measure distance |
| ID_MEASURE_CDR_Select | 방향을 조회할 객체 선택 | Select objects to find direction |
| ID_MEASURE_CDR_Unable | 연산할 수 없습니다. | Unable to compute. |
| ID_MEASURE_CEX_Complete | 완료되었습니다. | Complete. |
| ID_MEASURE_CEX_Excel | 객체의 좌표를 엑셀화면, 텍스트 파일로 내보냅니다. | Export coordinates of the object to Excel screen, text file. |
| ID_MEASURE_CEX_ExportCoordinate | 좌표를 내보낼 객체 선택 | Select object to export coordinates of |
| ID_MEASURE_CEX_Information | 좌표 입력이 완료될 때까지 엑셀 시트를 클릭하지 마세요. | Do not click on the excel sheet until the coordinate input is complete. |
| ID_MEASURE_CEX_Processing | 좌표 입력 중. | Entering coordinates |
| ID_MEASURE_CEX_StartCell | 표를 입력할 시작셀 선택 | Select start cell to enter table |
| ID_MEASURE_CheckBox_ARET_01 | 단위 입력 | Input unit |
| ID_MEASURE_CheckBox_ARET_02 | 천단위 쉼표 입력 | Thousand separator (,) |
| ID_MEASURE_CheckBox_ARET_03 | 각 도형에 면적입력 | Label individual areas |
| ID_MEASURE_CheckBox_ARET_04 | 임시로 해치 표시 | Temporarily mark the hatch. |
| ID_MEASURE_CheckBox_CAL2_01 | 이전 식 삭제 | Clear history |
| ID_MEASURE_CheckBox_CAL2_02 | DimScale 적용 | Apply DimScale |
| ID_MEASURE_CheckBox_CAL2_03 | 계산 후 바로 실행 | Auto run after calculation |
| ID_MEASURE_CheckBox_CAL2_04 | 천 단위 구분 기호 사용 | Thousand separator (,) |
| ID_MEASURE_CheckBox_CAL2_05 | 수정 시 색상 변경 | Change color edited text |
| ID_MEASURE_CheckBox_CAL2_06 | 길이 문자 쓰기 | Label length |
| ID_MEASURE_CheckBox_CAL2_07 | 폴리선은 꺾인 구간마다 길이 쓰기 | Label each segment |
| ID_MEASURE_CheckBox_CAL2_08 | 거리 문자 쓰기 | Label distance |
| ID_MEASURE_CheckBox_CAL2_09 | 선 그리기 | Draw pline |
| ID_MEASURE_CheckBox_CAL2_10 | 연속 점 지정 | Continuous points |
| ID_MEASURE_CheckBox_CAL2_11 | 개별 면적 쓰기 | Label each area |
| ID_MEASURE_CheckBox_CAL2_12 | 면적 해치 | Hatch |
| ID_MEASURE_CheckBox_CAL2_13 | 산출 후 삭제 | Del hatch after |
| ID_MEASURE_CheckBox_CAL2_14 | 묶음 | Group hatch |
| ID_MEASURE_CheckBox_CAL2_15 | 계산 증감 | Inc/dec calc. |
| ID_MEASURE_CheckBox_CAL2_16 | 치수 값 산출시 눈에 보이는 값 적용 | Use visible value for dimensions |
| ID_MEASURE_CheckBox_CCI_01 | 결과 이미지 자동 저장 | Auto save result images |
| ID_MEASURE_CheckBox_CCI_02 | 배경 색상 제거 | Remove background color |
| ID_MEASURE_CheckBox_CCI_03 | 객체 가장 자리에서 그림 잘라내기 | Crop image to object boundary |
| ID_MEASURE_CheckBox_CEX_01 | 끝점 | END |
| ID_MEASURE_CheckBox_CEX_02 | 가운데점 | MID |
| ID_MEASURE_CheckBox_CEX_03 | 교차점 | INT |
| ID_MEASURE_CheckBox_CEX_04 | 원중심점 | CEN |
| ID_MEASURE_CheckBox_CEX_05 | 노드점 | NOD |
| ID_MEASURE_CheckBox_CEX_06 | 입력점 | INSER. |
| ID_MEASURE_CheckBox_CEX_07 | 중복 좌표 삭제하고 입력 | Remove duplicates |
| ID_MEASURE_CheckBox_CL_01 | 폴리선 구간별 쓰기 | Label each segment |
| ID_MEASURE_CheckBox_CL_02 | 반지름 쓰기 | Label radius |
| ID_MEASURE_CheckBox_CL_03 | 지정 길이 조건 객체에만 표기 | Label by length condition |
| ID_MEASURE_CheckBox_CL_04 | 객체 레이어 표기 | Label layer |
| ID_MEASURE_CheckBox_DFS_01 | mm 도면 | mm drawing |
| ID_MEASURE_CheckBox_DIT_01 | 지정한 점 Z값 무시하기 | Ignore Z-value |
| ID_MEASURE_CheckBox_GAR_01 | 해치 그리기 | Draw hatch |
| ID_MEASURE_CheckBox_GAR_02 | 문자 그리기 | Add labels |
| ID_MEASURE_CheckBox_HAR_01 | 색상별 | By color |
| ID_MEASURE_CheckBox_HAR_02 | 패턴별 | By pattern |
| ID_MEASURE_CheckBox_HAR_03 | 레이어별 | By layer |
| ID_MEASURE_CheckBox_RCE_01 | 문자에 원 그리기 | Enclose text with circle |
| ID_MEASURE_CheckBox_SD_01 | 지정한 점 Z 값 무시 | Ingore Z-value of selected point |
| ID_MEASURE_CheckBox_SD_02 | 결과 값 도면에 쓰기 | Write result to drawing |
| ID_MEASURE_CheckBox_XYP_01 | 천단위 구분 기호 표기 | Thousand separator (,) |
| ID_MEASURE_CheckBox_XYP_02 | Z값 표기 | Include Z-value |
| ID_MEASURE_CheckBox_XYP_03 | 좌표 앞 X,Y 문자 표기 | Show axis labels |
| ID_MEASURE_CheckBox_XYP_04 | X, Y, Z 문자 사용자 지정 | Customize axis labels |
| ID_MEASURE_CheckBox_XYP_05 | 그룹으로 묶기 | Group objects |
| ID_MEASURE_CheckBox_XYP_06 | 화살표 그리기 | Draw arrowhead |
| ID_MEASURE_CheckBox_XYP_07 | 화살표 길이 DIMASZ 값 적용 | Use system arrow size (DIMASZ) |
| ID_MEASURE_CL_Find | 길이를 구할 객체 선택 | Select object to find its length |
| ID_MEASURE_CL_InsertTextPoint | 문자 삽입점 지정 | Specifying a text insertion point |
| ID_MEASURE_CL_Length | 길이 지정 방식 선택 | Select how length is specified |
| ID_MEASURE_CL_One | 하나의 선을 선택할 경우 범위를 지정할 수 있습니다.  | If one line selected, you can specify a range. |
| ID_MEASURE_CL_Range | 선택한 선의 범위 선택 | Select the range of the selected line |
| ID_MEASURE_CL_Select | 범위지정(S) | SelectRange(S) |
| ID_MEASURE_CL_SelectCorrectCurve | 폴리선, 선, 원 또는 호 객체를 선택해주세요. | Please select a polyline, line, circle or arc. |
| ID_MEASURE_CL_Total | 전체길이(T) | TotalLength(T) |
| ID_MEASURE_CL_Write | 객체 길이 쓰기 | Write object length |
| ID_MEASURE_ComboBox_CAL2_CalAndExecute_01 | 문자 수정 실행 | Edit text |
| ID_MEASURE_ComboBox_CAL2_CalAndExecute_02 | 문자 쓰기 실행 | Write text |
| ID_MEASURE_ComboBox_CAL2_ClipOption_01 | 복사 안함 | Do not copy |
| ID_MEASURE_ComboBox_CAL2_ClipOption_02 | 결과 값 | Result |
| ID_MEASURE_ComboBox_CAL2_ClipOption_03 | 산출 식 | Formula |
| ID_MEASURE_ComboBox_CAL2_DistAlign_01 | 시작 점 | Start point |
| ID_MEASURE_ComboBox_CAL2_DistAlign_02 | 중간 점 | Middle point |
| ID_MEASURE_ComboBox_CAL2_DistAlign_03 | 끝 점 | End point |
| ID_MEASURE_ComboBox_CAL2_FormulaList_01 | 지난 계산 목록 | Calculation History |
| ID_MEASURE_ComboBox_CAL2_ResultAngle_01 | 0도 | 0 ˚ |
| ID_MEASURE_ComboBox_CAL2_ResultAngle_02 | 90도 | 90 ˚ |
| ID_MEASURE_ComboBox_CAL2_ResultAngle_03 | 180도 | 180 ˚ |
| ID_MEASURE_ComboBox_CAL2_ResultAngle_04 | 270도 | 270 ˚ |
| ID_MEASURE_ComboBox_CAL2_ResultSort_01 | 좌측 상단 | Top left |
| ID_MEASURE_ComboBox_CAL2_ResultSort_02 | 좌측 중심 | Center left |
| ID_MEASURE_ComboBox_CAL2_ResultSort_03 | 좌측 하단 | Bottom left |
| ID_MEASURE_ComboBox_CAL2_ResultSort_04 | 중앙 상단 | Top middle |
| ID_MEASURE_ComboBox_CAL2_ResultSort_05 | 중앙 중심 | Center middle |
| ID_MEASURE_ComboBox_CAL2_ResultSort_06 | 중앙 하단 | Bottom middle |
| ID_MEASURE_ComboBox_CAL2_ResultSort_07 | 우측 상단 | Top right |
| ID_MEASURE_ComboBox_CAL2_ResultSort_08 | 우측 중심 | Center right |
| ID_MEASURE_ComboBox_CAL2_ResultSort_09 | 우측 하단 | Bottom right |
| ID_MEASURE_ComboBox_CAL2_Unit_01 | m2 | m² |
| ID_MEASURE_ComboBox_CAL2_Unit_02 | km2 | km² |
| ID_MEASURE_ComboBox_CAL2_Unit_06 | in2 | in² |
| ID_MEASURE_ComboBox_CAL2_Unit_07 | ft2 | ft² |
| ID_MEASURE_ComboBox_CAL2_Unit_08 | yd2 | yd² |
| ID_MEASURE_ComboBox_CL_AlignType_01 | 상단 중심 | Top Center |
| ID_MEASURE_ComboBox_CL_AlignType_02 | 중간 중심 | Middle Center |
| ID_MEASURE_ComboBox_CL_AlignType_03 | 하단 중심 | Bottom Center |
| ID_MEASURE_ComboBox_CL_LengthType_01 | 이상 | Greater than or equal to |
| ID_MEASURE_ComboBox_CL_LengthType_02 | 이하 | Less than or equal to |
| ID_MEASURE_ComboBox_CL_LengthType_03 | 초과 | Greater than |
| ID_MEASURE_ComboBox_CL_LengthType_04 | 미만 | Less than |
| ID_MEASURE_ComboBox_DPType_01 | 반올림 | Round |
| ID_MEASURE_ComboBox_DPType_02 | 올림 | Round up |
| ID_MEASURE_ComboBox_DPType_03 | 내림 | Round down |
| ID_MEASURE_ComboBox_SD_ScaleList_07 | 직접 입력 | User input |
| ID_MEASURE_DFS_SelectDrawing | 블록 또는 외부참조 도곽 선택 | Select a block drawing or xref drawing. |
| ID_MEASURE_DIT_DistanceText | 지정한 두 점 사이의 거리를 도면에 문자로 씁니다. | Writes distance between two specified points in drawing as text. |
| ID_MEASURE_DIT_SamePoint | 같은 지점을 선택할 수 없습니다 | Cannot select the same point |
| ID_MEASURE_DIT_SelectTextObject | 문자 객체를 선택해주세요. | Please select a text object. |
| ID_MEASURE_DIT_SelectTextToModify | 수정할 문자 선택 | Select texts to modify |
| ID_MEASURE_FINDBLOCK_TITLE | 블록 찾기 | FINDBLOCK |
| ID_MEASURE_GAR_AlreadyInquired | 는 이미 조회했습니다. | has already inquired. |
| ID_MEASURE_GAR_NoBoundariesFound | 의 경계를 찾을 수 없습니다 | No boundaries found |
| ID_MEASURE_GAR_Select | 선택 | Select |
| ID_MEASURE_GAR_SelectText | 지번-지목 문자 선택 | Lot number-select text |
| ID_MEASURE_GroupName_01 | 설정 | Settings |
| ID_MEASURE_GroupName_02 | 면적산출 옵션 | Area Calculation |
| ID_MEASURE_GroupName_03 | 해치 설정 | Hatch Settings |
| ID_MEASURE_GroupName_04 | 계산 대상 | Calculation Target |
| ID_MEASURE_GroupName_05 | 계산 방식 및 축척 | Methods & Scale |
| ID_MEASURE_GroupName_06 | 계산 및 옵션 | Calculation Options |
| ID_MEASURE_GroupName_07 | 공통 옵션 | Text Options |
| ID_MEASURE_GroupName_08 | 문자 옵션 | Text Options |
| ID_MEASURE_GroupName_09 | 길이 옵션 | Length Options |
| ID_MEASURE_GroupName_10 | 거리 옵션 | Distance Options |
| ID_MEASURE_GroupName_11 | 면적 옵션 | Area Options |
| ID_MEASURE_GroupName_12 | 기타 옵션 | Other Options |
| ID_MEASURE_GroupName_13 | 좌표 설정 | Coordinate System |
| ID_MEASURE_GroupName_14 | 문자 정렬 순서 | Text Sorting Order |
| ID_MEASURE_GroupName_15 | 문자 그리기 | Label Coordinates |
| ID_MEASURE_GroupName_16 | 점 유형 | Extract Points |
| ID_MEASURE_GroupName_17 | 중복 좌표 | Duplicate Coordinates |
| ID_MEASURE_GroupName_18 | 객체 선택 | Object Selection |
| ID_MEASURE_GroupName_19 | 일반 옵션 | General Options |
| ID_MEASURE_GroupName_20 | 색상 옵션 | Color Options |
| ID_MEASURE_GroupName_21 | 크기 옵션 | Size Options |
| ID_MEASURE_GroupName_22 | 거리 시작점 설정 | Set Start Point |
| ID_MEASURE_GroupName_23 | 문자 설정 | Label Settings |
| ID_MEASURE_GroupName_24 | 도면 단위 | Drawing Unit |
| ID_MEASURE_GroupName_25 | 용지 방향 | Paper Orientation |
| ID_MEASURE_GroupName_26 | 용지 크기 | Paper Size |
| ID_MEASURE_GroupName_27 | 선택 기준 | Select Mode |
| ID_MEASURE_GroupName_28 | 면적 설정 | Area Settings |
| ID_MEASURE_GroupName_29 | 해치 면적 구분 | Hatch Area Classification |
| ID_MEASURE_GroupName_30 | 표 옵션 | Table Options |
| ID_MEASURE_GroupName_31 | 색상 설정 | Color Settings |
| ID_MEASURE_GroupName_32 | 선 길이 | Line Length |
| ID_MEASURE_GroupName_33 | 문자 표기 | Text Labeling |
| ID_MEASURE_GroupName_34 | 기타 설정 | Other Settings |
| ID_MEASURE_GroupName_35 | 좌표계 | Coordinate System |
| ID_MEASURE_GroupName_36 | 형상 | Shape |
| ID_MEASURE_HAR_AreaQuery | 해치 패턴 별 면적 조회 | Area query by hatch pattern |
| ID_MEASURE_HAR_Check | 하나이상의 옵션을 체크해주시기 바랍니다.  | Check at least one option. |
| ID_MEASURE_HAR_Color | 색 상 | Color |
| ID_MEASURE_HAR_Hatch | 해치 객체 선택 | Select hatch object |
| ID_MEASURE_HAR_Layer | 레이어 | Layers |
| ID_MEASURE_HAR_Pattern | 패 턴 | Pattern |
| ID_MEASURE_HAR_Sortation | 구 분 | Sortation |
| ID_MEASURE_HAR_Table | 표 삽입점 지정 | Specify table insertion point |
| ID_MEASURE_HAR_TextBox_01 | 총 계 | Total |
| ID_MEASURE_HAR_Total | 총 계 | Total |
| ID_MEASURE_INQUIRECOLOR_ExportToTxtFile | txt파일로 내보내기 | Export to txt file |
| ID_MEASURE_INQUIRECOLOR_NoContentToSave | 저장할 내용이 없습니다. | There is no content to save. |
| ID_MEASURE_INQUIRECOLOR_SaveTxtFile | 색상 조회 목록 텍스트파일로 저장 | Save color lookup list as a text file |
| ID_MEASURE_INQUIRECOLOR_SelectInsideObject | 블록 또는 외부참조의 내부객체를 선택해주세요. | Please select an internal object for block or external reference. |
| ID_MEASURE_INQUIRECOLOR_SelectObjectBlock | 외부참조, 블록 내부 객체 선택 | External reference, selecting objects inside the block |
| ID_MEASURE_INQUIRECOLOR_SelectObjectToColor | 색상을 조회할 객체 선택 | Select the object to look up the color |
| ID_MEASURE_INQUIRECOLOR_TextFile | 텍스트파일 (*.txt)|*.txt | TextFile (*.txt)|*.txt |
| ID_MEASURE_MASSPROP_Area | 면적 | Area |
| ID_MEASURE_MASSPROP_BottomX | 하단 X | Bottom X |
| ID_MEASURE_MASSPROP_BoundaryBox | 경계 상자 | Boundary box |
| ID_MEASURE_MASSPROP_Center | 도심 | Center |
| ID_MEASURE_MASSPROP_Circumference | 둘레 | Circumference |
| ID_MEASURE_MASSPROP_InertialCavity | 관성 곱 | the product of inertia |
| ID_MEASURE_MASSPROP_MainMomentDirection | 도심에 대한 주 모멘트와 X-Y 방향 | Main Moment and X-Y Direction for the City Center |
| ID_MEASURE_MASSPROP_MomentOfInertia | 관성 모멘트 | Moment of inertia |
| ID_MEASURE_MASSPROP_NoSetExternalBoundary | 외부 경계를 설정할 수 없습니다. | Unable to set external boundary. |
| ID_MEASURE_MASSPROP_RadiusOfRotation | 회전 반경 | the radius of rotation |
| ID_MEASURE_MASSPROP_SelectHatch | 물성치 계산을 위한 해치 객체 선택 | Hatch object selection for property value calculation |
| ID_MEASURE_MASSPROP_TopX | 상단 X | Top X |
| ID_MEASURE_MG_Angle | 각도 | Angle |
| ID_MEASURE_MG_AngleFrom | XY 평면으로부터의 각도 | Angle from XY plane |
| ID_MEASURE_MG_AngleIn | XY 평면에서의 각도 | Angle in XY plane |
| ID_MEASURE_MG_AngleOpt | 각도(A) | Angle(A) |
| ID_MEASURE_MG_Arc | 호(A) | Arc(A) |
| ID_MEASURE_MG_ArcCircle | 호 또는 원 선택 | Select Arc or Circle |
| ID_MEASURE_MG_CenterpointArc | 호의 중심점 지정 | Specify center point of arc |
| ID_MEASURE_MG_DirectionChord | 호에 대한 현의 방향 지정 | Specify direction of chord to arc |
| ID_MEASURE_MG_Distance | 거리(D) | Distance(D) |
| ID_MEASURE_MG_DistanceText | 지정한 두 점 사이의 거리를 도면에 문자로 씁니다. | Writes distance between two specified points in drawing as text. |
| ID_MEASURE_MG_EndpontArc | 호의 끝점 지정 | Specify endpoint of an arc |
| ID_MEASURE_MG_EndpontArcOr | 호의 끝점 지정 또는 | Specify the endpoint of an arc or |
| ID_MEASURE_MG_Incremental | 증분 | Incremental |
| ID_MEASURE_MG_Length | 길이(L) | Length(L) |
| ID_MEASURE_MG_LengthChord | 현의 길이 지정 | Specify length of chord |
| ID_MEASURE_MG_LengthLine | 선의 길이 지정 | Specify length of line |
| ID_MEASURE_MG_Multipoint | 다중점(M) | Multipoint(M) |
| ID_MEASURE_MG_Next | 다음 점 또는 | Next Point or |
| ID_MEASURE_MG_NextClick | 다음점 클릭 또는 | Click next point or |
| ID_MEASURE_MG_Object | 객체 선택 | Select Object |
| ID_MEASURE_MG_Option | 옵션 선택 | Select option |
| ID_MEASURE_MG_Radius | 반지름(R) | Radius(R) |
| ID_MEASURE_MG_RadiusArc | 호의 반지름 지정 | Specify radius of arc |
| ID_MEASURE_MG_SecondAngle | 두 번째 각도 끝점 지정 | Select second angle endpoint |
| ID_MEASURE_MG_SecondArc | 호 위의 두번째 점 지정 | Specify second point of arc |
| ID_MEASURE_MG_SpecifyAngle | 사이각 지정 | Specify angle |
| ID_MEASURE_MG_SquareMeasure | 면적(M) | SquareMeasure(M) |
| ID_MEASURE_MG_Tangent | 호의 시작점에 대해 접선 방향을 지정 | Specify tangential direction to arc start point |
| ID_MEASURE_MG_Total | 합계(T) | Total(T) |
| ID_MEASURE_MG_Undo | 명령취소(U) | Undo(U) |
| ID_MEASURE_MG_Volume | 체적(V) | Volume(V) |
| ID_MEASURE_QLIST_Select | 면적 및 길이를 산출할 객체 선택 | Select an object to calculate its area and length |
| ID_MEASURE_RadioButton_CAL2_01 | 문자 | Text |
| ID_MEASURE_RadioButton_CAL2_02 | 치수 | Dimension |
| ID_MEASURE_RadioButton_CAL2_03 | 객체길이 | Object length |
| ID_MEASURE_RadioButton_CAL2_04 | 거리 | Distance |
| ID_MEASURE_RadioButton_CAL2_05 | 수평거리 | Dist (Hor.) |
| ID_MEASURE_RadioButton_CAL2_06 | 수직거리 | Dist (Ver.) |
| ID_MEASURE_RadioButton_CAL2_07 | 수식 | Formula |
| ID_MEASURE_RadioButton_CAL2_08 | 면적(점) | Area (Point) |
| ID_MEASURE_RadioButton_CAL2_09 | 면적(객체) | Area (Object) |
| ID_MEASURE_RadioButton_CAL2_14 | 평균 | Avg. |
| ID_MEASURE_RadioButton_CAL2_15 | 현재 레이어 | Current layer |
| ID_MEASURE_RadioButton_CAL2_16 | 사용자 지정 | User define |
| ID_MEASURE_RadioButton_CAL2_17 | 단위 수량 | Unit q'ty |
| ID_MEASURE_RadioButton_CAL2_18 | 결과 값 | Result |
| ID_MEASURE_RadioButton_CCI_01 | 직접 객체 선택 | User selects objects directly |
| ID_MEASURE_RadioButton_CCI_02 | 지정 객체의 내부 선택 | Internal selection of a specified object |
| ID_MEASURE_RadioButton_CCI_03 | 객체 색상 유지 | Maintain Object color |
| ID_MEASURE_RadioButton_CCI_04 | Black 일괄 변경 | Change all to black |
| ID_MEASURE_RadioButton_CCI_05 | Gray 일괄 변경 | Change all to gray |
| ID_MEASURE_RadioButton_CCI_06 | 크기 수정 안함 | Do not change size |
| ID_MEASURE_RadioButton_CCI_07 | 크기에 대한 비율 | Scale ratio |
| ID_MEASURE_RadioButton_CCI_08 | 직접 입력(px) | Manual input (px) |
| ID_MEASURE_RadioButton_CEX_01 | 토목 좌표 | Civil |
| ID_MEASURE_RadioButton_CEX_02 | 수학 좌표 | Math |
| ID_MEASURE_RadioButton_CL_01 | 객체 중간 점 | Midpoint of object |
| ID_MEASURE_RadioButton_CL_02 | 사용자 지정 | User picks |
| ID_MEASURE_RadioButton_CL_03 | 기존 문자 교체 | Edit existing text |
| ID_MEASURE_RadioButton_CL_04 | 선 위 표기 | Above line |
| ID_MEASURE_RadioButton_CL_05 | 선 아래 표기 | Below line |
| ID_MEASURE_RadioButton_CL_06 | 레이어 이름 표기 | Layer name |
| ID_MEASURE_RadioButton_CL_07 | 지정 | User define |
| ID_MEASURE_RadioButton_DFS_01 | 가로 | Landscape |
| ID_MEASURE_RadioButton_DFS_02 | 세로 | Portrait |
| ID_MEASURE_RadioButton_DFS_13 | 2점 선택 | 2 points |
| ID_MEASURE_RadioButton_DFS_14 | 객체 선택 | Select object |
| ID_MEASURE_RadioButton_DIT_01 | 두 번째 점이 새 시작점 | Use last point as start |
| ID_MEASURE_RadioButton_DIT_02 | 첫 번째 점을 계속 사용 | Fixed start point |
| ID_MEASURE_RadioButton_DIT_03 | 점 사이 거리만 표기 | Label distance only |
| ID_MEASURE_RadioButton_DIT_04 | 완료할 때 거리 합계만 표기 | Label total distance only |
| ID_MEASURE_RadioButton_DIT_05 | 점 사이 거리 및 합계 표기 | Label both distance & total |
| ID_MEASURE_RadioButton_DIT_06 | 끝 점에 표기 | Display at the end point |
| ID_MEASURE_RadioButton_DIT_07 | 기존 문자 수정 | Edit existing text |
| ID_MEASURE_RadioButton_HAR_01 | 자동 | Auto |
| ID_MEASURE_RadioButton_HAR_02 | 지정 | Specify |
| ID_MEASURE_RadioButton_INQUIRECOLOR_01 | 선택한 모든 객체의 모든 색상 | All colors of selected |
| ID_MEASURE_RadioButton_INQUIRECOLOR_02 | 해치, 솔리드 색상만 | Hatches and Solids only |
| ID_MEASURE_RadioButton_XYP_01 | 토목 | Civil |
| ID_MEASURE_RadioButton_XYP_02 | 수학 | Math |
| ID_MEASURE_RCE_ExportPoint | 순서대로 지정한 점의 좌표를 일련 번호을 넣으면서 엑셀로 내보냅니다. | Export coordinates of points in order to Excel with inserting serial numbers. |
| ID_MEASURE_RCE_Number | 현재번호 | Current number |
| ID_MEASURE_RCE_One | 입력될 셀 하나만 선택해 주세요. | Select one cell to be entered. |
| ID_MEASURE_RCE_PickPoint | 엑셀로 좌표를 내보낼 점 지정 | Select point to export coordinates to Excel |
| ID_MEASURE_SD_Azimuth | 방위각 | Azimuth |
| ID_MEASURE_SD_Distance | 거리 | Distance |
| ID_MEASURE_SD_FirstPoint | 첫 번째 점 지정 | Specify the first point |
| ID_MEASURE_SD_SecondPoint | 두 번째 점 지정 | Specify the second point |
| ID_MEASURE_SD_Xincrement | X증분 | X increment |
| ID_MEASURE_SD_Yincrement | Y증분 | Y increment |
| ID_MEASURE_SD_Zincrement | Z증분 | Z increment |
| ID_MEASURE_TextBlock_ARET_01 | 축척 | Scale |
| ID_MEASURE_TextBlock_ARET_02 | 문자 높이 | Text height |
| ID_MEASURE_TextBlock_ARET_03 | 소수점자리(산출값) | Precision (Individual) |
| ID_MEASURE_TextBlock_ARET_04 | 소수점자리(합계) | Precision (Total) |
| ID_MEASURE_TextBlock_ARET_05 | 면적 단위 | Units |
| ID_MEASURE_TextBlock_ARET_06 | m2 | m² |
| ID_MEASURE_TextBlock_ARET_07 | km2 | km² |
| ID_MEASURE_TextBlock_ARET_09 | m2py | m² (py) |
| ID_MEASURE_TextBlock_ARET_12 | in2 | in² |
| ID_MEASURE_TextBlock_ARET_13 | ft2 | ft² |
| ID_MEASURE_TextBlock_ARET_14 | yd2 | yd² |
| ID_MEASURE_TextBlock_ARET_15 | 머리말 | Prefix |
| ID_MEASURE_TextBlock_ARET_16 | 꼬리말 | Suffix |
| ID_MEASURE_TextBlock_ARET_17 | 해치 레이어 | Layer |
| ID_MEASURE_TextBlock_ARET_18 | 해치 스케일 | Scale |
| ID_MEASURE_TextBlock_ARET_19 | 해치 각도 | Angle |
| ID_MEASURE_TextBlock_CAL2_01 | 계산 축척 | Calculation scale |
| ID_MEASURE_TextBlock_CAL2_02 | 문자 높이 | Text height |
| ID_MEASURE_TextBlock_CAL2_03 | 소수 자리 | Output decimals |
| ID_MEASURE_TextBlock_CAL2_04 | 산출식 창 적용 소수 자리 | Input decimals |
| ID_MEASURE_TextBlock_CAL2_05 | 글꼴 | Style |
| ID_MEASURE_TextBlock_CAL2_06 | 레이어 | Layer |
| ID_MEASURE_TextBlock_CAL2_07 | 정렬 | Justification |
| ID_MEASURE_TextBlock_CAL2_08 | 각도 | Angle |
| ID_MEASURE_TextBlock_CAL2_09 | 색상 | Color |
| ID_MEASURE_TextBlock_CAL2_10 | 머리말 | Prefix |
| ID_MEASURE_TextBlock_CAL2_11 | 꼬리말 | Suffix |
| ID_MEASURE_TextBlock_CAL2_12 | 클립보드에 복사 | Copy to Clipboard |
| ID_MEASURE_TextBlock_CAL2_13 | 선과 간격 | Line offset |
| ID_MEASURE_TextBlock_CAL2_14 | 위치 | at |
| ID_MEASURE_TextBlock_CAL2_15 | 선폭 | Global width |
| ID_MEASURE_TextBlock_CAL2_16 | 면적 산출 단위 | Calculation unit |
| ID_MEASURE_TextBlock_CAL2_17 | 해치 축척 | Hatch scale |
| ID_MEASURE_TextBlock_CAL2_18 | 증감 방식 | Inc/dec mode |
| ID_MEASURE_TextBlock_CAL2_19 | 증감 숫자 | Inc/dec number |
| ID_MEASURE_TextBlock_CAL2_20 | 결과 값 소수 적용 | Output decimals |
| ID_MEASURE_TextBlock_CAL2_21 | 산출 값 소수 적용 | Input decimals |
| ID_MEASURE_TextBlock_CCI_03 | 너비 | Width |
| ID_MEASURE_TextBlock_CCI_04 | 높이 | Height |
| ID_MEASURE_TextBlock_CEX_01 | 소수점 | Decimal places |
| ID_MEASURE_TextBlock_CEX_02 | 문자 높이 | Text height |
| ID_MEASURE_TextBlock_CEX_03 | 문자 레이어 | Text layer |
| ID_MEASURE_TextBlock_CL_01 | 산술 축척 | Scale |
| ID_MEASURE_TextBlock_CL_02 | 소수점 | Precis. |
| ID_MEASURE_TextBlock_CL_03 | 머리말 | Prefix |
| ID_MEASURE_TextBlock_CL_04 | 꼬리말 | Suffix |
| ID_MEASURE_TextBlock_CL_05 | 선과 간격 | Spacing between line |
| ID_MEASURE_TextBlock_CL_06 | 문자 위치 | Location |
| ID_MEASURE_TextBlock_CL_07 | 문자 정렬 | Justificat. |
| ID_MEASURE_TextBlock_CL_08 | 문자 표기 | Labeling on |
| ID_MEASURE_TextBlock_CL_09 | 선 반대 추가 문자 | Opposite side text |
| ID_MEASURE_TextBlock_CL_10 | 문자 글꼴 | Text style |
| ID_MEASURE_TextBlock_CL_11 | 문자 높이 | H : |
| ID_MEASURE_TextBlock_CL_12 | 폭 | W : |
| ID_MEASURE_TextBlock_CL_13 | 지정 길이 | Set length |
| ID_MEASURE_TextBlock_CL_14 | 사이 문자 | Add text |
| ID_MEASURE_TextBlock_DIT_01 | 거리 축척 | Scale factor |
| ID_MEASURE_TextBlock_DIT_02 | 거리 표기 | Output |
| ID_MEASURE_TextBlock_DIT_03 | 표기 방법 | Options |
| ID_MEASURE_TextBlock_DIT_04 | 문자 높이 | Text height |
| ID_MEASURE_TextBlock_DIT_05 | 소수점 | Precis. |
| ID_MEASURE_TextBlock_DIT_06 | 거리 머리말 | Prefix |
| ID_MEASURE_TextBlock_DIT_07 | 꼬리말 | Suffix |
| ID_MEASURE_TextBlock_DIT_08 | 합계 꼬리말 | Total: Prefix |
| ID_MEASURE_TextBlock_DTP_01 | 문자 높이 | Text height |
| ID_MEASURE_TextBlock_DTP_02 | 소수점 | Precision |
| ID_MEASURE_TextBlock_DTP_03 | 머리말 | Prefix |
| ID_MEASURE_TextBlock_DTP_04 | 꼬리말 | Suffix |
| ID_MEASURE_TextBlock_DTP_05 | 스케일 | Scale factor |
| ID_MEASURE_TextBlock_FINDBLOCK_01 | Layout | Space |
| ID_MEASURE_TextBlock_FINDBLOCK_03 | 도면에 블록이 없습니다. | There is no such block in the drawing. |
| ID_MEASURE_TextBlock_FINDBLOCK_04 | 해당하는 블록객체가 없습니다. | There is no corresponding block object. |
| ID_MEASURE_TextBlock_GAR_01 | 스케일 | Scale |
| ID_MEASURE_TextBlock_GAR_02 | 높이 | Height |
| ID_MEASURE_TextBlock_GAR_03 | 시작 번호 | Start number |
| ID_MEASURE_TextBlock_GAR_04 | 면적 반올림 | Precision |
| ID_MEASURE_TextBlock_GAR_05 | 조회한 항목 | Inspected Items |
| ID_MEASURE_TextBlock_GAR_07 | 지번 | Land lot number |
| ID_MEASURE_TextBlock_GAR_08 | 지목 | Land category |
| ID_MEASURE_TextBlock_GAR_09 | 면적 | Area |
| ID_MEASURE_TextBlock_GAR_10 | 조회된 항목이 없습니다 | There is no inspected items. |
| ID_MEASURE_TextBlock_HAR_01 | 산술 축척 | Arithmetic scale |
| ID_MEASURE_TextBlock_HAR_02 | 소수점 | Precision |
| ID_MEASURE_TextBlock_HAR_03 | 표에 합계 표기 문자 | Total lable in table |
| ID_MEASURE_TextBlock_HAR_04 | 해치 축척 | Hatch scale |
| ID_MEASURE_TextBlock_HAR_05 | 축척 입력 | Set scale |
| ID_MEASURE_TextBlock_HAR_06 | 문자 글꼴 | Text style |
| ID_MEASURE_TextBlock_HAR_07 | 문자 높이 | Text height |
| ID_MEASURE_TextBlock_HAR_08 | 폭 | Width factor |
| ID_MEASURE_TextBlock_HAR_09 | 문자 레이어 | Text layer |
| ID_MEASURE_TextBlock_HAR_10 | 표 레이어 | Table layer |
| ID_MEASURE_TextBlock_HATCHSEL_01 | 이름 또는 설명 검색 | Search Name or Description |
| ID_MEASURE_TextBlock_INQUIRECOLOR_01 | 색상 목록 | Color lists |
| ID_MEASURE_TextBlock_INQUIRECOLOR_02 | Color Index | Index Color |
| ID_MEASURE_TextBlock_INQUIRECOLOR_03 | True Color | True Color (RGB) |
| ID_MEASURE_TextBlock_LAYER | 레이어 | Layer |
| ID_MEASURE_TextBlock_RCE_01 | 문자 높이 | Text height |
| ID_MEASURE_TextBlock_RCE_02 | 소수점 자리 | Precision |
| ID_MEASURE_TextBlock_SD_01 | 축척        : | Scale to apply  : |
| ID_MEASURE_TextBlock_SD_02 | 소수 자리 : | Decimal places : |
| ID_MEASURE_TextBlock_SD_03 | 문자 높이 : | Text height      : |
| ID_MEASURE_TextBlock_SD_04 | 머리말     : | Prefix              : |
| ID_MEASURE_TextBlock_SD_05 | 꼬리말     : | Suffix              : |
| ID_MEASURE_TextBlock_XYP_01 | 문자 높이 | Text height |
| ID_MEASURE_TextBlock_XYP_02 | 소수점 | Precision |
| ID_MEASURE_TextBlock_XYP_03 | 소수 자리 | Precision |
| ID_MEASURE_TextBlock_XYP_04 | X,Y 다음 표기 문자 | Text after axis |
| ID_MEASURE_TextBlock_XYP_08 | 화살표 길이 | Arrow size |
| ID_MEASURE_TextBox_CAL2_01 | 현재 값 | Current |
| ID_MEASURE_XYP_Arrow | 화살표크기(A) | ArrowSize(A) |
| ID_MEASURE_XYP_ArrowSize | 화살표크기 입력 | Enter arrow size |
| ID_MEASURE_XYP_ChangeType | 좌표계 변경 | Change coordinate type |
| ID_MEASURE_XYP_Civil | 토목(C) | Civil(C) |
| ID_MEASURE_XYP_CoordinateType | 좌표계(C) | CoordinateType(C) |
| ID_MEASURE_XYP_Direction | 지시선 방향 점 지정 | Select leader direction point |
| ID_MEASURE_XYP_Math | 수학(M) | Mathematics(M) |
| ID_MEASURE_XYP_Next | 지시선 다음 점 지정 | Select leader next point |
| ID_MEASURE_XYP_PointWrite | 좌표를 표기할 점 지정 | Select point to write coordinates |
| ID_MEASURE_XYP_WriteCoordinate | 지정한 점의 X,Y 좌표를 표기합니다. | Writes X,Y coordinates of specified point. |
| ID_OPTIONS_CommandButton_ALWSAVEALL | 열려있는 모든 도면을 한번에 저장하시겠습니까? | Do you want to save all open drawings at once? |
| ID_OPTIONS_CommandButton_CMDENGONLY | 명령창에 항상 영문으로 입력 | Only English in the command prompt |
| ID_OPTIONS_CommandButton_HMOPT1 | 출력물의 이미지 밝기 보정 | Correct the image brightness |
| ID_OPTIONS_CommandButton_INITWINDOW | 팝업창과 속성창의 위치를 초기화합니다. | Initialize the window positions. |
| ID_OPTIONS_CommandButton_THOUSANDSEP | 길이와 면적에 천단위 구분기호 사용 | Length and area ​​are displayed with thousands separators |
| ID_OSMODE_CheckBox_MYOSNAP_01 | 끝점 | End point |
| ID_OSMODE_CheckBox_MYOSNAP_02 | 삽입점 | Insert point |
| ID_OSMODE_CheckBox_MYOSNAP_03 | 중간점 | Mid point |
| ID_OSMODE_CheckBox_MYOSNAP_04 | 직교점 | Orthogonal point |
| ID_OSMODE_CheckBox_MYOSNAP_05 | 중심점 | Center point |
| ID_OSMODE_CheckBox_MYOSNAP_06 | 접점 | Contact point |
| ID_OSMODE_CheckBox_MYOSNAP_07 | 노드 | Nod point |
| ID_OSMODE_CheckBox_MYOSNAP_08 | 근처점 | Nearby point |
| ID_OSMODE_CheckBox_MYOSNAP_09 | 사분점 | Quadrant |
| ID_OSMODE_CheckBox_MYOSNAP_10 | 가상교차점 | Virtual intersect point |
| ID_OSMODE_CheckBox_MYOSNAP_11 | 교차점 | Intersact point |
| ID_OSMODE_CheckBox_MYOSNAP_12 | 평행선 | Parallel line |
| ID_OSMODE_CheckBox_MYOSNAP_13 | 연장선 | Extension line |
| ID_OSMODE_ComboBox_MYOSNAP_Rbt_01 | 설정 1 | Setting 1 |
| ID_OSMODE_ComboBox_MYOSNAP_Rbt_02 | 설정 2 | Setting 2 |
| ID_OSMODE_ComboBox_MYOSNAP_Rbt_03 | 설정 3 | Setting 3 |
| ID_OSMODE_ComboBox_MYOSNAP_Rbt_04 | 설정 4 | Setting 4 |
| ID_OSMODE_ComboBox_MYOSNAP_Rbt_05 | 설정 5 | Setting 5 |
| ID_OSMODE_ComboBox_MYOSNAP_Rbt_06 | 설정 6 | Setting 6 |
| ID_OSMODE_ComboBox_MYOSNAP_Rbt_07 | 설정 7 | Setting 7 |
| ID_OSMODE_ComboBox_MYOSNAP_Rbt_08 | 설정 8 | Setting 8 |
| ID_OSMODE_ComboBox_MYOSNAP_Rbt_09 | 설정 9 | Setting 9 |
| ID_OSMODE_ComboBox_MYOSNAP_Rbt_10 | 설정 10 | Setting 10 |
| ID_PFL_Add | 추가 | Add |
| ID_PFL_AllDelete | 전체 삭제 | Delete All |
| ID_PFL_ALLDELETE_Message | 도곽 목록을 전체 삭제하시겠습니까?  기존 속성블록 도곽은 목록에 유지됩니다. | Do You Want to Delete the Entire Title Block List?   Existing Attribute Block Title Blocks Will Be Retained in the List. |
| ID_PFL_Delete | 선택 삭제 | Delete |
| ID_PFL_DELETE_Error_Sepcific | 삭제할 수 없는 도곽(속성블록)이 포함되어 있어서, 도곽이 아닌 블록목록만 삭제합니다. | Contains an Undeletable Title Block (Attribute Block), Only Non-Title Blocks Will Be Deleted. |
| ID_PFL_DELETE_Error1 | 삭제할 수 없는 도곽(속성블록)입니다. | Undeletable Title Block (Attribute Block). |
| ID_PFL_FrameList | 도곽 리스트 | Frame Title |
| ID_PFL_FrameName | 도곽 이름 | Frame Name |
| ID_PFL_Hint_NoBlocks | 추가된 도곽이 없습니다. | No Title Blocks Added. |
| ID_PFL_LayoutTabSwitch | Layout 변경 | Change Layout |
| ID_PFL_PROMPT_Add | 블록 또는 속성블록 객체 선택 | Select Block or Attribute Block Objects. |
| ID_PFL_PROMPT_Add_Reject | 선택된 객체가 블록 또는 속성블록이어야 합니다. | The Selected Object Must Be a Block or Attribute Block. |
| ID_PFL_PROMPT_Error_DuplicateBlockList | 이미 추가된 블록입니다. | Block Already Added. |
| ID_PFL_PROMPT_SelectNone | 선택된 내용이 없습니다. | No Selection Made. |
| ID_PFL_Title | 도곽, 일반 블록 리스트 | Frame, Normal Block List |
| ID_PFL_ToolTip_Add | 새로운 블록을 선택하여 도곽으로 추가합니다. | Select a New Block to Add as a Title Block. |
| ID_PFL_ToolTip_AllDelete | 목록에 존재하는 도곽을 전체 삭제합니다. | Delete All Title Blocks in the List. |
| ID_PFL_ToolTip_Delete | 현재 선택되어 있는 도곽을 목록에서 삭제합니다. | Remove the Currently Selected Title Block from the List. |
| ID_PFL_Type | 종류 | Type |
| ID_PS_ADD | 새로 만들기 | Add |
| ID_PS_CURRENT | 현재로 설정 | Set Current |
| ID_PS_DELETE | 삭제 | Delete |
| ID_PS_Details_Description | 설명 | Description |
| ID_PS_Details_Device | 장치 이름 | Device name |
| ID_PS_Details_DeviceLocation | 위치 | Location |
| ID_PS_Details_DeviceType | 분류 | Type |
| ID_PS_Details_PrintSize | 플롯 크기 | Print size |
| ID_PS_DeviceKind_FileType | 파일 | File |
| ID_PS_DeviceKind_HardwareColor | 컬러 프린터 | Color printer |
| ID_PS_DeviceKind_HardwareMonochrome | 흑백 프린터 | Monochrome printer |
| ID_PS_DeviceKind_HardwarePlotter | 플로터 | Plotter |
| ID_PS_ERR_AddFailed | 페이지 설정 새로 만들기에 실패했습니다. | Failed to create new plot settings. |
| ID_PS_ERR_CurrentFailed | 현재로 설정하는데 문제가 발생했습니다. | Was a problem setting it up at the current. |
| ID_PS_ERR_DeleteFailed | 페이지 설정을 삭제하는데 문제가 발생했습니다. | Was a problem deleting the plot settings. |
| ID_PS_ERR_DuplicatePlotSettings | '{0}'은(는) 이미 있는 페이지 설정입니다. | '{0}'is a plot setting that already exists. |
| ID_PS_ERR_ExecutePageSetup | 페이지 설정 관리자를 실행하는데 문제가 발생했습니다. | There was a problem running the PageSetup Manager. |
| ID_PS_ERR_ImportFailed | 페이지 설정을 가져올 수 없습니다. | Failed to get plot settings. |
| ID_PS_ERR_InvalidImportFile | '{0}'은(는) 잘못된 파일 경로입니다. | '{0}'is an invalid file path. |
| ID_PS_ERR_InvalidPlotSettingsName | 유효하지 않은 페이지 설정 이름입니다. | Invalid plot setting name. |
| ID_PS_ERR_Modify | 페이지 설정 수정에 문제가 발생했습니다. | Was a problem modifying the plot settings. |
| ID_PS_FitPaper | 용지에 맞춤 | Fit to paper |
| ID_PS_FrameOrder_DULR_1 | 아래 -> 위 정렬 우선 | Bottom-to-Top Alignment Priority |
| ID_PS_FrameOrder_DULR_2 | 좌 -> 우 방향으로 출력 | Out Left-to-Right |
| ID_PS_FrameOrder_LRDU_1 | 좌 -> 우 정렬 우선 | Left-to-Right Alignment Priority |
| ID_PS_FrameOrder_LRDU_2 | 아래 -> 위 방향으로 출력 | Out Bottom-to-Top |
| ID_PS_FrameOrder_LRUD_1 | 좌 -> 우 정렬 우선 | Left-to-Right Alignment Priority |
| ID_PS_FrameOrder_LRUD_2 | 위 -> 아래 방향으로 출력 | Out Top-to-Bottom |
| ID_PS_FrameOrder_UDLF_1 | 위 -> 아래 정렬 우선 | Top-to-Bottom Alignment Priority |
| ID_PS_FrameOrder_UDLF_2 | 좌 -> 우 방향으로 출력 | Out Left-to-Right |
| ID_PS_IMPORT | 가져오기 | Import |
| ID_PS_IpAddress | IP 주소 : | IP Address |
| ID_PS_LoadPlotStyleTable | CTB 불러오기 | Load CTB |
| ID_PS_MODIFY | 수정 | Modify |
| ID_PS_NoneDevice_Name | 없음 | None |
| ID_PS_NonePlotSettings | <없음> | <None> |
| ID_PS_Orientation_Landscape | 가로 | Landscape |
| ID_PS_Orientation_Portrait | 세로 | Portrait |
| ID_PS_Orientation_UpsideDown | 대칭으로 플롯 | Upside-down |
| ID_PS_PaperRoll | 롤지 | Roll paper |
| ID_PS_PaperStandard | 규격 용지 | Standard paper |
| ID_PS_PaperUser | 사용자 용지 | Custom paper |
| ID_PS_PlotCentered | 플롯의 중심 | Center on page |
| ID_PS_PlotPlotStyles | 플롯 스타일로 플롯 | Print styles |
| ID_PS_PlotRanges_AllEntities | 모든 객체 영역 출력 | Limits |
| ID_PS_PlotRanges_None | 화면 표시 | Display |
| ID_PS_PlotRanges_SelectFrame | 도곽 맞춤 출력 | Extents |
| ID_PS_PlotRanges_UserArea | 영역 지정 | Window |
| ID_PS_PlotTransparency | 플롯 투명도 | Transparency |
| ID_PS_PREVIEW | 미리보기 | Preview |
| ID_PS_PrintLineweights | 객체 선가중치 플롯 | Object lineweights |
| ID_PS_PROMPT_MaxPoint | 반대 구석 지정 | Select second corner of window |
| ID_PS_PROMPT_MinPoint | 첫 번째 구석 지정 | Select first corner of window |
| ID_PS_Question_Editing | 페이지 설정을 편집 중입니다. 편집을 중단하고 페이지 설정 관리자를 종료하시겠습니까? | Editing plot settings. Do you want to abort editing and closes Page Setup Manager? |
| ID_PS_Question_ImportDuplicate | 페이지 설정 '{0}'이(가) 이미 정의되어 있습니다. 재정의 하시겠습니까? | Plot settings '{0}' are already defined. Do you want to override it? |
| ID_PS_ShadePlotTypes_AsDisplayed | 표시되는 대로 | As displayed |
| ID_PS_ShadePlotTypes_Hidden | 기존 숨김 | Hidden |
| ID_PS_ShadePlotTypes_Rendered | 렌더 | Rendered |
| ID_PS_ShadePlotTypes_Wireframe | 기존 와이어프레임 | Wireframe |
| ID_PS_SubTitle_Details | 페이지 설정 상세 정보 | Page Setup Details |
| ID_PS_SubTitle_Orientation | 도면 방향 | Drawing Orientation |
| ID_PS_SubTitle_Paper | 용지 | Paper |
| ID_PS_SubTitle_PlotOffset | 간격 띄우기 | Plot Offset |
| ID_PS_SubTitle_PlotOptions | 플롯 옵션 | Plot Options |
| ID_PS_SubTitle_PlotRange | 출력 영역 | Plot Area |
| ID_PS_SubTitle_PlotStyleTable | 플롯 스타일 테이블 | Print Style Table |
| ID_PS_SubTitle_Printer | 프린터 / 플로터 | Printer/Plotter |
| ID_PS_SubTitle_ShadedViewport | 음영 플롯 옵션 | Shaded Viewport Options |
| ID_PS_Title | 페이지 설정 관리자 | PageSetup Manager |
| ID_PS_ToolTip_ADD | 새 페이지 설정을 생성합니다. 편집 후 적용 시 새 페이지 설정이 추가됩니다. | Create a new plot setting. New plot settings are added when applied after editing. |
| ID_PS_ToolTip_Apply | 편집한 설정을 페이지 설정에 적용합니다. | Apply the edited settings to the plot settings. |
| ID_PS_ToolTip_CURRENT | 선택한 페이지 설정을 현재 배치의 현재 페이지 설정으로 지정합니다. | Specifies the selected plot settings as the current plot settings for the current batch. |
| ID_PS_ToolTip_DELETE | 선택한 페이지 설정을 삭제합니다. | Delete the selected plot settings. |
| ID_PS_ToolTip_Device | 현재 배치에서 선택할 수 있는 장치를 나열합니다. 장치 이름 앞의 아이콘은 해당 장치가 흑백, 컬러, 플로터 장치인지 혹은 파일 출력 장치인지를 나타냅니다. | Lists the devices that you can select from the current batch. The icon before the device name indicates whether the device is a monochrome, color, plotter device, or file out device. |
| ID_PS_ToolTip_EditPlotStyleTable | 플롯 스타일 테이블을 편집합니다. | Edit the plot style table. |
| ID_PS_ToolTip_ExistCurrentStyleSheet | 경로에 플롯 스타일 테이블이 존재하지 않습니다. | Plot style table does not exist in path. |
| ID_PS_ToolTip_FitPaper | 플롯을 선택한 용지 크기에 맞게 축척합니다. | Scale the plot to fit the selected paper size. |
| ID_PS_ToolTip_IMPORT | 다른 도면 파일에서 페이지 설정을 가져옵니다. | Import plot settings from another drawing file. |
| ID_PS_ToolTip_ImportPlotSettings | 선택한 페이지 설정을 가져옵니다. | Gets the selected plot settings. |
| ID_PS_ToolTip_InitPlotStyleTable | 플롯 스타일 테이블을 초기화합니다. | Initialize the plot style table. |
| ID_PS_ToolTip_Landscape | 용지의 폭이 긴 쪽이 페이지 위가 되도록 도면의 방향을 맞추고 플롯합니다. | Orient and plot the drawing so that the longer side of the paper is above the page. |
| ID_PS_ToolTip_LoadPlotStyleTable | 플롯 스타일 테이블을 설정합니다. | Set the plot style table. |
| ID_PS_ToolTip_MaxPoint | 두 번째 구석 | Second corner point |
| ID_PS_ToolTip_MinPoint | 첫 번째 구석 | First corner point |
| ID_PS_ToolTip_MODIFY | 선택한 페이지 설정에 대한 설정을 편집합니다. 편집 후 적용 시 편집한 설정이 적용되며, 취소 시 적용되지 않고 이전 페이지 설정으로 되돌립니다. | Edit the settings for the selected plot settings. Edited settings are applied when applying after editing, and the previous plot settings are maintained without being applied when canceling. |
| ID_PS_ToolTip_NoneSetPlotWindowArea | 영역이 지정되지 않았습니다. | No areas were specified. |
| ID_PS_ToolTip_Paper | 현재 장치에서 선택할 수 있는 용지 크기를 나열합니다. 사용자 용지의 세로, 가로 길이를 지정한 경우 사용자 지정 용지 크기를 사용합니다. | Lists the size of the paper that can be selected on the current device. Use a custom paper size if you specify the length and width of your paper. |
| ID_PS_ToolTip_PlotCentered | 용지 중앙에 플롯을 배치하기 위한 X 및 Y 간격 띄우기 값을 자동으로 계산합니다. | Automatically calculates the X and Y spacing values for placing plots in the center of the paper. |
| ID_PS_ToolTip_PlotCentered_X | 플롯 간격 띄우기 정의 옵션의 설정에 대해 X 방향으로 플롯 원점을 지정합니다. | Specify the plot origin in the X direction for the setting of the Plot Interval Definition option. |
| ID_PS_ToolTip_PlotCentered_Y | 플롯 간격 띄우기 정의 옵션의 설정에 대해 Y 방향으로 플롯 원점을 지정합니다. | Specify the plot origin in the Y direction for the setting of the Plot Interval Definition option. |
| ID_PS_ToolTip_PlotPlotStyles | 객체 및 도면층에 적용된 플롯 스타일의 플롯 여부를 지정합니다. | Specifies whether plot styles applied to objects and layers are plotted or not. |
| ID_PS_ToolTip_PlotRange | 현재 페이지 설정의 출력 영역을 지정합니다. | Specifies the out area of the current plot settings. |
| ID_PS_ToolTip_PlotRanges_AllEntities | 도면 중 객체를 포함하고 있는 현재 공간 부분을 플롯합니다. 현재 공간에 있는 모든 형상이 플롯됩니다 | Plot the current space portion of the drawing that contains the object. All features in the current space are plotted. |
| ID_PS_ToolTip_PlotRanges_None | 현재 배치의 현재 뷰포트에 뷰를 플롯합니다. | Plots the view to the current viewport in the current batch. |
| ID_PS_ToolTip_PlotRanges_SelectFrame | 도면 내에 속성블록으로 지정된 도곽을 기준으로 플롯합니다. 도곽의 개수에 따라 리스트로 생성됩니다. | Plot based on the plot designated as an attribute block within the drawing. It is created as a list based on the number of plots. |
| ID_PS_ToolTip_PlotRanges_UserArea | 사용자가 지정하는 모든 도면 부분을 플롯합니다. 윈도우를 선택하면 윈도우 버튼을 사용할 수 있게 됩니다. 윈도우 버튼을 클릭하여 좌표 입력 장치로 플롯할 영역의 두 개 구석을 지정하거나 좌표값을 입력합니다. | Plot all parts of the drawing that you specify. When Windows is selected, the Windows button becomes available. Click the window button to specify two corners of the area to plot to the coordinate in device, or enter a coordinate value. |
| ID_PS_ToolTip_PlotSettingses | 현재 적용하거나 사용 가능한 페이지 설정을 나열합니다. | Lists the plot settings currently applied or available. |
| ID_PS_ToolTip_PlotSettingsName | 페이지 설정 이름을 입력하거나 수정합니다. 모든 배치의 페이지 설정 이름은 중복될 수 없습니다. 배치 페이지 설정의 경우, 페이지 설정 이름을 수정할 수 없습니다. | Enter or modify the plot settings name. The plot settings names for all batches cannot be duplicated. For batch plot settings, you cannot modify the plot settings name. |
| ID_PS_ToolTip_PlotTransparency | 객체 투명도를 플롯하는지 여부를 지정합니다. 이 옵션은 투명 객체로 도면을 플로팅할 때만 사용해야 합니다. | Specifies whether to plot object transparency. This option should only be used when plotting a drawing with a transparent object. |
| ID_PS_ToolTip_Portrait | 용지의 폭이 짧은 쪽이 페이지 위가 되도록 도면의 방향을 맞추고 플롯합니다. | Orient and plot the drawing so that the shorter side of the paper is above the page. |
| ID_PS_ToolTip_Preview | 페이지 설정을 적용 후 인쇄되는 도면을 미리 볼 수 있습니다. | Can preview the drawings that are printed after applying plot settings. |
| ID_PS_ToolTip_PrintLineweights | 객체와 도면층에 지정된 선가중치가 플롯될 지 여부를 지정합니다. | Specifies whether the line weights specified for the object and layer are plotted. |
| ID_PS_ToolTip_ShadePlotType_AsDisplayed | 화면에 표시되는 방식대로 객체를 플롯합니다. | Asdisplayed |
| ID_PS_ToolTip_ShadePlotType_Hidden | 기존 SHADEMODE 명령을 사용하는 은선이 제거된 객체(화면에서 표시되는 방식과는 관계없음)입니다. | Hidden Line Objects Using the Legacy SHADEMODE Command (Regardless of Display Method) |
| ID_PS_ToolTip_ShadePlotType_Rendered | 화면에 표시되는 방식에 관계없이 객체를 렌더링된 상태로 플롯합니다. | Plot Objects in Rendered State Regardless of Display Method |
| ID_PS_ToolTip_ShadePlotType_Wireframe | 기존 SHADEMODE 명령을 사용하는 와이어프레임의 객체(화면에서 표시되는 방식과는 관계없음)입니다. | Wireframe Objects Using the Legacy SHADEMODE Command (Regardless of Display Method) |
| ID_PS_ToolTip_Unit | 용지 크기 기반의 표시 단위입니다. 픽셀은 이미지 장치를 선택했을 때 사용이 가능합니다. | Display unit based on paper size. Pixels are available when the image device is selected. |
| ID_PS_ToolTip_UpsideDown | 도면의 위아래를 뒤집어 플롯합니다. | Flip the top and bottom of the drawing to plot. |
| ID_PS_ToolTip_UserArea_Description | 인쇄할 도면의 영역의 두 구석을 지정합니다. 직사각형 영역의 두 반대쪽 모서리의 X, Y 좌표를 입력하거나, 영역을 클릭하여 도면에서 좌표를 지정합니다. | Specifies two corners of the area of the drawing to be printed. Enter the X, Y coordinates of the two opposite edges of the rectangular area, or click the area to specify the coordinates in the drawing. |
| ID_PS_UNIT_Millimeters | 밀리미터 | mm |
| ID_PS_UNIT_Pixels | 픽셀 | Pixel |
| ID_PS_Watermark_PlotSettingsName | 페이지 설정 이름을 입력하세요. | Please enter a plot setting name. |
| ID_STRUCT_AR_Create | ARC 객체를 선택하여 점철근을 생성한다. | Create rebars by selecting ARC objects. |
| ID_STRUCT_AR_Select | ARC(호) 객체를 선택하세요. | Select ARC object. |
| ID_STRUCT_BASE_Create | 선꼴스타일을 생성합니다. | line type would be created. |
| ID_STRUCT_BASE_Fail1 |  | Failed to load block |
| ID_STRUCT_BASE_Fail2 |  블록을 불러오지 못했습니다. | . |
| ID_STRUCT_BASE_Load | 블록을 불러왔습니다. | Block loaded. |
| ID_STRUCT_BASE_No | 객체가 존재하지 않습니다. 관리자에게 문의해주시기바랍니다. | object does not exist. Please contact the administrator. |
| ID_STRUCT_BASE_Select | 선택 할 수 있는 객체 타입 | Selectable object types |
| ID_STRUCT_CheckBox_DETM_01 | 특정 이름을 포함한 블록만 선택 | Select blocks with specific name |
| ID_STRUCT_CheckBox_RBOF_01 | 새 레이어 사용 | Create new layer |
| ID_STRUCT_CheckBox_REBARTABLE_01 | 직경별 철근집계표 추가 | Add diameter summary |
| ID_STRUCT_CLAYER_Assembly | 조립철근선 | Assembly Reinforcement Line |
| ID_STRUCT_CLAYER_Block | 블록 | Block |
| ID_STRUCT_CLAYER_Concrete | 콘크리트 | Concrete |
| ID_STRUCT_CLAYER_ConcreteDot | 콘크리트 구조물(점선) | Concrete Structure (Dotted Line) |
| ID_STRUCT_CLAYER_ConcreteRef | 콘크리트 구조물(참조) | Concrete Structure (Reference) |
| ID_STRUCT_CLAYER_ConcreteSol | 콘크리트 구조물(실선) | Concrete Structure (Solid Line) |
| ID_STRUCT_CLAYER_Content | 재료표 내용문자 | Material Table Content Text |
| ID_STRUCT_CLAYER_Create | 선택된 레이어를 생성하시겠습니까? | Do you want to create the selected layer? |
| ID_STRUCT_CLAYER_DimCom | 치수공통 | Dimension Common |
| ID_STRUCT_CLAYER_DimLine | 치수선 | Dimension Line |
| ID_STRUCT_CLAYER_DimText | 치수문자 | Dimension Text |
| ID_STRUCT_CLAYER_Fine | 재료표 가는 선 | Material Table Fine Lines |
| ID_STRUCT_CLAYER_Layer | 레이어 생성 | Create Layer |
| ID_STRUCT_CLAYER_LeadCom | 인출공통 | Lead Common |
| ID_STRUCT_CLAYER_LeadText | 인출문자 | Lead Text |
| ID_STRUCT_CLAYER_LeadTrack | 인출선 | Lead Track |
| ID_STRUCT_CLAYER_Lean | 린콘크리트 | Lean Concrete |
| ID_STRUCT_CLAYER_Num | 철근번호심벌 | Bar Number Symbol |
| ID_STRUCT_CLAYER_ReBar | 철근 | Reinforcing Bar |
| ID_STRUCT_CLAYER_ReBarDot | 철근(점선) | Reinforcing Bar (Dotted Line) |
| ID_STRUCT_CLAYER_ReBarRef | 철근(참조) | Reinforciing Bar (Reference) |
| ID_STRUCT_CLAYER_ReBarSol | 철근(실선) | Reinforcing Bar (Solid Line) |
| ID_STRUCT_CLAYER_SymbolCom | 심벌공통 | Symbol Common |
| ID_STRUCT_CLAYER_Table | 재료(집계)표 테이블 | Material(Total) Table |
| ID_STRUCT_CLAYER_TextCom | 문자공통 | Text Common |
| ID_STRUCT_CLAYER_Thick | 재료표 굵은 선 | Material Table Thick Lines |
| ID_STRUCT_CLAYER_Title | 재료표 제목문자 | Material Table Title Text |
| ID_STRUCT_CLT_Change | 선택된 길이만큼 철근의 선꼴을 HIDDEN으로 변경한다. | Change the line type of the rebar to HIDDEN by the selected length. |
| ID_STRUCT_CLT_Click | HIDDEN 선이 시작할 지점을 클릭하거나 거리를 입력하세요. | Click a point to start HIDDEN line, or enter a distance. |
| ID_STRUCT_CLT_Dist | 길이입력(D) | EnterDistance(D) |
| ID_STRUCT_CLT_Enter | HIDDEN 선의 길이를 입력하세요. (최대값 | Enter the length of the HIDDEN line. (Maximum value |
| ID_STRUCT_CLT_Re | 다시 입력해주세요. | Re-enter it. |
| ID_STRUCT_CLT_Scale | 선스타일의 Scale 값을 입력하세요. | Enter scale value for line type. |
| ID_STRUCT_CLT_Select | 직선 객체를 선택하세요. | Select a line object. |
| ID_STRUCT_CLT_Warn1 | 입력 값이 가장 짧은선의 길이 | Input value must be smaller than the length of the shortest line |
| ID_STRUCT_CLT_Warn2 | 보다 작아야합니다. | . |
| ID_STRUCT_COL_Count | 개수 | Count |
| ID_STRUCT_COL_Diameter | 직경 | Diameter |
| ID_STRUCT_COL_Length | 길이 | Length |
| ID_STRUCT_COL_Note | 비  고 | Note |
| ID_STRUCT_COL_Num | 번호 | Number |
| ID_STRUCT_COL_Size | 구  분 | Size |
| ID_STRUCT_COL_Sum | 요약 | Summary |
| ID_STRUCT_COL_TCWeight | 총중량(할증) | Total Weight(extra charge) |
| ID_STRUCT_COL_TLength | 총길이 | Total Length |
| ID_STRUCT_COL_TWeight | 총중량 | Total Weight |
| ID_STRUCT_COL_Type | 형식 | Type |
| ID_STRUCT_COL_UWeight | 단위중량 | Unit Weight |
| ID_STRUCT_COL_Weight | 철근중량(Ton) | Reinforcement Weight(Ton) |
| ID_STRUCT_CTC_Create | 철근마크블록을 선택하여 그 끝에 '철근 C.T.C'를 생성한다. | Select a reinforcement mark block to create a 'Rebar C.T.C.' at its end. |
| ID_STRUCT_DM_Create | 철근마크블록에 철근상세(블록)를 생성한다. | Create reinforcement details(blocks) on reinforcement mark blocks. |
| ID_STRUCT_EXBM_NoSelect | 철근마킹 블록이 없습니다. | There are no rebar marking blocks. |
| ID_STRUCT_EXBM_ResultCount | 개의 철근마킹 블록을 분해하였습니다. | rebar marking block(s) have been exploded. |
| ID_STRUCT_EXBM_SelectMark | 분해할 철근 마킹 선택 | Select the rebar marking to be explode. |
| ID_STRUCT_GAP_Enter | 간격을 입력하세요. | Enter the spacing. |
| ID_STRUCT_GAP_Modify | 철근 상세도 블록을 선택하여 간격을 수정한다. | Modify the spacing by selecting reinforcement specifications blocks. |
| ID_STRUCT_GAP_No | 철근 상세도 블록이 선택되지 않았습니다. | No reinforcement detail blocks are selected. |
| ID_STRUCT_GroupName_01 | 설정 | Settings |
| ID_STRUCT_GroupName_02 | 레이어 | Layer |
| ID_STRUCT_GroupName_03 | 공통 | General Settings |
| ID_STRUCT_GroupName_04 | 철근 재료표 | Rebar Material Table |
| ID_STRUCT_GroupName_05 | 이형 철근 재료표 | Deformed Rebar Material Table |
| ID_STRUCT_GroupName_06 | 철근 제원 | Rebar Specifications |
| ID_STRUCT_IR_Create | 선택된 철근 교차점에 점철근을 생성한다. | Create rebars at the selected rebar intersection. |
| ID_STRUCT_IR_Distance | 중심으로부터의 간격 값을 입력하세요. | Enter the distance from the center. |
| ID_STRUCT_IR_Select | 교차점을 찾을 철근 객체 선택 | Select rebar object to find intersection |
| ID_STRUCT_LR_Base | 측정기준(B) | BaseLength(B) |
| ID_STRUCT_LR_Create | 직선철근에 점철근을 생성한다. | Create rebars on a linear rebar. |
| ID_STRUCT_MAKEBM_SelectCircle | 철근마킹으로 바꿀 원 객체 선택 | Select the circle to change the rebar marking. |
| ID_STRUCT_MARK_Create | 원하는 지점에 철근마크블록을 생성한다. | Create a rebar mark block at the specified point. |
| ID_STRUCT_MARK_Point | 철근마크블록을 생성할 위치를 선택하세요. | Select a point to create a rebar mark block. |
| ID_STRUCT_MBASE_Fail | 마크 생성에 실패하였습니다. | Failed to create mark. |
| ID_STRUCT_MC_Bend | 배근도의 철근마킹 선택 | Select rebar marking for bending schedule |
| ID_STRUCT_MC_BendNo | 배근도에 철근마킹이 없습니다. | The bending schedule has no rebar marking. |
| ID_STRUCT_MC_Detail | 철근상세도의 철근마킹 선택 | Select rebar marking for reinforcement Detail |
| ID_STRUCT_MC_DetailNo | 철근상세도에 철근마킹이 없습니다. | The reinforcement detail does not contain rebar marking. |
| ID_STRUCT_MC_Different | 'NO'가 같은데 DIA가 다른 마킹 검토 | 'NO' is the same, but DIA is reviewing different markings |
| ID_STRUCT_MC_DuplicateRebarNum | 중복된 철근번호 | Duplicate rebar number |
| ID_STRUCT_MC_MarkingNumber | 마킹번호 | Marking Number |
| ID_STRUCT_MC_Max | 마킹블록 최대 반경 입력 | Enter Marking Block Maximum Radius |
| ID_STRUCT_MC_Min | 마킹블록 최소 반경 입력 | Enter Marking Block Minimum Radius |
| ID_STRUCT_MC_NoError | 오류 없음 | No errors |
| ID_STRUCT_MC_Only | 배근도 혹은 철근상세도 한쪽에만 있는 마킹이 있습니다. | There is a marking that is only in bending schedule or reinforcement detail. |
| ID_STRUCT_MC_OnlyOneSide | 배근도와 철근상세도 중 한쪽에만 있는 마킹 검토 | Review marking only on one side of the reinforcement and reinforcement detail drawings |
| ID_STRUCT_MC_Proceed | 계속 진행하시겠습니까? | Do you want to proceed? |
| ID_STRUCT_MC_ReviewDuplicate | 철근상세도의 중복된 철근번호 검토 | Review of Duplicate Reinforcement Numbers in Reinforcement Details |
| ID_STRUCT_MC_SameNO | NO가 같은데 DIA가 다른 마킹이 있습니다. | There is a mark with the same NO but different DIA. |
| ID_STRUCT_MMARK_Color | 철근 색상 | Reinforcing Bar Color |
| ID_STRUCT_MMARK_ColorOpt | 철근색지정(C) | SelectRebarColor(C) |
| ID_STRUCT_MMARK_Curve | Curve 객체 선택 | Select Curve Object |
| ID_STRUCT_MMARK_Enter | TicLine을 입력할 간격을 입력하세요. | Enter spacing to input TicLine. |
| ID_STRUCT_MMARK_Inter | 철근(선)을 선택하여 교차점에 마크 블록을 생성한다. | Select Reinforcing Bar(Line) to create a mark block at the intersection. |
| ID_STRUCT_MMARK_Select | 원하는 색상의 객체 선택 | Select objects of the desired color |
| ID_STRUCT_MMARK_SelectOpt | 객체선택(S) | SelectObject(S) |
| ID_STRUCT_MMARK_Start | 시작 점 지정 또는 | Select a start point or |
| ID_STRUCT_MMARK_Without | 철근 색상 필터 미 적용 | Without Bar Color Filter |
| ID_STRUCT_MMARK_WithoutOpt | 철근색필터미적용(X) | NotApplyRebarColorFilter(X) |
| ID_STRUCT_MSK_Enter | 찾을 철근마킹 번호 입력 | Enter the rebar marking number to find |
| ID_STRUCT_MSK_Find | 찾을 철근마킹 선택 | Select rebar markings to find |
| ID_STRUCT_MSK_NoMark | 선택된 철근마킹이 없습니다. | No rebar marking selected. |
| ID_STRUCT_MSK_NoNum | 번호의 철근마킹이 없습니다. | There is no rebar marking for the number. |
| ID_STRUCT_MSK_Q2 | 개의 | Rebar number |
| ID_STRUCT_MSK_Q3 | 철근마킹을 줌 하시겠습니까? | Do you want to zoom in on ? |
| ID_STRUCT_MSK_Range | 지정범위 내에서 철근 번호로 마킹블록을 찾는다. | Find the marking block with the rebar number within the specified range. |
| ID_STRUCT_MSL_BasePoint | 이동 기준점 선택 | Select a base point |
| ID_STRUCT_MSL_InsertPoint | 이동할 지점 선택 | Select a point to move |
| ID_STRUCT_MSL_Move | 선택된 철근 마킹 블록과 인출선을 이동한다. | Move the selected rebar marking block and the lead. |
| ID_STRUCT_MSL_No | 철근 상세도 블록이 선택되지 않았습니다. | No reinforcement detail blocks are selected. |
| ID_STRUCT_MSL_Select | 이동할 철근 마킹 블록을 선택 | Select the rebar marking block. |
| ID_STRUCT_PB_Create | 두 점을 클릭하여 간격재를 생성한다. | Create spacer by Selecting two points. |
| ID_STRUCT_PMARK_Select | 철근 마크블록을 생성 할 Circle, Dot, Point, Block 선택 | Select Circle, Dot, Point, Block to create Reinforcement Mark Blocks |
| ID_STRUCT_PR_Create | 원기둥 객체를 선택하여 점철근을 생성한다. | Select cylinder objects to create rebars. |
| ID_STRUCT_PR_Select | 원기둥 객체를 선택하세요. | Select a cylinder object. |
| ID_STRUCT_RadioButton_DETM_01 | 블록 좌측 하단 | Lower left |
| ID_STRUCT_RadioButton_DETM_02 | 블록 중심 하단 | Lower mid |
| ID_STRUCT_RadioButton_DETM_03 | 블록 우측 하단 | Lower right |
| ID_STRUCT_RadioButton_REBARTABLE_01 | 철근상세도 | Rebar details |
| ID_STRUCT_RadioButton_REBARTABLE_02 | 철근제원 저장파일 | Saved Rebar data |
| ID_STRUCT_RadioButton_REBARTABLE_03 | 도면에 재료표 생성 | Generate in drawing |
| ID_STRUCT_RadioButton_REBARTABLE_04 | 엑셀로 내보내기 | Export to EXCEL |
| ID_STRUCT_RadioButton_REBARTABLE_05 | 간소화 재료표 | Simplified |
| ID_STRUCT_RadioButton_REBARTABLE_06 | 일반형 재료표 | Standard |
| ID_STRUCT_RadioButton_REBARTABLE_11 | 표기값 그대로 | As displayed |
| ID_STRUCT_RadioButton_REBARTABLE_12 | 3사 4입 | Round 3↓ 4↑ |
| ID_STRUCT_RadioButton_REBARTABLE_13 | 반올림 | Rounding |
| ID_STRUCT_RadioButton_REBARTABLE_14 | 반영 | Yes |
| ID_STRUCT_RadioButton_REBARTABLE_15 | 미반영 | No |
| ID_STRUCT_RAVG_Avg | 철근 평균길이를 구한다. | Find the average length of the rebar. |
| ID_STRUCT_RAVG_InputDigt | 소수점 자리수 입력 | Input the decimal place. |
| ID_STRUCT_RAVG_InputDigt2 | 0과 8사이의 정수를 입력해 주세요. | Please Input an integet between 0 and 8. |
| ID_STRUCT_RAVG_Select | 평균길이를 입력할 문자를 선택 | Select a text to enter the average length. |
| ID_STRUCT_RAVG_SelectBase | 철근 선택 기준 | Select the rebar selection base. |
| ID_STRUCT_RAVG_SelectRebarBlock | 철근 마킹 블록 선택 | Select the rebar marking block. |
| ID_STRUCT_RAVG_SelectRebarBlock2 | 평균 길이를 구할 철근 마킹 블록 선택 | Select the rebar marking block to calculate the average length. |
| ID_STRUCT_RAVG_SelectRebarObject | 철근 객체 선택 | Select the rebar object. |
| ID_STRUCT_RAVG_SelectRebarObject2 | 평균 길이를 구할 철근 객체 선택 | Select the rebar object to calculate the average length. |
| ID_STRUCT_RB_Create | 두 점을 클릭하여 이음철근을 생성한다. | Select two points to create splice?bar. |
| ID_STRUCT_RB_Enter | 배근이 입력될 간격을 입력하세요. | Enter spacing for arrangement of bar. |
| ID_STRUCT_RB_Select | 배근될 철근을 선택하세요. | Select rebars to be arranged. |
| ID_STRUCT_RB_Warn1 | 두 점 사이의 간격이 | The spacing between two points must be larger than |
| ID_STRUCT_RB_Warn2 | 보다 커야 합니다. | . |
| ID_STRUCT_RBASE_2 | 최소 2보다 큰 숫자를 입력하세요. | Enter a number greater than 2 at least. |
| ID_STRUCT_RBASE_BarNum | 철근 개수를 입력하세요. | Enter the number of rebars. |
| ID_STRUCT_RBASE_Base | 철근 간격 기준 | Rebar Base Distance |
| ID_STRUCT_RBASE_CenterOpt | 중앙(C) | Center(C) |
| ID_STRUCT_RBASE_Count | 개수를 | Count of Rebar. |
| ID_STRUCT_RBASE_Distance | 간격을 | Distance of Rebar. |
| ID_STRUCT_RBASE_EndOpt | 끝점€ | End(E) |
| ID_STRUCT_RBASE_Enter | 철근의 | Enter |
| ID_STRUCT_RBASE_EnterDistance | 사각철근으로 부터의 거리 값을 입력하세요. | Enter the distance value from the square rebar. |
| ID_STRUCT_RBASE_Error | 문자 오류 | Text Error |
| ID_STRUCT_RBASE_H | 수평(H) | Horizontal(H) |
| ID_STRUCT_RBASE_Num | 숫자를 입력하세요 | Enter a number |
| ID_STRUCT_RBASE_Or | 입력하세요. 혹은 | Or |
| ID_STRUCT_RBASE_Point | 철근 입력 위치 | Rebar Input Point |
| ID_STRUCT_RBASE_Real | 실거리(R) | Real(R) |
| ID_STRUCT_RBASE_Scale | 철근의 Scale을 입력하세요. | Enter the scale of the rebar. |
| ID_STRUCT_RBASE_Start | 철근 배근 시작지점 | Reinforcement Start Point |
| ID_STRUCT_RBASE_StartOpt | 시작점(S) | Start(S) |
| ID_STRUCT_RBASE_V | 수직(V) | Vertical(V) |
| ID_STRUCT_RBASE_Wide | 두 점 거리보다 배근 간격이 넓습니다. | Reinforcement spacing is wider than the distance of two points. |
| ID_STRUCT_RD_Input | 철근상세도를 입력한다. | Input reinforcement detail. |
| ID_STRUCT_RD_Point | 철근상세도를 생성할 위치를 선택하세요. | Select a point to create reinforcement detail. |
| ID_STRUCT_RD_Warn1 | 철근 제원이 입력되지 않았습니다. | No reinforcement specifications were entered. |
| ID_STRUCT_RD_Warn2 | 입력된 철근제원 값이 없습니다. | No reinforcement specifications value. |
| ID_STRUCT_REBAROFFSET_RebarDiameter | 철근 직경 | Rebar diameter |
| ID_STRUCT_REBAROFFSET_Select | 철근선 선택 | Rebar selection |
| ID_STRUCT_REBAROFFSET_Unable | 팝업창을 띄울 수 없습니다 | A pop-up window cannot be opened |
| ID_STRUCT_RR_Create | 사각철근에 점철근을 생성한다. | Create rebars on a rectangular rebar. |
| ID_STRUCT_RR_HV | 수평_수직(H) | Horizontal_Vertical(H) |
| ID_STRUCT_RS_Change | 선택한 블록 객체의 스케일을 변경한다. | Change the scale of the selected block object. |
| ID_STRUCT_RS_Select | 블록 객체를 선택하세요. | Select a block object. |
| ID_STRUCT_RT_DetailSize | 개, 이형철근상세 박스 크기 |  columns, Deformed Bar Detail Box Size |
| ID_STRUCT_RT_H | 이형철근상세 박스 세로 길이 | Deformed Bar Detail Box Height |
| ID_STRUCT_RT_Modify | 이형철근상세표 속성을 수정하시겠습니까? | Do you want to modify the properties of deformed bar detail table? |
| ID_STRUCT_RT_NearLineError | 철근 상세도의 원 또는 블록 근처에 관련없는 '선' 객체가 있습니다. | There is an unrelated 'line' object near the circle or block of rebar detail. |
| ID_STRUCT_RT_Num | 가로열개수 | Number of Columns |
| ID_STRUCT_RT_NumBar | 이형철근 가로 열 개수 | Number of Columns of Deformed Bar |
| ID_STRUCT_RT_Prop | 이형철근상세표 속성 | Deformed Bar Detail Table Properties |
| ID_STRUCT_RT_TopH | 좌상단 숫자 박스 세로 길이 | Top Left Number Box Height |
| ID_STRUCT_RT_TopSize | 좌상단 숫자 박스 크기 | Top Left Number Box Size |
| ID_STRUCT_RT_TopW | 좌상단 숫자 박스 가로 길이 | Top Left Number Box Width |
| ID_STRUCT_RT_W | 이형철근상세 박스 가로 길이 | Deformed Bar Detail Box Width |
| ID_STRUCT_RTL_Find | 철근 상세도의 합산길이를 구한다. | Find the combined length of the reinforcement detail. |
| ID_STRUCT_RTL_Select | 합산 길이를 산출할 철근 넘버를 선택하세요. | Select the rebar number to calculate the combined length. |
| ID_STRUCT_SCM_Base | 스케일 기준점을 선택하세요. | Select a scale base point. |
| ID_STRUCT_SCM_Change | 선택된 객체의 스케일을 변경한다. | Change the scale of the selected object. |
| ID_STRUCT_SCM_Enter | 스케일 값을 입력하세요. | Enter a scale value. |
| ID_STRUCT_SCM_Object | 스케일을 조절할 객체를 선택하세요. | Select the object you want to scale. |
| ID_STRUCT_SMARK_Line | 철근 마크블록을 생성할 선을 선택하세요. | Select a line to create a reinforcement mark block. |
| ID_STRUCT_SR_Create | 두 점을 클릭하여 전단철근을 생성한다. | Select two points to create shear reinforcement. |
| ID_STRUCT_SR_Pick | 두 점을 클릭하세요. | Select two points. |
| ID_STRUCT_SRN_Create | 객체를 생성하시겠습니까? | Do you want to create an object? |
| ID_STRUCT_SRN_Direction | 선택된 철근의 방향이 균일하지 않습니다. | The direction of the selected rebar is not uniform. |
| ID_STRUCT_SRN_Find | 전단철근의 개수를 구한다. | Find the number of shear reinforcement. |
| ID_STRUCT_SRN_Num | 전단 철근 개수 | Number of shear reinforcement |
| ID_STRUCT_SRN_Num1 | 전단철근의 개수는 | The number of shear reinforcement is |
| ID_STRUCT_SRN_Num2 | 개 입니다. | . |
| ID_STRUCT_SRN_Select | 전단철근을 선택하세요. | Select the shear reinforcement. |
| ID_STRUCT_SRN_Width | 선택된 철근의 가로 길이가 균일하지 않습니다. | The width of the selected rebar is not uniform. |
| ID_STRUCT_TextBlock_DETM_01 | 스케일 | Scale |
| ID_STRUCT_TextBlock_DETM_02 | 블록 입력 위치 | Block insert |
| ID_STRUCT_TextBlock_DETM_03 | 블록 이름 | Set name |
| ID_STRUCT_TextBlock_MYOSNAP_01 | ◆ 즐겨찾기 | ◆ Favorites |
| ID_STRUCT_TextBlock_MYOSNAP_02 | * 'OS1'~'OS10' 단축키로 '설정 1~10'까지를 바로 적용 | * Apply ‘Settings 1 to 10’ directly with the shortcut keys ‘OS1’ to ‘OS10’ |
| ID_STRUCT_TextBlock_RBOF_01 | 철근 레이어 | Rebar Layer |
| ID_STRUCT_TextBlock_RBOF_02 | 레이어 이름 | Layer name |
| ID_STRUCT_TextBlock_REBARTABLE_01 | 스케일 | Scale |
| ID_STRUCT_TextBlock_REBARTABLE_02 | 헤더 높이 | Header height |
| ID_STRUCT_TextBlock_REBARTABLE_03 | * 스케일 | x Scale |
| ID_STRUCT_TextBlock_REBARTABLE_04 | 행 높이 | Row height |
| ID_STRUCT_TextBlock_REBARTABLE_05 | 헤더 문자 높이 | Header text height |
| ID_STRUCT_TextBlock_REBARTABLE_06 | 내용 문자 높이 | Content text height |
| ID_STRUCT_TextBlock_REBARTABLE_07 | 표 간격 | Table spacing |
| ID_STRUCT_TextBlock_REBARTABLE_08 | 재료표 대상 | Target material list |
| ID_STRUCT_TextBlock_REBARTABLE_09 | 만들기 방식 | Produce method |
| ID_STRUCT_TextBlock_REBARTABLE_10 | 재료표 형식 | Material table format |
| ID_STRUCT_TextBlock_REBARTABLE_11 | 열 개수 | Number of columns |
| ID_STRUCT_TextBlock_REBARTABLE_13 | 형상 박스 가로 길이 | Shape box width |
| ID_STRUCT_TextBlock_REBARTABLE_14 | 형상 박스 세로 길이 | Shape box height |
| ID_STRUCT_TextBlock_REBARTABLE_15 | 숫자 박스 가로 길이 | Value box width |
| ID_STRUCT_TextBlock_REBARTABLE_16 | 숫자 박스 세로 길이 | Value box height |
| ID_STRUCT_TextBlock_REBARTABLE_17 | 철근 재질 | Material |
| ID_STRUCT_TextBlock_REBARTABLE_18 | 길이 산정 | Options |
| ID_STRUCT_TextBlock_REBARTABLE_19 | 이음 할증 | Joint allow. |
| ID_STRUCT_TextBlock_REBARTABLE_20 | 철근 할증 | Waste allow. |
| ID_STRUCT_TextBlock_REBARTABLE_21 |  mm 이상  | mm↑ |
| ID_STRUCT_TextBlock_REBARTABLE_22 | (%) | % |
| ID_STRUCT_UTIL_Convert | 글꼴 변환 | Convert Font |
| ID_STRUCT_UTIL_Replace | 도면의 모든 텍스트의 글꼴을 돋움으로 바꾸시겠습니까? | Do you want to replace the font of all text in the drawing with Dotum? |
| ID_STRUCT_UTIL_Select | 폰트를 변경할 문자를 선택해주세요. | Select a text to change the font. |
| ID_TEXT_APT_Footer | 꼬리말 입력 | Enter Footer |
| ID_TEXT_APT_Header | 머리말 입력 | Enter header |
| ID_TEXT_APT_InsertN | 앞에서 N번째 문자 뒤에 삽입, N값 입력 | Insert after Nth letter from the front, enter N value |
| ID_TEXT_APT_Middle | 중간말 입력 | Enter intermidiate word |
| ID_TEXT_APT_NoChange | 바꿀 수 없는 MText입니다. | No value added. |
| ID_TEXT_APT_NoValue | 추가한 값이 없음. | No value added. |
| ID_TEXT_APT_SelectObject | 삽입할 객체 선택 | Select object to insert |
| ID_TEXT_ART_AlignmentBasePoint | 정렬 기준점 지정 | Select alignment base point |
| ID_TEXT_ART_BasePoint | 정렬기준점지정(S) | SelectBasePoint(S) |
| ID_TEXT_ART_DistanceTwoPoint | 두 점 지정 거리 | Distance specified by two points  |
| ID_TEXT_ART_EnterLineSpacing | 줄 간격 입력 또는 줄 간격의 첫번째 점 지정 | Enter line spacing or Select the first point of line spacing |
| ID_TEXT_ART_EnterSpacing | 사이 간격 입력 또는 사이 간격의 첫번째 점 지정 | Enter spacing or Select the first point of spacing  |
| ID_TEXT_ART_FirstPoint | 첫번째 점 지정 | Select the first point |
| ID_TEXT_ART_FirstTwoPoint | 두 점의 첫번째 점 지정 | Select the first point of two points |
| ID_TEXT_ART_InvalidValue | 유효한 값이 아닙니다. | Invalid value |
| ID_TEXT_ART_SecondPoint | 두번째 점 지정 | Select the second point |
| ID_TEXT_ART_Text | 정렬할 문자 객체 선택 | Select text objects to align |
| ID_TEXT_ART_TwoPoint | 두점지정(T) | SelectTwoPoints(T) |
| ID_TEXT_ART_TwoSpacing | 간격 조정은 두 개 이상의 객체를 선택해주세요.  | Select at least two objects for spacing adjustment. |
| ID_TEXT_AVT_AllSetDecimal | 소수점 자릿수를 일괄 변경하시겠습니까? | Do you want to batch change decimal places? |
| ID_TEXT_AVT_Divide | 나누기(D) | Divide(D) |
| ID_TEXT_AVT_EnterNumber | 숫자를 입력하세요. | Enter a number. |
| ID_TEXT_AVT_EnterValue | 할 값을 입력 | Enter a value to compute |
| ID_TEXT_AVT_InputDecimal | 소수점 자릿수 입력 | Enter decimal places |
| ID_TEXT_AVT_Minus | 빼기(M) | Minus(M) |
| ID_TEXT_AVT_Multiply | 곱하기(T) | Multiply(T) |
| ID_TEXT_AVT_NotZero | 0으로 나눌 수 없습니다. | Cannot be divided by 0. |
| ID_TEXT_AVT_Plus | 더하기(P) | Plus(P) |
| ID_TEXT_AVT_SelectOperation | 연산 종류를 선택해주세요. | Select operation type. |
| ID_TEXT_AVT_SelectText | 를 적용할 텍스트 선택 | Select text to be applied |
| ID_TEXT_BATEXT_AlignmentCompleted | 정렬이 완료되었습니다. | Alignment completed. |
| ID_TEXT_BATEXT_Calculating | 경계 계산중 | Calculating Boundaries |
| ID_TEXT_BATEXT_Error | 오류가 발생해 명령어가 종료되었습니다. | Command terminated due to an error. |
| ID_TEXT_BATEXT_LongTime | 텍스트가 많이 선택되면 처리시간이 오래 걸릴 수 있습니다. | If a lot of text is selected processing can take a long time. |
| ID_TEXT_BATEXT_SelectSort | 정렬 선택 | Select Sort |
| ID_TEXT_BATEXT_SelectText | 영역의 재배치를 할 문자 선택 | Select the texts to reposition the region |
| ID_TEXT_Button_CTE_01 | 도면→엑셀 업데이트 | DWG → EXCEL update |
| ID_TEXT_Button_CTE_02 | 엑셀→도면 업데이트 | EXCEL → DWG update |
| ID_TEXT_Button_ETC_01 | 도면→엑셀 업데이트 | DWG → EXCEL update |
| ID_TEXT_Button_ETC_02 | 엑셀→도면 업데이트 | EXCEL → DWG update |
| ID_TEXT_Button_FINDANDREPLACETEXT_01 | 검색 | Search |
| ID_TEXT_Button_FINDANDREPLACETEXT_02 | 변경 | Change |
| ID_TEXT_Button_FINDANDREPLACETEXT_03 | 일괄 변경 | Change all |
| ID_TEXT_Button_TEXTTE_01 | 도면→엑셀 업데이트 | DWG → EXCEL update |
| ID_TEXT_Button_TEXTTE_02 | 엑셀→도면 업데이트 | EXCEL → DWG update |
| ID_TEXT_CHARACTER_LoadSpecialCharacter | 특수문자표를 불러옵니다. | Load special text table. |
| ID_TEXT_CHATTE_PropertyText | 속성 문자 객체 선택 | Select attribute text object |
| ID_TEXT_CheckBox_CTE_01 | 행 높이, 열 너비 자동 맞춤 | Autofit row height & column width |
| ID_TEXT_CheckBox_CTE_02 | 도면 문자 색상 엑셀에 적용 | Apply text color to EXCEL |
| ID_TEXT_CheckBox_CTE_03 | 엑셀에 표 선 그리기 | Draw table lines in excel |
| ID_TEXT_CheckBox_CTE_04 | 항상 외곽선 그리기 | Always draw outline |
| ID_TEXT_CheckBox_CTE_05 | 셀 병합하지 않음 | Do not merge cells |
| ID_TEXT_CheckBox_CTE_06 | 선택한 객체만 업데이트 | Update selected objects only |
| ID_TEXT_CheckBox_CTE_07 | 업데이트 문자에 Box 표시 | Mark box on updated text |
| ID_TEXT_CheckBox_DTTMTEXT_01 | 줄 넘김 | Line break |
| ID_TEXT_CheckBox_DTTMTEXT_02 | 새 위치에 별도로 작성 | Create at new location |
| ID_TEXT_CheckBox_DTTMTEXT_03 | 기존 문자 서식 유지 | Maintain original text format |
| ID_TEXT_CheckBox_DTTMTEXT_04 | 변환 후 특성 변경 | Change properties after conversion |
| ID_TEXT_CheckBox_ETC_01 | 문자 폭 표 안에 맞춤 | Fit text inside table |
| ID_TEXT_CheckBox_ETC_02 | 문자 사이 빈 공백 제거 | Delete empty spaces between texts |
| ID_TEXT_CheckBox_ETC_03 | 엑셀 문자 색상 도면에 적용 | Apply EXCEL text color to DWG |
| ID_TEXT_CheckBox_ETC_04 | 선택한 객체만 업데이트 | Update selected objects only |
| ID_TEXT_CheckBox_ETC_05 | 업데이트 문자에 Box 표시 | Mark box on updated text |
| ID_TEXT_CheckBox_FINDANDREPLACETEXT_08 | 대/소문자 구분 | Match case |
| ID_TEXT_CheckBox_FINDANDREPLACETEXT_09 | 문자 전체 일치 | Match whole word |
| ID_TEXT_CheckBox_SED_01 | 편집할 문자 Zoom 단계 | Zoom level for editing text |
| ID_TEXT_CheckBox_SED_02 | 치수 편집 허용 | Allow Dim editing |
| ID_TEXT_CheckBox_SED_03 | 문자 수정 내용 Excel에서 가져오기 | Import text edits from EXCEL |
| ID_TEXT_CheckBox_SED_04 | 치수만 적용 | Apply Dim only |
| ID_TEXT_CheckBox_SED_05 | 치수만 선택 | Select dimensions only |
| ID_TEXT_CheckBox_SED_06 | 천 단위 기호 | Thousand separator |
| ID_TEXT_CheckBox_TB_01 | 타원을 폴리선으로 그리기 | Draw Ellipse as polyline |
| ID_TEXT_CheckBox_TB_02 | 객체 가리기 적용 | Object masking |
| ID_TEXT_CheckBox_TB_03 | 선 두께 | Line width |
| ID_TEXT_CheckBox_TEXTTE_01 | 추가 내용 정렬 | Sort by value |
| ID_TEXT_CheckBox_TEXTTE_02 | 높이 | Height |
| ID_TEXT_CheckBox_TEXTTE_03 | 폭 | Width |
| ID_TEXT_CheckBox_TEXTTE_04 | 회전 값 | Rotation |
| ID_TEXT_CheckBox_TEXTTE_05 | 치수 문자 내보내기 | Export/override dim : |
| ID_TEXT_CheckBox_TEXTTE_06 | 스타일 | Style |
| ID_TEXT_CheckBox_TEXTTE_07 | 레이어 | Layer |
| ID_TEXT_CheckBox_TEXTTE_08 | 선택한 객체만 업데이트 | Update selected object only |
| ID_TEXT_CheckBox_TJO_01 | 지정 개수마다 연속 결합 | Join by every |
| ID_TEXT_CheckBox_TJO_02 | 치수 선택 허용 | Allow dimension selection |
| ID_TEXT_CheckBox_TJO_03 | 기존 문자 삭제 | Delete original text |
| ID_TEXT_CheckBox_TJO_04 | 치수는 삭제 안함 | Do not delete dimensions |
| ID_TEXT_CheckBox_TJO_05 | 결합 문자 사이 공백 지정 | Specify space between joined text |
| ID_TEXT_CheckBox_TJO_06 | 머리말 | Prefix |
| ID_TEXT_CheckBox_TJO_07 | 꼬리말 | Suffix |
| ID_TEXT_CheckBox_TJO_08 | 레이어 | Layer |
| ID_TEXT_CheckBox_TJO_09 | 스타일 | Style |
| ID_TEXT_CheckBox_TJO_10 | 높이 | Height |
| ID_TEXT_CheckBox_TJO_11 | 폭 | Width |
| ID_TEXT_CheckBox_TJO_12 | Z 방향 정렬 때 한 행씩 결합 | Merge rows one by one when aligning in the Z direction |
| ID_TEXT_CheckBox_TMC_01 | 여러 행에 일괄 적용 | Batch apply to rows |
| ID_TEXT_CheckBox_TRP_01 | 변환 후 특성 변경 | Change properties after conversion |
| ID_TEXT_CheckBox_TTC_01 | 객체 간 공백 추가 | Add space between texts |
| ID_TEXT_CONVERTTC_SelectTextConvert | 대소문자를 변환할 문자 선택 | Select text to convert text upper/lower case |
| ID_TEXT_CR_ChangePlace | 문자 자리 맞추기 기준변경 | Change text placement criteria |
| ID_TEXT_CR_EntityMove | 문자를 이동할 객체 선택 | Select entity to move text to |
| ID_TEXT_CR_FirstEdge | 첫번째 모서리 점 지정 | Select first edge point |
| ID_TEXT_CR_SecondEdge | 두번째 모서리 점 지정 | Select second edge point |
| ID_TEXT_CR_SelectEntity | 객체 선택(E) | Select Entity(E) |
| ID_TEXT_CR_TextMove | 사각 영역의 중심으로 이동할 문자 선택 | Select text to move to the center of the square |
| ID_TEXT_CR_TwoPoint | 두 점 지정(P) | Select two points(P) |
| ID_TEXT_CTE_DrawTable | CAD 표 값을 Excel에 그려넣는다. | Draw CAD table values in Excel. |
| ID_TEXT_CTE_Edge | 표 영역 모서리 선택 | Select table area edge |
| ID_TEXT_CTE_ErrorLineInfo | 선 정보를 읽어오지 못했습니다. | Failed to read line information. |
| ID_TEXT_CTE_InputCell | 셀 입력 | Input cell |
| ID_TEXT_CTE_OppositeEdge | 표 영역 반대쪽 모서리 선택 | Select opposite edge of the table area |
| ID_TEXT_CTE_SelectObjectToLayer | 레이어를 불러올 객체 선택 | Select the object to load the layer |
| ID_TEXT_CTE_StartCell | 표를 입력할 시작셀 선택 | Select start cell to enter table |
| ID_TEXT_CTEU_All | 모든객체 | All Objects |
| ID_TEXT_CTEU_NotHave | 에 | does not have |
| ID_TEXT_CTEU_NotOpen | 이 열려있지 않습니다 | is not open. |
| ID_TEXT_CTEU_Sheet | 시트가 없습니다 | sheet |
| ID_TEXT_CTS_CurvePrecision | 곡선구간 정밀도 | Curved section precision |
| ID_TEXT_CTS_SelectToDrawOutline | 외곽선을 그릴 문자 선택 | Select a text to draw the outline |
| ID_TEXT_CTS_SelectToImportSetting | 설정을 가져올 문자 선택 | Select texts to import settings |
| ID_TEXT_CTS_SelectToShadow | 그림자를 넣을 문자 선택 | Select a text to shadow |
| ID_TEXT_DIV_Divide | 나누기할 문자 선택 | Select text to divide |
| ID_TEXT_DIV_FourOperation | 문자 사칙연산 | Four fundamental arithmetic operations to text |
| ID_TEXT_DIV_NoNumber | 선택한 객체 중 숫자가 포함된 문자가 없습니다. | None of the selected objects contain a number. |
| ID_TEXT_DIV_PointInsert | 문자를 삽입할 점 지정 | Select point to insert text |
| ID_TEXT_DTMT_SelectTextConvert | MText로 변환할 Text 선택 | Select Text to Convert to MText |
| ID_TEXT_EBP_AttributeText | 블록의 속성 문자 선택 | Select attribute text for block |
| ID_TEXT_EBP_CurrentValue | 현재값 | Current Value |
| ID_TEXT_EBP_EnterValue | 값 입력 | Enter Value |
| ID_TEXT_EBP_Prompt | 프롬프트 | Prompt |
| ID_TEXT_EBP_Tag | 태그 | Tag |
| ID_TEXT_ETC_Area | 영역 선택 | Select area |
| ID_TEXT_ETC_DrawTable | Excel 표 값을 CAD에 그려넣는다. | Draw Excel table values in CAD. |
| ID_TEXT_ETC_InputPoint | 입력점 선택 | Select input point |
| ID_TEXT_ETC_RangeTable | CAD로 가져올 표 범위를 선택하세요. | Select a range of tables to import into CAD. |
| ID_TEXT_ETCU_All | 모든객체 | All Objects |
| ID_TEXT_ETCU_NotHave | 에 | does not have |
| ID_TEXT_ETCU_NotOpen | 이 열려있지 않습니다 | is not open. |
| ID_TEXT_ETCU_Sheet | 시트가 없습니다 | sheet |
| ID_TEXT_GroupName_01 | 문자 옵션 | Text options |
| ID_TEXT_GroupName_02 | 선 그리기 | Draw Table |
| ID_TEXT_GroupName_03 | 도면/엑셀 동기화 | Sync DWG/EXCEL |
| ID_TEXT_GroupName_04 | 수정 표시 | Revision Mark |
| ID_TEXT_GroupName_05 | 문자 쓰기 | Write Text |
| ID_TEXT_GroupName_06 | 도면/엑셀 동기화 | Sync DWG/EXCEL |
| ID_TEXT_GroupName_07 | 수정 표시 | Revision Mark |
| ID_TEXT_GroupName_08 | 표 그리기 | Draw Table |
| ID_TEXT_GroupName_09 | 문자 입력 | Enter Text |
| ID_TEXT_GroupName_10 | 문자 설정 | Text Settings |
| ID_TEXT_GroupName_11 | 설정 | Settings |
| ID_TEXT_GroupName_12 | 그림자 모양 | Shadow Mode |
| ID_TEXT_GroupName_13 | 문자 색상 | Original Text Color |
| ID_TEXT_GroupName_14 | 그림자 색상 | Shadow Color |
| ID_TEXT_GroupName_15 | 그림자 좌표 | Shadow Offset |
| ID_TEXT_GroupName_16 | 외곽선 두께 | Outline thickness |
| ID_TEXT_GroupName_17 | 레이어 지정 | Assign layer |
| ID_TEXT_GroupName_18 | 여러 문자 | Multiple texts |
| ID_TEXT_GroupName_19 | 정렬 순서 | Sort order |
| ID_TEXT_GroupName_20 | 특성 변경 | Change Properties |
| ID_TEXT_GroupName_21 | 검색 범위 | Search Range |
| ID_TEXT_GroupName_22 | 검색 및 변경 | Search and Change |
| ID_TEXT_GroupName_23 | 검색 대상 | Serach Target |
| ID_TEXT_GroupName_24 | 검색 조건 | Search Options |
| ID_TEXT_GroupName_25 | 검색 결과 | Search Results |
| ID_TEXT_GroupName_26 | 문자 쓰기 | Write Text |
| ID_TEXT_GroupName_27 | 수정 방법 | Modification Method |
| ID_TEXT_GroupName_28 | 문자 직접 편집 | Direct text editing |
| ID_TEXT_GroupName_29 | 문자 알파벳 증분 | Text Alphabet increment |
| ID_TEXT_GroupName_30 | 문자 숫자 증분 | Increment Options |
| ID_TEXT_GroupName_31 | 문자 인식 설정 | Text Recognition Settings |
| ID_TEXT_GroupName_32 | 도형 설정 | Geometry Settings |
| ID_TEXT_GroupName_33 | 도형 크기 | Geometry Size |
| ID_TEXT_GroupName_34 | 레이어 설정 | Layer Settings |
| ID_TEXT_GroupName_35 | 기타 설정 | Other Settings |
| ID_TEXT_GroupName_36 | 도형 맞춤 | Other Settings |
| ID_TEXT_GroupName_37 | 전체 축척 | Scale Settings |
| ID_TEXT_GroupName_38 | 결합 방식 | Merge Method |
| ID_TEXT_GroupName_39 | 합치기 순서 | Merge Order |
| ID_TEXT_GroupName_40 | 문자 삽입 방식 | Text Insert Method |
| ID_TEXT_GroupName_41 | 결합 설정 | Output Settings |
| ID_TEXT_GroupName_42 | 결합 문자 특성 변경 | Change merge text properties |
| ID_TEXT_GroupName_43 | 문자 정렬 | Text alignment |
| ID_TEXT_GroupName_44 | 설정 | Settings |
| ID_TEXT_GroupName_45 | 기타 옵션 | Other options |
| ID_TEXT_GroupName_46 | 정렬 설정 | Sort settings |
| ID_TEXT_GroupName_47 | 문자 필터 | Text filter |
| ID_TEXT_GroupName_48 | 폰트 설정 | Font Settings |
| ID_TEXT_GroupName_49 | 조합형 한글 설정 | Korean Font Composite Settings |
| ID_TEXT_JU_BottomCenter | 하단중앙(BC) | BottomCenter(BC) |
| ID_TEXT_JU_BottomLeft | 좌하단(BL) | BottomLeft(BL) |
| ID_TEXT_JU_BottomRight | 우하단(BR) | BottomRight(BR) |
| ID_TEXT_JU_Center | 중심(C) | Center(C) |
| ID_TEXT_JU_Left | 왼쪽(L) | Left(L) |
| ID_TEXT_JU_Middle | 중간(M) | Middle(M) |
| ID_TEXT_JU_MiddleCenter | 중간중앙(MC) | MiddleCenter(MC) |
| ID_TEXT_JU_MiddleLeft | 좌측중간(ML) | MiddleLeft(ML) |
| ID_TEXT_JU_MiddleRight | 우측중간(MR) | MiddleRight(MR) |
| ID_TEXT_JU_Right | 오른쪽(R) | Right(R) |
| ID_TEXT_JU_TextJustify | 자리 맞추기할 문자 선택 | Select text to justify |
| ID_TEXT_JU_TopCenter | 상단중앙(TC) | TopCenter(TC) |
| ID_TEXT_JU_TopLeft | 좌상단(TL) | TopLeft(TL) |
| ID_TEXT_JU_TopRight | 우상단(TR) | TopRight(TR) |
| ID_TEXT_MAX_AveValue | 평균 값은 | Average value is |
| ID_TEXT_MAX_BetValue | 사이 값은 | Between Max and Min value is |
| ID_TEXT_MAX_FindBet | 사이 값 찾기 | Find Between Max and Min value |
| ID_TEXT_MAX_FindMax | 최대 값 찾기 | Find Maximum value |
| ID_TEXT_MAX_FindMaxMin | 최소 값 찾기 | Find Maximum or Minimum  |
| ID_TEXT_MAX_FindMin | 최소 값 찾기 | Find Minimum value |
| ID_TEXT_MAX_InsertTextDrawing | 찾은 문자를 도면에 쓰시겠습니까? | Do you want to insert the found text to the drawing? |
| ID_TEXT_MAX_MaxValue | 최대 값은 | Maximum value is |
| ID_TEXT_MAX_MinValue | 최소 값은 | Minimum value is |
| ID_TEXT_MAX_NoNumber | 선택한 객체 중 숫자가 포함된 문자가 없습니다. | None of the selected objects contain a number. |
| ID_TEXT_MAX_PointInsert | 삽입할 점 지정 | Select point to insert |
| ID_TEXT_MAX_SelectMaxMin | 최대/최소 값 선택 | Select Maximum or Minimum |
| ID_TEXT_MAX_SelectSettings | 설정({0}) | Settings({0}) |
| ID_TEXT_MAX_TextFindAll | 최대 값/최소 값 모두를 찾을 문자 선택 | Select text to find the maximum and minimum value |
| ID_TEXT_MAX_TextFindBetweenMinAndMax | 최소 ~ 최대 사이 값을 찾을 문자 선택 | Select text to find between maximum and minimum value |
| ID_TEXT_MAX_TextFindMax | 최대 값을 찾을 문자 선택 | Select text to find the maximum value |
| ID_TEXT_MAX_TextFindMin | 최소 값을 찾을 문자 선택 | Select text to find the minimum value |
| ID_TEXT_MINUS_FourOperation | 문자 사칙연산 | Four fundamental arithmetic operations to text |
| ID_TEXT_MINUS_NoNumber | 선택한 객체 중 숫자가 포함된 문자가 없습니다. | None of the selected objects contain a number. |
| ID_TEXT_MINUS_PointInsert | 문자를 삽입할 점 지정 | Select point to insert text |
| ID_TEXT_MINUS_TextSubtract | 빼기할 문자 선택 | Select text to subtract |
| ID_TEXT_PLUS_FourOperation | 문자 사칙연산 | Four fundamental arithmetic operations to text |
| ID_TEXT_PLUS_NoNumber | 선택한 객체 중 숫자가 포함된 문자가 없습니다. | None of the selected objects contain a number. |
| ID_TEXT_PLUS_PointInsert | 문자를 삽입할 점 지정 | Select point to insert text |
| ID_TEXT_PLUS_TextAdd | 더하기할 문자 선택 | Select text to add |
| ID_TEXT_RadioButton_ART_01 | 높은 문자 기준 | Top of text |
| ID_TEXT_RadioButton_ART_02 | 대문자 기준 | Capital height |
| ID_TEXT_RadioButton_ART_03 | 한점 선택 | 1 point |
| ID_TEXT_RadioButton_ART_04 | 두점 선택 | 2 points |
| ID_TEXT_RadioButton_ART_05 | 수평정렬 | Horizontal |
| ID_TEXT_RadioButton_ART_06 | 수직정렬 | Vertical |
| ID_TEXT_RadioButton_ART_07 | 간격지정 | Spacing |
| ID_TEXT_RadioButton_ART_08 | 문자 간격 | Text |
| ID_TEXT_RadioButton_ART_09 | 줄 간격 | Line |
| ID_TEXT_RadioButton_ART_10 | 등 간격 | Equal |
| ID_TEXT_RadioButton_BC_01 | 없음 | None |
| ID_TEXT_RadioButton_BC_02 | 삼각형 | Triangle |
| ID_TEXT_RadioButton_BC_03 | 마름모 | Rhombus |
| ID_TEXT_RadioButton_BC_04 | 직사각형 | Rectangle |
| ID_TEXT_RadioButton_BC_05 | 원 | Circle |
| ID_TEXT_RadioButton_BC_06 | 다각형 | Polygon |
| ID_TEXT_RadioButton_BC_07 | 타원 | Ellipse |
| ID_TEXT_RadioButton_BC_08 | 라운드 사각형 | Round REC |
| ID_TEXT_RadioButton_BC_09 | 문자 높이 맞춤 | Fit to text height |
| ID_TEXT_RadioButton_BC_10 | 사용자 설정 | User-defined |
| ID_TEXT_RadioButton_BC_11 | 반원 | Semicircle |
| ID_TEXT_RadioButton_BC_12 | 반지름 | Radius |
| ID_TEXT_RadioButton_BC_13 | 설정한 값 x DimScale 적용 | Apply DimScale |
| ID_TEXT_RadioButton_BC_14 | 설정한 값 x  | Apply scale factor |
| ID_TEXT_RadioButton_BC_15 | 단일선 | Line |
| ID_TEXT_RadioButton_BC_16 | 폴리선 | Pline |
| ID_TEXT_RadioButton_BC_17 | 화살표 | Arrow |
| ID_TEXT_RadioButton_BC_18 | 점 | Dot |
| ID_TEXT_RadioButton_BC_19 | 중앙 | CEN |
| ID_TEXT_RadioButton_BC_20 | 하단 | BOT |
| ID_TEXT_RadioButton_BC_21 | 상단 | TOP |
| ID_TEXT_RadioButton_CTC_01 | 대문자로 변환 | Uppercase |
| ID_TEXT_RadioButton_CTC_02 | 첫 글자만 대문자로 변환 | Title Case |
| ID_TEXT_RadioButton_CTC_03 | 소문자로 변환 | Lowercase |
| ID_TEXT_RadioButton_CTC_04 | 대소문자 변환 | Toggle Case |
| ID_TEXT_RadioButton_CTE_01 | 엑셀 셀 절정에 따름 | Adopt EXCEL setting |
| ID_TEXT_RadioButton_CTE_02 | 모두 왼쪽 정렬 | Left |
| ID_TEXT_RadioButton_CTE_03 | 모두 가운데 정렬 | Center |
| ID_TEXT_RadioButton_CTE_04 | 모두 오른쪽 정렬 | Right |
| ID_TEXT_RadioButton_CTE_05 | 모두:가운데, 숫자:오른쪽 | Text: Center, Number: Right |
| ID_TEXT_RadioButton_CTE_06 | 모두 위쪽 정렬 | Top |
| ID_TEXT_RadioButton_CTE_07 | 모두 아래쪽 정렬 | Bottom |
| ID_TEXT_RadioButton_CTS_01 | 변경 없음 | No change |
| ID_TEXT_RadioButton_CTS_02 | 색상 변경 | Change color |
| ID_TEXT_RadioButton_CTS_03 | 선택한 문자 레이어와 동일 | Same as selected text layer |
| ID_TEXT_RadioButton_DTTMTEXT_01 | 각각 개별 MText로 변환 | Convert to individual Mtext |
| ID_TEXT_RadioButton_DTTMTEXT_02 | 하나의 MText로 변환 | Convert to single Mtext |
| ID_TEXT_RadioButton_ETC_01 | 자동 | Auto |
| ID_TEXT_RadioButton_ETC_02 | 지정 | Specify |
| ID_TEXT_RadioButton_ETC_03 | 자동 | Auto |
| ID_TEXT_RadioButton_ETC_04 | 정수로 맞춤 | Fit to integer |
| ID_TEXT_RadioButton_ETC_05 | 사용자 높이 | User height |
| ID_TEXT_RadioButton_ETC_06 | 사용자 너비 | User width |
| ID_TEXT_RadioButton_ETC_07 | 단위 값 반올림 | Round unit value |
| ID_TEXT_RadioButton_ETC_08 | 엑셀 셀 높이 값대로 | Keep Excel cell height |
| ID_TEXT_RadioButton_ETC_09 | 엑셀 셀 너비 값대로 | Keep Excel cell width |
| ID_TEXT_RadioButton_FINDANDREPLACETEXT_01 | 도면 전체 | Entire dwg |
| ID_TEXT_RadioButton_FINDANDREPLACETEXT_02 | 현재 도면 | Current dwg |
| ID_TEXT_RadioButton_FINDANDREPLACETEXT_03 | 선택 객체 | Selected |
| ID_TEXT_RadioButton_MAX_01 | 최대 값 찾기 | Find maximum |
| ID_TEXT_RadioButton_MAX_02 | 최소 값 찾기 | Find minimum |
| ID_TEXT_RadioButton_MAX_03 | 모두 | All |
| ID_TEXT_RadioButton_MAX_04 | 사이 값 찾기 | Find between |
| ID_TEXT_RadioButton_MAX_05 | 예 | Yes |
| ID_TEXT_RadioButton_MAX_06 | 아니오 | No |
| ID_TEXT_RadioButton_OPERATION_01 | 점 지정 | Create |
| ID_TEXT_RadioButton_OPERATION_02 | 텍스트 | Modify |
| ID_TEXT_RadioButton_RESFONT_01 | 변경 없음 | No change |
| ID_TEXT_RadioButton_RESFONT_02 | 미설치 글꼴 | Missing font |
| ID_TEXT_RadioButton_RESFONT_03 | 모든 글꼴 | All font |
| ID_TEXT_RadioButton_RESFONT_04 | 선택 TEXT | Selected Text |
| ID_TEXT_RadioButton_RESFONT_05 | 모든 TEXT | All Text |
| ID_TEXT_RadioButton_SED_01 | 문자 직접편집 | Direct edit |
| ID_TEXT_RadioButton_SED_02 | 문자 알파벳 증분 | Alphabetical increment |
| ID_TEXT_RadioButton_SED_03 | 문자 숫자증분 | Numerical increment |
| ID_TEXT_RadioButton_SED_04 | 문자 내용 증분 숫자로 변경 | Replace text with increment |
| ID_TEXT_RadioButton_SED_05 | 문자 앞에 증분 숫자 덧붙임 | Add increment as prefix |
| ID_TEXT_RadioButton_SED_06 | 문자 뒤에 증분 숫자 덧붙임 | Add increment as suffix |
| ID_TEXT_RadioButton_SED_07 | 문자 인식 없음 | None |
| ID_TEXT_RadioButton_SED_08 | 앞 일부 문자 개수만 인식 | First N characters |
| ID_TEXT_RadioButton_SED_09 | 뒤 일부 문자 개수만 인식 | Last N characters |
| ID_TEXT_RadioButton_SED_10 | 지정 문자 앞으로 인식 | N characters before specific text |
| ID_TEXT_RadioButton_SED_11 | 지정 문자 뒤로 인식 | N characters after specific text |
| ID_TEXT_RadioButton_SED_12 | 지정 문자 앞으로 모두 인식 | All before specific text |
| ID_TEXT_RadioButton_SED_13 | 지정 문자 뒤로 모두 인식 | All after specific text |
| ID_TEXT_RadioButton_TB_01 | 원 | Circle |
| ID_TEXT_RadioButton_TB_02 | 삼각형 | Triangle |
| ID_TEXT_RadioButton_TB_03 | 사각형 | Square |
| ID_TEXT_RadioButton_TB_04 | 오각형 | Pentagon |
| ID_TEXT_RadioButton_TB_05 | 육각형 | Hexagon |
| ID_TEXT_RadioButton_TB_06 | 마름모 | Rhombus |
| ID_TEXT_RadioButton_TB_07 | 타원 | Ellipse |
| ID_TEXT_RadioButton_TB_08 | 직사각형 | Rectangle |
| ID_TEXT_RadioButton_TB_09 | 라운드 사각형 | Rounded Rec. |
| ID_TEXT_RadioButton_TB_10 | 반원 | SemiC |
| ID_TEXT_RadioButton_TB_11 | 반지름 | Radius |
| ID_TEXT_RadioButton_TB_12 | 도형 크기 자동 | Auto size |
| ID_TEXT_RadioButton_TB_13 | 문자에서 Offset | Offset from text |
| ID_TEXT_RadioButton_TB_14 | 도형 크기 고정 | Fixed size |
| ID_TEXT_RadioButton_TB_15 | 선택한 문자와 동일 | Same as text |
| ID_TEXT_RadioButton_TB_16 | 사용자 지정 | User define |
| ID_TEXT_RadioButton_TB_17 | 설정한 값 x DimScale 적용 | Value x DimScale |
| ID_TEXT_RadioButton_TB_18 | 설정한 값 x 문자 높이 적용 | Value x Text height |
| ID_TEXT_RadioButton_TB_19 | 설정한 값 x | Value x |
| ID_TEXT_RadioButton_TEI_01 | 신규 문자 생성 | Create text |
| ID_TEXT_RadioButton_TEI_02 | 기존 문자 교체 | Replace existing |
| ID_TEXT_RadioButton_TER_01 | YES | Move |
| ID_TEXT_RadioButton_TEXTTE_01 | 오름차순 | Ascending |
| ID_TEXT_RadioButton_TEXTTE_02 | 내림차순 | Descending |
| ID_TEXT_RadioButton_TEXTTE_03 | 수평 | Hor. |
| ID_TEXT_RadioButton_TEXTTE_04 | 수직 | Ver. |
| ID_TEXT_RadioButton_TEXTTE_05 | 변경 없음 | No change |
| ID_TEXT_RadioButton_TEXTTE_06 | 레이어 변경 | Layer change |
| ID_TEXT_RadioButton_TEXTTE_07 | 내보낸 후 삭제 | Delete after export |
| ID_TEXT_RadioButton_TJO_01 | 여러 문자 선택, 모두 결합 | Join all selected text |
| ID_TEXT_RadioButton_TJO_02 | 여러 문자 선택, 입력 개수씩 결합 | Join selected text by input quantity |
| ID_TEXT_RadioButton_TJO_03 | 여러 문자 한 열씩 선택, 행별 결합 | Join columns/rows by selecting one by one |
| ID_TEXT_RadioButton_TJO_04 | 문자 하나씩 선택, 순서대로 결합 | Join text one by one in order |
| ID_TEXT_RadioButton_TJO_05 | 원 안의 문자만 결합 | Join text inside circles only |
| ID_TEXT_RadioButton_TJO_06 | 처음 문자 | First text |
| ID_TEXT_RadioButton_TJO_07 | 새로 작성 | Create new |
| ID_TEXT_RadioButton_TMC_01 | 좌->우 | Left → Right |
| ID_TEXT_RadioButton_TMC_02 | 우->좌 | Right → Left |
| ID_TEXT_RadioButton_TMC_03 | 위->아래 | Top → Bottom |
| ID_TEXT_RadioButton_TMC_04 | 아래->위 | Bottom → Top |
| ID_TEXT_RadioButton_TMC_05 | 선택한대로 | As selected |
| ID_TEXT_RadioButton_TRD_01 | 오름차순 | Ascending |
| ID_TEXT_RadioButton_TRD_02 | 내림차순 | Descending |
| ID_TEXT_RadioButton_TRP_01 | 한번에 바꾸기 | Replace all |
| ID_TEXT_RadioButton_TRP_02 | 하나씩 바꾸기 | Replace individually |
| ID_TEXT_RadioButton_TRP_03 | 공백 입력 | Insert space |
| ID_TEXT_RadioButton_TRP_04 | 명령어 완료 | Finish |
| ID_TEXT_RESFONT_ApplySettingValue | 설정값으로변경(A) | Change to set value(A) |
| ID_TEXT_RESFONT_ChangeNonInstalledFont | 설치 되어있지 않은 폰트만 '굴림' 으로 변경.(Y) | Change only non-installed fonts to 'Gulim'(Y) |
| ID_TEXT_RESFONT_SelectConversionTextObj | 조합형 -> 완성형 으로 변경할 TEXT 객체 선택. 혹은 | Select the TEXT object to change from combination type to complete type. or |
| ID_TEXT_SED_ChangedText | 변경 문자 :  | Changed Text |
| ID_TEXT_SED_EditCText | 연속 문자 수정 | Edit Continuous Text |
| ID_TEXT_SED_EnterText | 변경 문자 입력 (현재 | Enter text to change ( current |
| ID_TEXT_SED_InputCell | 셀 입력 | Enter cell |
| ID_TEXT_SED_OriginalText | 원본 문자 :  | Original Text |
| ID_TEXT_SED_SelectStartCell | 표를 입력할 시작셀 선택 | Select the starting cell to enter the table |
| ID_TEXT_SED_TargetEdit | 편집할 대상 문자 선택 | Select the target text to edit |
| ID_TEXT_TB_NoText | 선택한 문자가 없습니다. | No text was selected. |
| ID_TEXT_TB_NoZero | 라운드 사각형 반지름 이나 축척 입력 값은 0이 될 수 없습니다. | The round square radius or scale input value cannot be zero. |
| ID_TEXT_TB_TextDraw | 도형을 그릴 문자 선택 | Select text to draw shapes |
| ID_TEXT_TBP_FirstPoint | 선 상의 첫번째 점 지정 | Select first point on the line |
| ID_TEXT_TBP_MidPoint | 중간점에 문자를 쓸 객체 선택 | Select object to write text to at midpoint |
| ID_TEXT_TBP_NewObject | 새 객체 선택(N) | Select New Object(N) |
| ID_TEXT_TBP_SecondPoint | 선 상의 두번째 점 지정 | Select second point on line |
| ID_TEXT_TCO_CopyContent | 문자 내용을 복사할 대상 객체 선택 | Select the target object to copy text content to |
| ID_TEXT_TCO_NotText | 선택한 객체는 문자가 아닙니다. 문자를 선택해 주십시오. | The selected object is not text. Select Text. |
| ID_TEXT_TCO_OriginText | 원본 문자 선택 | Select origin text |
| ID_TEXT_TCO_TextContent | 선택한 문자 내용 | Selected text content |
| ID_TEXT_TEI_BaseDirectionSame | 기준점과 방향점이 같습니다. 다시 지정해 주십시오. | Base point and direction point are the same. Select again. |
| ID_TEXT_TEI_CopyBase | 복사 기준점 선택 | Select copy base point |
| ID_TEXT_TEI_CopyEndPoint | 복사 종료점 지정 | Select copy end point |
| ID_TEXT_TEI_Drag | 끌기(D) | Drag(D) |
| ID_TEXT_TEI_Increasing | 증가 형식 선택 | Select increasing format |
| ID_TEXT_TEI_Invalid | 잘못된 키워드입니다. | Invalid keyword. |
| ID_TEXT_TEI_ObjectNumber | 숫자가 포함된 객체 선택 | Select object with number |
| ID_TEXT_TEI_OnlyOneText | 기존 문자 교체는 하나의 문자 객체만을 선택해야 합니다. | Replace existing texts must select only one text object. |
| ID_TEXT_TEI_PickNext | 다음 점 지정 | Select next point |
| ID_TEXT_TEI_Point | 점(P) | Point(P) |
| ID_TEXT_TEI_SpecifyDirection | 방향 및 간격 거리점 지정 | Specify the direction and spacing distance point |
| ID_TEXT_TER_BasePoint | 이동할 기준점 지정 | Select base point to move |
| ID_TEXT_TER_FirstPoint | 회전할 첫번째 기준점 지정 | Select first base point to rotate |
| ID_TEXT_TER_NextPoint | 다음 점 지정 | Select next point |
| ID_TEXT_TER_NotSame | 첫번째 점과 두번째 점이 같을 수 없습니다. | The first point and the second point cannot be the same. |
| ID_TEXT_TER_SecondPoint | 두번째 점 지정 | Select second point |
| ID_TEXT_TER_TextRotate | 회전할 문자 선택 <현재 설정 : 회전 후 이동 | Select text to rotate <Current Settings : Rotate and Move |
| ID_TEXT_TextBlock_APT_01 | 머리말 | Header |
| ID_TEXT_TextBlock_APT_02 | 중간말 | Intermidate text |
| ID_TEXT_TextBlock_APT_03 | 꼬리말 | Footer |
| ID_TEXT_TextBlock_APT_04 | 중간말 입력 위치 | Location to input intermidate text |
| ID_TEXT_TextBlock_ART_01 | 문자 기준점 | Justify |
| ID_TEXT_TextBlock_ART_02 | 기준점 지정 | Base point selection by |
| ID_TEXT_TextBlock_ART_03 | 정렬 방식 | Alignment |
| ID_TEXT_TextBlock_ART_04 | 간격 맞춤 | Spacing Options |
| ID_TEXT_TextBlock_BC_01 | 모양 | Shape |
| ID_TEXT_TextBlock_BC_02 | 변의 수 | Polygon Sides |
| ID_TEXT_TextBlock_BC_03 | 크기 | Size |
| ID_TEXT_TextBlock_BC_04 | 크기 설정 | Specify Size |
| ID_TEXT_TextBlock_BC_05 | 가로 | W = |
| ID_TEXT_TextBlock_BC_06 | 세로 | H = |
| ID_TEXT_TextBlock_BC_07 | 모따기 | Chamfer |
| ID_TEXT_TextBlock_BC_08 | 반지름 | Radius |
| ID_TEXT_TextBlock_BC_09 | 레이어 | Layer |
| ID_TEXT_TextBlock_BC_10 | 전체 축척 적용 | Overall Scale |
| ID_TEXT_TextBlock_BC_11 | 시작값 | Start value |
| ID_TEXT_TextBlock_BC_12 | 증분값 | Increment |
| ID_TEXT_TextBlock_BC_13 | 자리 수 | Total digits |
| ID_TEXT_TextBlock_BC_14 | 소수 자리 | Decimals |
| ID_TEXT_TextBlock_BC_15 | 문자 높이 | Text height |
| ID_TEXT_TextBlock_BC_16 | 문자 폭 | Width factor |
| ID_TEXT_TextBlock_BC_17 | 기울기 | Oblique angle |
| ID_TEXT_TextBlock_BC_18 | 머리말 | Prefix |
| ID_TEXT_TextBlock_BC_19 | 꼬리말 | Suffix |
| ID_TEXT_TextBlock_BC_20 | 문자 글꼴 | Font |
| ID_TEXT_TextBlock_BC_21 | 지시선 | Leader |
| ID_TEXT_TextBlock_BC_22 | 화살표 | Arrow |
| ID_TEXT_TextBlock_BC_23 | 맞춤 위치 | Justification |
| ID_TEXT_TextBlock_BC_24 | 선 두께 | Pline width |
| ID_TEXT_TextBlock_CTC_01 | 변환 방식 | Case Conversion |
| ID_TEXT_TextBlock_CTE_01 | 가로정렬 | Horizontal Alignment |
| ID_TEXT_TextBlock_CTE_02 | 세로정렬 | Vertical Alignment |
| ID_TEXT_TextBlock_CTE_03 | 레이어 | Layer |
| ID_TEXT_TextBlock_CTS_01 | 문자 외곽선 | Text outline |
| ID_TEXT_TextBlock_CTS_02 | 문자 복사 | Copy text |
| ID_TEXT_TextBlock_CTS_03 | 문자 높이 ×  | Text height × |
| ID_TEXT_TextBlock_CTS_04 | X = 문자 높이 ×  | X = Text height × |
| ID_TEXT_TextBlock_CTS_05 | Y = 문자 높이 ×  | Y = Text height × |
| ID_TEXT_TextBlock_CTS_06 | 레이어 지정 | Specify layer |
| ID_TEXT_TextBlock_CTS_07 | 곡선 구간 정밀도: | Curved section precision: |
| ID_TEXT_TextBlock_DTTMTEXT_01 | 문자 높이 | Text height |
| ID_TEXT_TextBlock_DTTMTEXT_02 | 문자 글꼴 | Text Style |
| ID_TEXT_TextBlock_DTTMTEXT_03 | 레이어 | Layer |
| ID_TEXT_TextBlock_ETC_01 | 레이어 : | Layer |
| ID_TEXT_TextBlock_ETC_02 | 높이 : | H : |
| ID_TEXT_TextBlock_ETC_03 | 엑셀 문자 기준 : | Excel text base |
| ID_TEXT_TextBlock_ETC_04 | 폭 : | W : |
| ID_TEXT_TextBlock_ETC_05 | 선 ~ 문자 간격 : | Cell margin |
| ID_TEXT_TextBlock_ETC_06 | 셀 높이 | Cell height |
| ID_TEXT_TextBlock_ETC_07 | 적용 높이 값 : | Height value : |
| ID_TEXT_TextBlock_ETC_08 | 사용자 높이 : | User height : |
| ID_TEXT_TextBlock_ETC_09 | 적용 단위 값 : | Applied unit : |
| ID_TEXT_TextBlock_ETC_10 | 곱할 비율 값 : | Scale factor : |
| ID_TEXT_TextBlock_ETC_11 | 셀 너비 | Cell width |
| ID_TEXT_TextBlock_ETC_12 | 적용 너비 값 : | Width value : |
| ID_TEXT_TextBlock_ETC_13 | 사용자 너비 : | User width : |
| ID_TEXT_TextBlock_FINDANDREPLACETEXT_01 | 문자 검색 | Find text |
| ID_TEXT_TextBlock_FINDANDREPLACETEXT_02 | 문자 변경 | Change text |
| ID_TEXT_TextBlock_MAX_01 | 찾는 대상 | Serach target |
| ID_TEXT_TextBlock_MAX_02 | 최소 값 | Min. value |
| ID_TEXT_TextBlock_MAX_03 | 최대 값 | Max. value |
| ID_TEXT_TextBlock_MAX_04 | 이상 | ≤ |
| ID_TEXT_TextBlock_MAX_05 | 이하 | ≥ |
| ID_TEXT_TextBlock_MAX_06 | 도면 쓰기 | Create |
| ID_TEXT_TextBlock_MAX_07 | 문자 글꼴 | Style |
| ID_TEXT_TextBlock_MAX_08 | 문자 높이 | Height |
| ID_TEXT_TextBlock_MAX_09 | 문자 폭 | Width |
| ID_TEXT_TextBlock_MAX_10 | 레이어 | Layer |
| ID_TEXT_TextBlock_OPERATION_01 | 삽입 대상 | Mode |
| ID_TEXT_TextBlock_OPERATION_02 | 문자 높이 | Text height |
| ID_TEXT_TextBlock_OPERATION_03 | 소수점 | Decimals |
| ID_TEXT_TextBlock_RESFONT_01 | 변경 범위 | Change Scope |
| ID_TEXT_TextBlock_RESFONT_02 | 변경 폰트 | Change to |
| ID_TEXT_TextBlock_SED_01 | 문자, 숫자 순서 | Application order |
| ID_TEXT_TextBlock_SED_02 | 셀 가져오는 순서 | Order of cell import |
| ID_TEXT_TextBlock_SED_03 | 적용 | Apply |
| ID_TEXT_TextBlock_SED_04 | 알파벳 | Start |
| ID_TEXT_TextBlock_SED_05 | 증분값 | Step |
| ID_TEXT_TextBlock_SED_06 | 머리말 | Prefix |
| ID_TEXT_TextBlock_SED_07 | 꼬리말 | Suffix |
| ID_TEXT_TextBlock_SED_08 | 문자 인식 | Text recognition |
| ID_TEXT_TextBlock_SED_09 | 앞에서 문자 개수 만큼 편집 | Edit N chars from start |
| ID_TEXT_TextBlock_SED_10 | 뒤에서 문자 개수 만큼 편집 | Edit N chars from end |
| ID_TEXT_TextBlock_SED_11 | 지정 문자 : | Specify Text |
| ID_TEXT_TextBlock_SED_12 | 지정 문자 앞으로 개수 만큼 편집 | Edit N chars before specific text |
| ID_TEXT_TextBlock_SED_13 | 지정 문자 뒤로 개수 만큼 편집 | Edit N chars after specific text |
| ID_TEXT_TextBlock_SED_14 | 시작값 | Start |
| ID_TEXT_TextBlock_SED_15 | 자리 수 | Digits |
| ID_TEXT_TextBlock_SED_16 | 소수 자리 | Decimals |
| ID_TEXT_TextBlock_TB_01 | 도형 종류 | Geometry Type |
| ID_TEXT_TextBlock_TB_02 | 라운드 사각 모따기 | Fillet Style |
| ID_TEXT_TextBlock_TB_03 | 라운드 사각 반지름 | Specify Radius |
| ID_TEXT_TextBlock_TB_04 | Offset 넓이 | Offset :   W= |
| ID_TEXT_TextBlock_TB_05 | 높이 | H = |
| ID_TEXT_TextBlock_TB_06 | 지름, 변의 길이 또는 넓이 | Fixed Size (W) = |
| ID_TEXT_TextBlock_TB_07 | 도형의 고정 높이 | Fixed Size (H) = |
| ID_TEXT_TextBlock_TB_08 | 레이어 | Layer |
| ID_TEXT_TextBlock_TB_09 | 전체 축척 적용 | Scaling Method |
| ID_TEXT_TextBlock_TEI_01 | 증분 값 | Increment value |
| ID_TEXT_TextBlock_TEI_02 | 소수점 | Decimals |
| ID_TEXT_TextBlock_TER_01 | 회전 후 이동 | After Rotate |
| ID_TEXT_TextBlock_TEXTTE_01 | 문자 정렬 방식 | Extraction Order |
| ID_TEXT_TextBlock_TEXTTE_02 | 엑셀 입력 방식 | Write to EXCEL |
| ID_TEXT_TextBlock_TEXTTE_03 | Excel로 내보낸 문자 처리 | Process text after export |
| ID_TEXT_TextBlock_TEXTTE_04 | 레이어 | Layer |
| ID_TEXT_TextBlock_TJO_01 | 머리말 | Prefix |
| ID_TEXT_TextBlock_TJO_02 | 결합 문자 | Join text |
| ID_TEXT_TextBlock_TJO_03 | 꼬리말 | Suffix |
| ID_TEXT_TextBlock_TJO_04 | 문자마다 넣기:  | Apply each |
| ID_TEXT_TextBlock_TJO_05 | 개 | items |
| ID_TEXT_TextBlock_TMC_01 | 원본 문자 정렬 | Original |
| ID_TEXT_TextBlock_TMC_02 | 대상 문자 정렬 | Target |
| ID_TEXT_TextBlock_TMP_01 | 선 위 문자 | Text above line |
| ID_TEXT_TextBlock_TMP_02 | 선 아래 문자 | Text below line |
| ID_TEXT_TextBlock_TMP_03 | 문자 글꼴 | Text font |
| ID_TEXT_TextBlock_TMP_04 | 문자 높이 | Text height |
| ID_TEXT_TextBlock_TMP_05 | 문자 폭 | Text width |
| ID_TEXT_TextBlock_TMP_06 | 선 Offset | Line offset |
| ID_TEXT_TextBlock_TMP_07 | 레이어 | Layer |
| ID_TEXT_TextBlock_TRD_01 | 정렬 방식 선택 | Sort Order |
| ID_TEXT_TextBlock_TRD_02 | 문자 결정 순서 | Text Reading Order |
| ID_TEXT_TextBlock_TRP_01 | 문자 변경 옵션 | Change options |
| ID_TEXT_TextBlock_TRP_02 | 스페이스바 기능 | Spacebar |
| ID_TEXT_TextBlock_TRP_03 | 레이어 | Layer |
| ID_TEXT_TEXTORDER_SelectText | 내용 순서대로 정렬할 문자 선택 | Select text to sort by content |
| ID_TEXT_TEXTTE_ExportText | 문자 객체의 문자 내용을 엑셀화면로 내보냅니다. | Exports text content of text object to Excel screen. |
| ID_TEXT_TEXTTE_InputCell | 셀 입력 | Input Cell |
| ID_TEXT_TEXTTE_NoObject | 문자 필터에 해당하는 객체가 없습니다. | No object corresponding to the text filter. |
| ID_TEXT_TEXTTE_SendExcel | 엑셀로 보낼 문자 객체 선택 | Select text object to send to Excel |
| ID_TEXT_TEXTTE_StartCell | 표를 입력할 시작셀 선택 | Select start cell to enter table |
| ID_TEXT_THP_Comma | 쉼표(C) | Comma(C) |
| ID_TEXT_THP_Delete | 삭제(D) | Delete(D) |
| ID_TEXT_THP_DeleteObject | 삭제할 객체 선택 | Select objects to delete |
| ID_TEXT_THP_Dimension | 치수 문자 수정 | Modify Dimension Text |
| ID_TEXT_THP_No | 아니오(N) | No(N) |
| ID_TEXT_THP_Period | 마침표(P) | Period(P) |
| ID_TEXT_THP_Unit | 천단위 표기 | 1000 Unit Indication |
| ID_TEXT_THP_UnitOption | 천단위 표기 옵션 | 1000 Unit Indication option |
| ID_TEXT_THP_Write | 표기(W) | Write(W) |
| ID_TEXT_THP_WriteObject | 표기할 객체 선택 | Select an object to mark |
| ID_TEXT_THP_Yes | 네(Y) | Yes(Y) |
| ID_TEXT_TIMES_FourOperation | 문자 사칙연산 | Four fundamental arithmetic operations to text |
| ID_TEXT_TIMES_NoNumber | 선택한 객체 중 숫자가 포함된 문자가 없습니다. | None of the selected objects contain a number. |
| ID_TEXT_TIMES_PointInsert | 문자를 삽입할 점 지정 | Select point to insert text |
| ID_TEXT_TIMES_TextMultiply | 곱하기할 문자 선택 | Select text to multiply |
| ID_TEXT_TIP_AdditionalPoint | 추가 점 지정 | Select additional point |
| ID_TEXT_TIP_Center | 중앙 | Center |
| ID_TEXT_TIP_Draw | 그리기 | Apply |
| ID_TEXT_TIP_InputPolygon | 다각형에 3이상을 넣어 주세요. | Input at least 3 in the polygon. |
| ID_TEXT_TIP_InputRadius | 반지름 길이를 다시 넣어 주세요. | Input the radius length again. |
| ID_TEXT_TIP_Justify | 맞춤 | Justify |
| ID_TEXT_TIP_LeaderLineStart | 지시선 시작점 지정  | Select leader line start point |
| ID_TEXT_TIP_None | 없음 | None. |
| ID_TEXT_TIP_Radius | 반지름 | Radius |
| ID_TEXT_TIP_Semicircle | 반원 | semicircle |
| ID_TEXT_TIP_SingleLine | 단일선 | Single line |
| ID_TEXT_TIP_TextInsertPoint | 문자 삽입점 지정 | Select text insert point |
| ID_TEXT_TIP_Top | 상단 | Top |
| ID_TEXT_TJO_AtLeastTwo | 문자를 2개 이상 선택해 주십시오. | Please select at least 2 texts. |
| ID_TEXT_TJO_Combine | 몇개씩 결합할지 입력 | Enter how many to combine |
| ID_TEXT_TJO_NoCircle | 원 객체가 아닙니다. | It's not a circle object |
| ID_TEXT_TJO_NoneExistEnter | 없으면 엔터 | Enter if none exists |
| ID_TEXT_TJO_NoTextObject | 문자 객체가 아닙니다. | This is not a text object. |
| ID_TEXT_TJO_Select | 선택 | Select |
| ID_TEXT_TJO_SelectAll | 결합할 문자들 모두 선택 | Select all text to join |
| ID_TEXT_TJO_SelectBaseCircle | 기준 원 선택 | Select Reference Circle |
| ID_TEXT_TJO_SelectContent | 선택한 내용 | Selected Content |
| ID_TEXT_TJO_SelectionRange | 원 선택 범위 지정 | Specify Circle Selection Range |
| ID_TEXT_TJO_SelectText | 결합할 문자 선택 | Select text to join |
| ID_TEXT_TJO_StringJoin | 결합할 문자 열 | String to join |
| ID_TEXT_TMC_MoreOrigin | 원본 문자 개수가 대상 문자 개수보다 많습니다. | There are more original texts than target texts. |
| ID_TEXT_TMC_MoreTarget | 대상 문자 개수가 원본 문자 개수보다 많습니다. | There are more target texts than original texts. |
| ID_TEXT_TMC_Origin | 원본 문자 객체 선택 | Select the original text objects. |
| ID_TEXT_TMC_Target | 대상 문자 객체 선택 | Select the target text objects. |
| ID_TEXT_TR_Change | 개의 문자가 변경되었습니다. | texts have been changed. |
| ID_TEXT_TR_ChangeO | 바꾸기(O) | Change(O) |
| ID_TEXT_TR_ChangeTextOnce | 한번에바꾸기(A) | Change it at once(A). |
| ID_TEXT_TR_ChangeTextOneByOne | 하나씩바꾸기(O) | Change it one by one(O). |
| ID_TEXT_TR_Enter | 지정 문자 입력 | Enter specified text content |
| ID_TEXT_TR_Exit | 종료(C) | Close(C) |
| ID_TEXT_TR_FindNext | 다음찾기(P) | FindNext(P) |
| ID_TEXT_TR_Modify | 수정할 문자 객체 선택 | Select text objects to modify. |
| ID_TEXT_TR_NoContain | 지정 문자가 포함된 문자 객체가 없습니다. | No text object contains the specified text content. |
| ID_TEXT_TR_NoEnter | 입력된 문자가 없습니다. | No text content entered. |
| ID_TEXT_TR_Option | 옵션 선택 | Select option |
| ID_TEXT_TR_Question | 해당 문자를 변경하시겠습니까? | Do you want to change that text? |
| ID_TEXT_TR_Replace | 대체 문자 입력 | Enter text content for replacement |
| ID_TEXT_TR_Total | 개 중 | texts in total. |
| ID_TEXT_TSW_Content | 내용을 바꿀 | Select |
| ID_TEXT_TSW_First | 첫번째 | First text |
| ID_TEXT_TSW_NotText | 선택한 객체는 문자가 아닙니다. 문자를 선택해 주십시오. | Selected object is not text. Select text. |
| ID_TEXT_TSW_Second | 두번째 | Second text |
| ID_TEXT_TSW_SelectText | 문자 선택 | to change the content |
| ID_TEXT_TTC_CopyToClipboard | 선택한 텍스트가 클립보드에 복사 되었습니다. | The selected text has been copied to the clipboard. |
| ID_TEXT_TTC_SelectTextToCopyClipboard | 클립보드에 복사 할 문자 선택 | Select texts to copy to clipboard |
| ID_TEXT_XCD_NoText | 현재 도면에 Excel에서 그려진 문자 객체가 없습니다 | No text object drawn in Excel in the current drawing |
| ID_TEXT_XCD_Object | 객체 선택 | Select object |
| ID_VIEW_Button_MVP_01 | 도면에서 선택 | Pick |
| ID_VIEW_CheckBox_MVP_01 | 뷰포트 모형에서 UCS 아이콘 보이도록 설정 | Show UCS icon in viewport |
| ID_VIEW_CheckBox_MVP_02 | 뷰포트 생성 후 모형의 선택 경계 삭제 | Delete boundary after creation |
| ID_VIEW_CheckBox_MVP_03 | 만든 뷰포트에서 지정 레이어 VP 동결 | Freeze selected layer in viewport |
| ID_VIEW_CheckBox_MVP_04 | 실행 중 도면에서 선택한 도곽 뷰포트에 삽입 | Insert into selected title block |
| ID_VIEW_CheckBox_MVP_05 | 여러 경계 각각 이름 증분한 배치에 넣기 | Create layout for each boundary |
| ID_VIEW_ComboBox_MVP_LayApplyOpt_01 | 선택 레이어 VP 동결 | Freeze selected layers in VP |
| ID_VIEW_ComboBox_MVP_LayApplyOpt_02 | 선택 레이어 VP 동결 해제 | Unfreeze selected layers in VP |
| ID_VIEW_ComboBox_MVP_LayApplyOpt_03 | 선택 레이어만 켜기(동결 해제) | Isolate selected layers in VP |
| ID_VIEW_EDVIEWHOR_PickFirstPoint | 수평으로 만들 첫번째 점 지정(아무키나 입력시 복원) | Select the first point to be horizontal (type any key to restore) |
| ID_VIEW_EDVIEWHOR_PickSecondPoint | 수평으로 만들 두번째 점 지정 | Select the second point to be horizontal |
| ID_VIEW_EDVIEWHOR_ViewChanged | 뷰가 변경 되었습니다. | The view has been changed. |
| ID_VIEW_EDVIEWHOR_ViewRestored | 뷰가 복원 되었습니다. | The view has been restored. |
| ID_VIEW_EDVIEWVER_PickFirstPoint | 수직으로 만들 첫번째 점 지정(아무키나 입력시 복원) | Select the first point to be vertical (type any key to restore) |
| ID_VIEW_EDVIEWVER_PickSecondPoint | 수직으로 만들 두번째 점 지정 | Select the second point to be vertical |
| ID_VIEW_EDVIEWVER_ViewChanged | 뷰가 변경 되었습니다. | The view has been changed. |
| ID_VIEW_EDVIEWVER_ViewRestored | 뷰가 복원 되었습니다. | The view has been restored. |
| ID_VIEW_GroupName_01 | 경계 선택 | Select Boundary |
| ID_VIEW_GroupName_02 | 뷰포트 설정 | Viewport Settings |
| ID_VIEW_GroupName_03 | 배치(Layout)설정 | Layout Settings |
| ID_VIEW_MAKEVP_DiagramBlock | 도곽 블록 선택 | Select a Diagram Block |
| ID_VIEW_MAKEVP_EndPoint | 끝 점 지정 | Specify an endpoint |
| ID_VIEW_MAKEVP_FirstEdge | 뷰포트 위치 첫번째 모서리 | Viewport Location First Edge |
| ID_VIEW_MAKEVP_NoClosedObject | 객체가 닫혀있지 않습니다 | Object is not closed |
| ID_VIEW_MAKEVP_NoClosedSpline | 스플라인이 닫혀있지 않습니다 | Spline is not closed |
| ID_VIEW_MAKEVP_SelectObject | 레이어를 받아올 객체 선택 | Select the object from which you want to receive the layer |
| ID_VIEW_MAKEVP_SelectVPFrz | VP 동결 레이어를 받을 객체 선택 | Select the object to receive the VP Freeze Layer |
| ID_VIEW_MAKEVP_StartPoint | 수평으로 설정할 시작 점 지정(혹은 Enter) | Specify the starting point to be horizontal (or Enter) |
| ID_VIEW_MAKEVP_ViewportBoundary | 뷰포트 경계 객체 선택 | Select Viewport Boundary Object |
| ID_VIEW_MYOSNAP_OsnapSetting | 으로 OSNAP을 설정합니다. | Set OSNAP with |
| ID_VIEW_MYOSNAP_Save | 저장 | Save |
| ID_VIEW_MYOSNAP_Settings | 설정 | Setting |
| ID_VIEW_RadioButton_MVP_01 | 하나의 경계 선택 | Single |
| ID_VIEW_RadioButton_MVP_02 | 여러 경계 선택 | Multiple |
| ID_VIEW_RadioButton_MVP_03 | 경계와 동일 | Same as boundary |
| ID_VIEW_RadioButton_MVP_04 | 사용자 지정 | User defined |
| ID_VIEW_RadioButton_MVP_05 | 기존 배치 | Existing layout |
| ID_VIEW_RadioButton_MVP_06 | 사용자 지정 | User defined |
| ID_VIEW_TextBlock_LAYER | 레이어 | Layer |
| ID_VIEW_TextBlock_LAYERNAME | 레이어명 | Layer name |
| ID_VIEW_TextBlock_MVP_01 | 축척 | Scale |
| ID_VIEW_TextBlock_MVP_02_01 | 뷰포트 | Viewport |
| ID_VIEW_TextBlock_MVP_02_02 | 생성 위치 | Location |
| ID_VIEW_TextBlock_MVP_03 | 정렬 순서 | Sort Order |
| ID_VIEW_TextBlock_MVP_04 | 정렬 오차 | Sort Tolerance |
| ID_VIEW_TextBlock_MVP_05 | 레이어 적용 | Options |
| ID_VIEW_TextBlock_MVP_06 | VP 동결 레이어 지정 | Select layers to freeze in VP |
| ID_VIEW_TextBlock_SELECT | 선택 | Select |
| ID_WATER_SURVPOINT | 측점 | Survey Point |


import styled from 'styled-components';
import palette from '../../styles/palette';
const NaverLoginBtn = () => {
  return (
    <Wrap>
      <Icon
        viewBox='0 0 14 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        // xmlns:xlink='http://www.w3.org/1999/xlink'
      >
        <rect width='14' height='14' fill='url(#pattern0)' />
        <defs>
          <pattern
            id='pattern0'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'>
            {/* <use xlink:href='#image0_84_1730' transform='scale(0.0227273)' /> */}
            <use href='#image0_84_1730' transform='scale(0.0227273)' />
          </pattern>
          <image
            id='image0_84_1730'
            width='44'
            height='44'
            // xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFwmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuYjBmOGJlOTAsIDIwMjEvMTIvMTUtMjE6MjU6MTUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMy4yIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wMy0xN1QwMDo0NDowNiswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDMtMTdUMDA6NDU6NDErMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDMtMTdUMDA6NDU6NDErMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE0MTA1MjIzLWZhYjgtNGJkMC05NzkxLThhNjQ3NDZlZmM1YyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyZGRlNzc2Zi00YjI2LTRiY2ItOGJiMi05ZTAwMGI3MTZlZWUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyZGRlNzc2Zi00YjI2LTRiY2ItOGJiMi05ZTAwMGI3MTZlZWUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjJkZGU3NzZmLTRiMjYtNGJjYi04YmIyLTllMDAwYjcxNmVlZSIgc3RFdnQ6d2hlbj0iMjAyMi0wMy0xN1QwMDo0NDowNiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjIgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE0MTA1MjIzLWZhYjgtNGJkMC05NzkxLThhNjQ3NDZlZmM1YyIgc3RFdnQ6d2hlbj0iMjAyMi0wMy0xN1QwMDo0NTo0MSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjIgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+djQoIQAAAYlJREFUWIXF16FuVFEUheEPENjr6jAjkSheAVdVbCsRpBmDQCNqJqQCCYqEKlxfAQOPUIPDja0gg7hJkybNZO45ax+Wnr3OL9bsve6j3W63s1w3eI7bhll4gZ8tg48bH1xh0zjbpVZgeINXKZBD1QMMl5gCHAerF3iFzwmQQ9ULDMcGRiMBDF/xLOS1VyngCR9DXnuVAmaOxmnQ70ElgZl3c2k00sATvuFJ2PdOaWB4iXcFvqgBhg/mvhBXFTBc4WnatBK4pCBVAlNQkKqBCRekEcDRgjQCmOAVHAVM6Ar2AN8s/P0kUJB6gN9iu3CmOxo9wH+wbpjb4Kj10d4Mf8H3hTOTedU1KfGnO7c8GqvWxxLAv7VFo0mptdYSjSYl9/CZ5atusZLAW/OqK1X60l3jU9jznipO81phNCqAb3FS4Iu68vML7yuMK9vaBX6kTSuB/+K15Vdwr6r7cPwKjijw0Ss46ovjXCgao4Bj0Rj5TReJxkhgAgVpNPBWZ0EaDUxnQfofwHQUpH8AezdU1rFm0QAAAABJRU5ErkJggg=='
            href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFwmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuYjBmOGJlOTAsIDIwMjEvMTIvMTUtMjE6MjU6MTUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMy4yIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wMy0xN1QwMDo0NDowNiswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDMtMTdUMDA6NDU6NDErMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDMtMTdUMDA6NDU6NDErMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE0MTA1MjIzLWZhYjgtNGJkMC05NzkxLThhNjQ3NDZlZmM1YyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyZGRlNzc2Zi00YjI2LTRiY2ItOGJiMi05ZTAwMGI3MTZlZWUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyZGRlNzc2Zi00YjI2LTRiY2ItOGJiMi05ZTAwMGI3MTZlZWUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjJkZGU3NzZmLTRiMjYtNGJjYi04YmIyLTllMDAwYjcxNmVlZSIgc3RFdnQ6d2hlbj0iMjAyMi0wMy0xN1QwMDo0NDowNiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjIgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE0MTA1MjIzLWZhYjgtNGJkMC05NzkxLThhNjQ3NDZlZmM1YyIgc3RFdnQ6d2hlbj0iMjAyMi0wMy0xN1QwMDo0NTo0MSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjIgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+djQoIQAAAYlJREFUWIXF16FuVFEUheEPENjr6jAjkSheAVdVbCsRpBmDQCNqJqQCCYqEKlxfAQOPUIPDja0gg7hJkybNZO45ax+Wnr3OL9bsve6j3W63s1w3eI7bhll4gZ8tg48bH1xh0zjbpVZgeINXKZBD1QMMl5gCHAerF3iFzwmQQ9ULDMcGRiMBDF/xLOS1VyngCR9DXnuVAmaOxmnQ70ElgZl3c2k00sATvuFJ2PdOaWB4iXcFvqgBhg/mvhBXFTBc4WnatBK4pCBVAlNQkKqBCRekEcDRgjQCmOAVHAVM6Ar2AN8s/P0kUJB6gN9iu3CmOxo9wH+wbpjb4Kj10d4Mf8H3hTOTedU1KfGnO7c8GqvWxxLAv7VFo0mptdYSjSYl9/CZ5atusZLAW/OqK1X60l3jU9jznipO81phNCqAb3FS4Iu68vML7yuMK9vaBX6kTSuB/+K15Vdwr6r7cPwKjijw0Ss46ovjXCgao4Bj0Rj5TReJxkhgAgVpNPBWZ0EaDUxnQfofwHQUpH8AezdU1rFm0QAAAABJRU5ErkJggg=='
          />
        </defs>
      </Icon>
      네이버 계정으로 로그인
    </Wrap>
  );
};

export default NaverLoginBtn;
const Wrap = styled.div`
  width: 100%;
  border-radius: 10px;
  height: 28%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${palette.naverGreen};
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  cursor: pointer;
  font-size: 17px;
  margin-bottom: 3%;
`;
const Icon = styled.svg`
  width: 14px;
  height: 14px;
  margin-right: 6px;
`;

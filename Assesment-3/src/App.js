import ColorCards from "./components/ColorCards";
function App () {
  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    fontFamily: 'Arial, Helvetica, sans-serif'
  }
  return (
    <div style={style}>
      <ColorCards colorName='Pink' colorCode='#FF6663'/>
      <ColorCards colorName='Gray' colorCode='#333333'/>
      <ColorCards colorName='Black' colorCode='#000000'/>
      <ColorCards colorName='Green' colorCode='#38BB14'/>
      <ColorCards colorName='Red' colorCode='#390B0B'/>
      <ColorCards colorName='Orange' colorCode='#FF8000'/>
      <ColorCards colorName='Yellow' colorCode='#FFF500'/>
      <ColorCards colorName='Light Gray' colorCode='#CCCCCC'/>
      <ColorCards colorName='Purple' colorCode='#7E41A2'/>
      <ColorCards colorName='Brown' colorCode='#C14911'/>
    </div>
  );
}

export default App;

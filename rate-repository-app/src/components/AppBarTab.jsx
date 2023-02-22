import Text from "./Text";

const AppBarTab = ({ tabText }) => {
  return (
    <Text fontSize="subheading" style={{ color: "white", paddingLeft: 10 }}>
      {tabText}
    </Text>
  );
};

export default AppBarTab;

const styledTitle = {
  color: "#6c757d",
  marginBottom: 20,
  fontSize: 45,
  fontWeight: 400,
  textAlign: "center",
};

// eslint-disable-next-line react/prop-types
export const Title = ({ title }) => {
  return <h1 style={styledTitle}>{title}</h1>;
};

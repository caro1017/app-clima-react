import { Title } from "../Title/Title";
import { Searcher } from "../Searcher/Searcher";

export const Container = () => {
  const styles = {
    container: {
      position: "absolute",
      width: "65%",
      height: "100%",
      backgroundColor: "#ffffff2e",
      backdropFilter: "blur(10px)",
    },
    search: {
      padding: 40,
      textTransform: "uppercase",
    },
    footer: {
      color: "#6c757d",
      fontSize: 13,
      fontWeight: 400,
      textAlign: "center",
    },
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.search}>
          <Title title="Clima" />
          <Searcher />
        </div>
        <div>
          <p style={styles.footer}>
            Copyright &copy; 2022 by Carolina Uribe Botero
          </p>
        </div>
      </div>
    </>
  );
};

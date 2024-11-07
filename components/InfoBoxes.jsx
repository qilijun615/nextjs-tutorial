import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Approving Officer"
            buttonInfo={{
              text: "Review Performance",
              link: "/tasks",
              backgroundColor: "bg-black",
            }}
          >
            To review your staff performance
          </InfoBox>
          <InfoBox
            heading="For Staff"
            buttonInfo={{
              text: "Input Review",
              link: "/drinks",
              backgroundColor: "bg-gray-800",
            }}
            backgroundColor="bg-cyan-100"
          >
            To do your appraisal
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;

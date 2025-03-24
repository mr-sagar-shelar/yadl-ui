import type { Meta, StoryObj } from "@storybook/react";
import PedestrianCrossingPedestrianCrossing from "../PedestrianCrossingPedestrianCrossing";

const meta: Meta<typeof PedestrianCrossingPedestrianCrossing> = { title: "unDraw/PedestrianCrossingPedestrianCrossing", component: PedestrianCrossingPedestrianCrossing };

export default meta;
type Story = StoryObj<typeof PedestrianCrossingPedestrianCrossing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

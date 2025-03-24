import type { Meta, StoryObj } from "@storybook/react";
import FestivitiesFestivities from "../FestivitiesFestivities";

const meta: Meta<typeof FestivitiesFestivities> = { title: "unDraw/FestivitiesFestivities", component: FestivitiesFestivities };

export default meta;
type Story = StoryObj<typeof FestivitiesFestivities>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

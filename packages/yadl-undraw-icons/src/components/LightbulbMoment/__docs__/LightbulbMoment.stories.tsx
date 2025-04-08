import type { Meta, StoryObj } from "@storybook/react";
import LightbulbMoment from "../LightbulbMoment";

const meta: Meta<typeof LightbulbMoment> = { title: "unDraw/LightbulbMoment", component: LightbulbMoment };

export default meta;
type Story = StoryObj<typeof LightbulbMoment>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

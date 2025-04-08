import type { Meta, StoryObj } from "@storybook/react";
import InstantInformation from "../InstantInformation";

const meta: Meta<typeof InstantInformation> = { title: "unDraw/InstantInformation", component: InstantInformation };

export default meta;
type Story = StoryObj<typeof InstantInformation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

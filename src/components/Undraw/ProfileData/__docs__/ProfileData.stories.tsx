import type { Meta, StoryObj } from "@storybook/react";
import ProfileData from "../ProfileData";

const meta: Meta<typeof ProfileData> = { title: "unDraw/ProfileData", component: ProfileData };

export default meta;
type Story = StoryObj<typeof ProfileData>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import ProfileDetails from "../ProfileDetails";

const meta: Meta<typeof ProfileDetails> = { title: "unDraw/ProfileDetails", component: ProfileDetails };

export default meta;
type Story = StoryObj<typeof ProfileDetails>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import PersonalInfo from "../PersonalInfo";

const meta: Meta<typeof PersonalInfo> = { title: "unDraw/PersonalInfo", component: PersonalInfo };

export default meta;
type Story = StoryObj<typeof PersonalInfo>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

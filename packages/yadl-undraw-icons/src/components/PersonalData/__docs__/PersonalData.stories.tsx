import type { Meta, StoryObj } from "@storybook/react";
import PersonalData from "../PersonalData";

const meta: Meta<typeof PersonalData> = { title: "unDraw/PersonalData", component: PersonalData };

export default meta;
type Story = StoryObj<typeof PersonalData>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

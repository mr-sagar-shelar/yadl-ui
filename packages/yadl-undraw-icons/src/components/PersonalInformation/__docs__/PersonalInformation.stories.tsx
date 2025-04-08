import type { Meta, StoryObj } from "@storybook/react";
import PersonalInformation from "../PersonalInformation";

const meta: Meta<typeof PersonalInformation> = { title: "unDraw/PersonalInformation", component: PersonalInformation };

export default meta;
type Story = StoryObj<typeof PersonalInformation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

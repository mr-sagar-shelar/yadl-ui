import type { Meta, StoryObj } from "@storybook/react";
import PersonalWebsite from "../PersonalWebsite";

const meta: Meta<typeof PersonalWebsite> = { title: "unDraw/PersonalWebsite", component: PersonalWebsite };

export default meta;
type Story = StoryObj<typeof PersonalWebsite>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

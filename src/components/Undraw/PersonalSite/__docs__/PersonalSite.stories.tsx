import type { Meta, StoryObj } from "@storybook/react";
import PersonalSite from "../PersonalSite";

const meta: Meta<typeof PersonalSite> = { title: "unDraw/PersonalSite", component: PersonalSite };

export default meta;
type Story = StoryObj<typeof PersonalSite>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

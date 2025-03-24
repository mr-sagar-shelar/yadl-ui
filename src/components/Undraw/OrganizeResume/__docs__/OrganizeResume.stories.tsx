import type { Meta, StoryObj } from "@storybook/react";
import OrganizeResume from "../OrganizeResume";

const meta: Meta<typeof OrganizeResume> = { title: "unDraw/OrganizeResume", component: OrganizeResume };

export default meta;
type Story = StoryObj<typeof OrganizeResume>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

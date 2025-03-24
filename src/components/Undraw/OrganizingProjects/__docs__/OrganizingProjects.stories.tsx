import type { Meta, StoryObj } from "@storybook/react";
import OrganizingProjects from "../OrganizingProjects";

const meta: Meta<typeof OrganizingProjects> = { title: "unDraw/OrganizingProjects", component: OrganizingProjects };

export default meta;
type Story = StoryObj<typeof OrganizingProjects>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import OrganizingData from "../OrganizingData";

const meta: Meta<typeof OrganizingData> = { title: "unDraw/OrganizingData", component: OrganizingData };

export default meta;
type Story = StoryObj<typeof OrganizingData>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

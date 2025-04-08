import type { Meta, StoryObj } from "@storybook/react";
import OrganizePhotos from "../OrganizePhotos";

const meta: Meta<typeof OrganizePhotos> = { title: "unDraw/OrganizePhotos", component: OrganizePhotos };

export default meta;
type Story = StoryObj<typeof OrganizePhotos>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

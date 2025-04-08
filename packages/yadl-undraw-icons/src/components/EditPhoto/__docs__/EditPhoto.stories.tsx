import type { Meta, StoryObj } from "@storybook/react";
import EditPhoto from "../EditPhoto";

const meta: Meta<typeof EditPhoto> = { title: "unDraw/EditPhoto", component: EditPhoto };

export default meta;
type Story = StoryObj<typeof EditPhoto>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

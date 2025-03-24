import type { Meta, StoryObj } from "@storybook/react";
import Collection from "../Collection";

const meta: Meta<typeof Collection> = { title: "unDraw/Collection", component: Collection };

export default meta;
type Story = StoryObj<typeof Collection>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

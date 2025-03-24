import type { Meta, StoryObj } from "@storybook/react";
import SmallTown from "../SmallTown";

const meta: Meta<typeof SmallTown> = { title: "unDraw/SmallTown", component: SmallTown };

export default meta;
type Story = StoryObj<typeof SmallTown>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import NewYear2025 from "../NewYear2025";

const meta: Meta<typeof NewYear2025> = { title: "unDraw/NewYear2025", component: NewYear2025 };

export default meta;
type Story = StoryObj<typeof NewYear2025>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

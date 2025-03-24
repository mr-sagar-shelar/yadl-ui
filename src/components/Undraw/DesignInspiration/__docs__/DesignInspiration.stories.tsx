import type { Meta, StoryObj } from "@storybook/react";
import DesignInspiration from "../DesignInspiration";

const meta: Meta<typeof DesignInspiration> = { title: "unDraw/DesignInspiration", component: DesignInspiration };

export default meta;
type Story = StoryObj<typeof DesignInspiration>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

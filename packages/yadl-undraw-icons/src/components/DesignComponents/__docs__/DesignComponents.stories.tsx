import type { Meta, StoryObj } from "@storybook/react";
import DesignComponents from "../DesignComponents";

const meta: Meta<typeof DesignComponents> = { title: "unDraw/DesignComponents", component: DesignComponents };

export default meta;
type Story = StoryObj<typeof DesignComponents>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import GoingOffline from "../GoingOffline";

const meta: Meta<typeof GoingOffline> = { title: "unDraw/GoingOffline", component: GoingOffline };

export default meta;
type Story = StoryObj<typeof GoingOffline>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

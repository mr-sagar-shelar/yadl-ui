import type { Meta, StoryObj } from "@storybook/react";
import PrototypingProcess from "../PrototypingProcess";

const meta: Meta<typeof PrototypingProcess> = { title: "unDraw/PrototypingProcess", component: PrototypingProcess };

export default meta;
type Story = StoryObj<typeof PrototypingProcess>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

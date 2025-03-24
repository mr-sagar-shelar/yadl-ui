import type { Meta, StoryObj } from "@storybook/react";
import Heavy_boxHeavyBox from "../Heavy_boxHeavyBox";

const meta: Meta<typeof Heavy_boxHeavyBox> = { title: "unDraw/Heavy_boxHeavyBox", component: Heavy_boxHeavyBox };

export default meta;
type Story = StoryObj<typeof Heavy_boxHeavyBox>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

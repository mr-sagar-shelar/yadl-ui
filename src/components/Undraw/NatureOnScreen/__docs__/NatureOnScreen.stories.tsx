import type { Meta, StoryObj } from "@storybook/react";
import NatureOnScreen from "../NatureOnScreen";

const meta: Meta<typeof NatureOnScreen> = { title: "unDraw/NatureOnScreen", component: NatureOnScreen };

export default meta;
type Story = StoryObj<typeof NatureOnScreen>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

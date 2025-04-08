import type { Meta, StoryObj } from "@storybook/react";
import AthletesTraining from "../AthletesTraining";

const meta: Meta<typeof AthletesTraining> = { title: "unDraw/AthletesTraining", component: AthletesTraining };

export default meta;
type Story = StoryObj<typeof AthletesTraining>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

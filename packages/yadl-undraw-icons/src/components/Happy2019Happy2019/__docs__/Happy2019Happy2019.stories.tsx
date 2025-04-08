import type { Meta, StoryObj } from "@storybook/react";
import Happy2019Happy2019 from "../Happy2019Happy2019";

const meta: Meta<typeof Happy2019Happy2019> = { title: "unDraw/Happy2019Happy2019", component: Happy2019Happy2019 };

export default meta;
type Story = StoryObj<typeof Happy2019Happy2019>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

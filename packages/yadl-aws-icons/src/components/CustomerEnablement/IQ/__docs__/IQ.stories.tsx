import type { Meta, StoryObj } from "@storybook/react";
import IQ from "../IQ";

const meta: Meta<typeof IQ> = { title: "AWS/CustomerEnablement/IQ", component: IQ };

export default meta;
type Story = StoryObj<typeof IQ>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
